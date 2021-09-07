## Steps to setup

### install following dependencies

- dev dependencies
  - husky
    - run "npx husky install"
  - lint-staged
- dependencies
  - eslint-config-airbnb
  - eslint-config-prettier
  - eslint-plugin-prettier
  - prettier
- copy following scripts from package.json

  - "lint": "eslint --ignore-path .gitignore .",
  - "prettier": "prettier --ignore-path .gitignore --write \"src\*_/_.+(js|json)\"",
  - "format": "npm run lint -- --fix",
  - "validate": "npm run lint",
  - "prepare": "husky install"

- copy gitignore file for prettier and eslint ignore

### prettier setup

- copy .prettierrc file to project root

### eslint setup

- copy value of "eslintConfig" key from package.json

### husky and lint-staged setup

- copy .lintstagedrc file to project root

- run "npx husky set .husky/pre-commit "npx lint-staged && npm run validate""

### vscode setup

- copy .vscode folder to project root
