# AccountAng

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Folder structure

The following tree is generated automatically by `npm run docs:structure` and refreshed before every build.

<!-- FOLDER-STRUCTURE:START -->

```text
Account-ang/
├── .github/
│   └── copilot-instructions.md
├── .vscode/
│   ├── extensions.json
│   ├── launch.json
│   └── tasks.json
├── public/
│   └── favicon.ico
├── scripts/
│   └── update-folder-structure.mjs
├── src/
│   ├── app/
│   │   ├── account/
│   │   │   ├── login/
│   │   │   │   ├── forgot-pwd/
│   │   │   │   │   ├── forgot-pwd.html
│   │   │   │   │   ├── forgot-pwd.scss
│   │   │   │   │   ├── forgot-pwd.spec.ts
│   │   │   │   │   └── forgot-pwd.ts
│   │   │   │   ├── register/
│   │   │   │   │   ├── register.html
│   │   │   │   │   ├── register.scss
│   │   │   │   │   ├── register.spec.ts
│   │   │   │   │   └── register.ts
│   │   │   │   ├── login.html
│   │   │   │   ├── login.scss
│   │   │   │   ├── login.spec.ts
│   │   │   │   └── login.ts
│   │   │   ├── models/
│   │   │   │   └── login.model.ts
│   │   │   ├── services/
│   │   │   │   ├── account-navigation.service.ts
│   │   │   │   └── auth.service.ts
│   │   │   └── account.routes.ts
│   │   ├── core/
│   │   │   └── services/
│   │   │       └── theme.service.ts
│   │   ├── feature/
│   │   │   ├── dashboard/
│   │   │   │   ├── dashboard.html
│   │   │   │   ├── dashboard.scss
│   │   │   │   ├── dashboard.spec.ts
│   │   │   │   └── dashboard.ts
│   │   │   └── feature_account.ts
│   │   ├── shared/
│   │   │   ├── form-errors-component/
│   │   │   │   ├── form-errors-component.html
│   │   │   │   ├── form-errors-component.scss
│   │   │   │   ├── form-errors-component.spec.ts
│   │   │   │   └── form-errors-component.ts
│   │   │   └── services/
│   │   │       └── notification.service.ts
│   │   ├── app.config.server.ts
│   │   ├── app.config.ts
│   │   ├── app.html
│   │   ├── app.routes.server.ts
│   │   ├── app.routes.ts
│   │   ├── app.scss
│   │   ├── app.spec.ts
│   │   └── app.ts
│   ├── theme/
│   │   ├── _bootstrap.scss
│   │   ├── _dark.scss
│   │   ├── _light.scss
│   │   ├── _material.scss
│   │   └── _variables.scss
│   ├── index.html
│   ├── main.server.ts
│   ├── main.ts
│   ├── server.ts
│   └── styles.scss
├── .editorconfig
├── .gitignore
├── angular.json
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```<!-- FOLDER-STRUCTURE:END -->
