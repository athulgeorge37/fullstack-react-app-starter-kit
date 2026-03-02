# Why do we need ESlint?

- Helps identify and fix problems with Javascript code.
- It can handle problems that Typescript alone cannot.
- Ensures consistent styling and error free code, making the codebase more maintainable.
- Additional functionality can be added through third party plugins.
- Configuration file can be reused and shared across projects.

## Videos to check out

- [How to Set Up Eslint](https://www.youtube.com/watch?v=eieTlMwCwWU)
- [ESLint and Visual Studio Code](https://www.youtube.com/watch?v=ycPl2NUFksg)
- [Prettier and Eslint in Visual Studio Code](https://www.youtube.com/watch?v=IRdPRIPd9FM)

## How to use ESlint

- ESlint is a series of dev dependency packages you must install.
    - It can be installed globally or locally per project.
        - Per project is recommended without having a global version, as both of these can conflict and cause unexpected errors.

## How to use Eslint with Vscode

- The Vscode ESlint extension is not the same the ESlint package you install.
    - The Vscode ESlint extension uses the installed version of eslint (local or global).
    - This could be the global version, so try and only have the local version installed.
    - The Vscode ESlint extension will provide syntax highlighting of warnings and errors based on your eslint config values.
    - Once the extension is installed you can see what ESlint config is being used and other debug information in the bottom row of the vscode editor using the `{}` button.
- To fix all eslint errors when a file is saved, you must add `"editor.codeActionsOnSave": { "source.fixAll.eslint": "explicit" }` to the workspaces `settings.json` in the `.vscode` folder
- Some times when updating the eslint config, the rules may not work in your editor. To fix this press `cmd + shift + p` and search to find `ESlint: Restart ESlint Server` and press `enter`

## ESlint file name

- ESlint file is usually named `eslint.config.{js,mjs,cjs}` located in the root directory
- The m in mjs stands for module and c in cjs stands for common
- When using module, you can use `import` and `export` statements
- When using common, you can use `require` and `exports` statements
- When the file is named `eslint.config.js`, it checks if you have `"type": "module"` in `package.json`
    - If you do, eslint will use the module version
    - If you do not, eslint will default to common version
- When you suffix `eslint.config` with `.mjs` or `.cjs`, eslint will use the corresponding version despite what the `type` keyword points to in your `package.json`

## What each ESlint package does

- `eslint` : The core eslint package.
- `@eslint/js` : The eslint javascript implementation. Required for the language features of javascript.
- `typescript-eslint` : Provides a collection of tools that allows eslint to support Typescript code.
    - It includes the package `@typescript-eslint/parser`, which allows eslint understand typescript syntax
    - It also includes the package `@typescript-eslint/eslint-plugin`, which contains a set of eslint rules, specifically for Typescript.
    - There is no need to install these packages on top of typescript-eslint
- `globals` : Provides a collection of predefined global variables for various javascript environments. Helps prevent accessing an undefined variable. Eg: globals.node, globals.browser.

## Understanding typescript-eslint configs

- Read [this](https://typescript-eslint.io/users/configs/#recommended-configurations) to understand the differences between the recommended configs
- Here are the suggested typescript-eslint configs to use for maximum type safety
- [strict-type-checked](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslintrc/strict-type-checked.ts)
- [stylistic-type-checked](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslintrc/stylistic-type-checked.ts)
- For `type-checked` eslint configs to work, you must enable [typed linting](https://typescript-eslint.io/getting-started/typed-linting/)

## How to add plugins to the ESlint config

-
