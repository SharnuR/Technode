// scripts/generate-tree.ts
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

// 1. Resolve paths correctly relative to this script file location
const projectRoot = fileURLToPath(new URL("..", import.meta.url));
const readmePath = join(projectRoot, "README.md");

// Directories to completely filter out of your visualization diagram
const ignoredNames = new Set([
  ".angular",
  "dist",
  "node_modules",
  "coverage",
  ".git",
]);
const startMarker = "<!-- FOLDER-STRUCTURE:START -->";
const endMarker = "<!-- FOLDER-STRUCTURE:END -->";

// 2. Added type annotations (: string, : any[]) to satisfy the TypeScript compiler
async function createTree(
  directory: string,
  prefix: string = "",
): Promise<string[]> {
  const entries = (await readdir(directory, { withFileTypes: true }))
    .filter((entry) => !ignoredNames.has(entry.name))
    .sort((left, right) => {
      if (left.isDirectory() !== right.isDirectory()) {
        return left.isDirectory() ? -1 : 1;
      }
      return left.name.localeCompare(right.name);
    });

  const lines: string[] = [];

  for (const [index, entry] of entries.entries()) {
    const isLast = index === entries.length - 1;
    const branch = isLast ? "└── " : "├── ";
    const childPrefix = isLast ? "    " : "│   ";
    const suffix = entry.isDirectory() ? "/" : "";

    lines.push(`${prefix}${branch}${entry.name}${suffix}`);

    if (entry.isDirectory()) {
      lines.push(
        ...(await createTree(
          join(directory, entry.name),
          `${prefix}${childPrefix}`,
        )),
      );
    }
  }

  return lines;
}

// 3. Execution Pipeline utilizing native ES top-level await modules
try {
  const tree = ["node-api/", ...(await createTree(projectRoot, ""))].join("\n");
  const readme = await readFile(readmePath, "utf8");
  const startIndex = readme.indexOf(startMarker);
  const endIndex = readme.indexOf(endMarker);

  if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
    throw new Error(
      `README.md must contain both ${startMarker} and ${endMarker} injection tags.`,
    );
  }

  const replacement = `${startMarker}\n\n\`\`\`text\n${tree}\n\`\`\`\n${endMarker}`;
  const updatedReadme = `${readme.slice(0, startIndex)}${replacement}${readme.slice(endIndex + endMarker.length)}`;

  if (updatedReadme !== readme) {
    await writeFile(readmePath, updatedReadme);
    console.log(
      "✨ Success: Updated README.md folder structure tree visualization.",
    );
  } else {
    console.log(
      "ℹ️ Notice: README.md folder structure tree is already up to date.",
    );
  }
} catch (error: any) {
  console.error(`❌ Automation Script Failed: ${error.message}`);
}
