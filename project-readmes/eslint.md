# Why do we need Eslint?

- Helps identify and fix problems with Javascript code.
- It can handle problems that Typescript alone cannot.
- Ensures consistent styling and error free code, making it more maintainable.
- Additional functionality can be added through third party plugins.
- Configuration file can be reused and shared across projects.

## Links to check out

- [How to Set Up Eslint](https://www.youtube.com/watch?v=eieTlMwCwWU)
- [ESLint and Visual Studio Code](https://www.youtube.com/watch?v=ycPl2NUFksg)
- [Prettier and Eslint in Visual Studio Code](https://www.youtube.com/watch?v=IRdPRIPd9FM)

## How to use Eslint

- Eslint is a series of dev dependency packages you must install.
    - It can be installed globally or locally per project.
        - Per project is recommended and to not have a global version, as both of these can conflict and cause unexpected errors.

## How to use Eslint with Vscode

- The Vscode Eslint extension is not the same the Eslint package you install.
    - The Vscode Eslint extension uses the installed version of eslint.
    - This could be the global version, so try and only have the local version installed.
    - The Vscode Eslint extension will provide syntax highlighting of warnings and errors based on your eslint config values.
    - Once the extension is installed you can see what Eslint config is being used and other debug information in the bottom row of the vscode editor using the `{}` button.
- To fix all eslint errors when a file is saved, you must add `"editor.codeActionsOnSave": { "source.fixAll.eslint": "explicit" }` to the workspaces `settings.json`
