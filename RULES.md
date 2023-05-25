# Naming conventions

- Component naming: Must be in upper camel case/pascal case, ex: App, BlogDetail
- Variable naming: Must be in lower camel case, ex: personDetail, blogData
- constant variable naming: can be in lower camel case, but prefer upper snake case, ex: ACCOUNT_TYPES

# File naming convention

- Component and page component files must have the same name as component
- For every other file type, use lower case kabab case
- stylesheet files must have same name as component names

# Misc

- Try to use axios for api calls instead of native fetch as it has better error management capabilities
- Always use code splitting and define suspended lazy loaded page component in pages directory only
- Always enable spell checker
- Always keep eslint enabled
- Do not commit .env.local, commit every other env file
- Always use nvm
- Define node version in package.json
- Avoid writing os specific commands in package.json scripts, ex: using "rm -rf", "rmdir", "export NODE_ENV=local", "set NODE_ENV=local"
  - Use cross-env package for the same
- No static code, write variables in .env files
- Avoid writing class components, use function components only
- Avoid disabling eslint rules extensively

# Css

- Use scss for styling for projects except antd, for antd projects use less preprocessor
- use scoped css, ie. module css (ex. BlogDetail.module.scss)
- Do not define global styles in component's stylesheet files, define them in src/index.scss file

# Testing setup

- use jest, @testing-library/react for automated unit testing, as its testing is very close to production