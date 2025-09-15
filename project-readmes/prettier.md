# Why do we need Prettier?

- Prettier is an opinionated code formatter.
- Helps ensure consistent code styles across the project.
- Rule based customization.
- Supports many languages.
- Automatic formatting with Vscode Extension.

## Links to check out

- [How to Use Prettier with VS Code](https://www.youtube.com/watch?v=_fzbg6_-JuE)
- [Prettier and Eslint in Visual Studio Code](https://www.youtube.com/watch?v=IRdPRIPd9FM)

## How to install Prettier

- First install into a npm based project with `npm install --save-dev prettier`
- To format everything and see what the output might look like run `npx prettier .`
    - To format a specific file run `npx prettier src/my-file.ts`
- To modify every file with the prettier formatting, run `npx prettier . --write`
    - To modify a specific file with prettier, run `npx prettier src/my-file.ts -- write`
- Currently prettier is formatting with its default rules.
- To modify these rules, create a `.prettierrc` file in the root of your project
- Have a look at the [docs](https://prettier.io/docs/options) and select the options you prefer
- Optionally create a `.prettierignore` in the root of your project to not format specific files or directories.

## How to use Prettier with Vscode

- First install the Prettier extension in Vscode.
- Note that the extension is not Prettier itself, as it depends on a locally installed version of prettier.
- To format a file each time you save the file, you must modify vscode settings.json
    - You can do this at a global (User) level or at a (Workspace) level
        - Ensure you have set these values `"editor.defaultFormatter": "esbenp.prettier-vscode"` and `"editor.formatOnSave": true`
        - You can also ensure prettier only formats specific languages.

## Formatting Tabs when users within a project have different preferences

- Sometimes multiple users within a project want to use different tab preferences.
- To do this, within `.prettierrc` set `"useTabs": true` which will make `"tabWidth": any_number` irrelevant.
- Then, within you (User) settings.json, set `"editor.tabSize": my_preferred_tab_size`
- This ensures project uses tabs and each user can view in their editor a tabSize they prefer.
