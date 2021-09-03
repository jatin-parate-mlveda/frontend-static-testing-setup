## Purpose

Use this setup for new react projects.

### Features

- linter and formatter support
- auto formatting on commit
- prevent commit if has linting errors
- uses eslint bundled in react-scripts only.

## Versions of tools used while creating this project

- node: v16.4.0
- npm: v7.18.1

## Scripts

- lint: to lint the project using eslint
- format: format the code using prettier only (can be used for files other than .js and .json)
- validate: first validate and format the code using eslint and then build the project
- prepare: install husky while running **npm install**

## Tools used

- **eslint**: for linting

- **prettier**: for formatting

- **eslint-config-airbnb-base**: airbnb eslint rules

- **eslint-config-prettier**: turn off conflicting rules of eslint with prettier

- **eslint-plugin-prettier**: show prettier formatting errors in eslint

- **husky**: for pre-commit hooks to lint and format code before commit

- **lint-staged**: Format staged html, css, scss, js and json files with eslint and prettier

## _VSCode_ settings

- Intall **ESLint** plugin by **Dirk Baeumer**

- Install **Prettier** plugin by **Prettier**

- Please don't delete .vscode/settings.json file as settings in those files will help re-format code with preferred linter/formatter for corresponding file type.
