import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('..', import.meta.url));
const readmePath = join(projectRoot, 'README.md');
const ignoredNames = new Set(['.angular', 'dist', 'node_modules', 'coverage']);
const startMarker = '<!-- FOLDER-STRUCTURE:START -->';
const endMarker = '<!-- FOLDER-STRUCTURE:END -->';

async function createTree(directory, prefix = '') {
  const entries = (await readdir(directory, { withFileTypes: true }))
    .filter((entry) => !ignoredNames.has(entry.name))
    .sort((left, right) => {
      if (left.isDirectory() !== right.isDirectory()) {
        return left.isDirectory() ? -1 : 1;
      }

      return left.name.localeCompare(right.name);
    });

  const lines = [];

  for (const [index, entry] of entries.entries()) {
    const isLast = index === entries.length - 1;
    const branch = isLast ? '└── ' : '├── ';
    const childPrefix = isLast ? '    ' : '│   ';
    const suffix = entry.isDirectory() ? '/' : '';

    lines.push(`${prefix}${branch}${entry.name}${suffix}`);

    if (entry.isDirectory()) {
      lines.push(...(await createTree(join(directory, entry.name), `${prefix}${childPrefix}`)));
    }
  }

  return lines;
}

const tree = ['Account-ang/', ...(await createTree(projectRoot, ''))].join('\n');
const readme = await readFile(readmePath, 'utf8');
const startIndex = readme.indexOf(startMarker);
const endIndex = readme.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
  throw new Error(`README.md must contain ${startMarker} and ${endMarker}`);
}

const replacement = `${startMarker}\n\n\`\`\`text\n${tree}\n\`\`\`${endMarker}`;
const updatedReadme = `${readme.slice(0, startIndex)}${replacement}${readme.slice(endIndex + endMarker.length)}`;

if (updatedReadme !== readme) {
  await writeFile(readmePath, updatedReadme);
  console.log('Updated README.md folder structure.');
} else {
  console.log('README.md folder structure is already up to date.');
}
