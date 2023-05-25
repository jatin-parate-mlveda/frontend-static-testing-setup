# App.jsx

- Main App setup

# Pages directory

- Route level components
- If a page has its own scoped components then create the components in the same directory, instead of putting them in
  components directory.

# components

- Components which are not related to routes, i.e. can be used in multiple routes.

# services directory

- Files which has all the functions related to a library or managing a resource, ex: api service will have all functions
  doing api calls only. Any component can't directly do api call, they have to write function in api service and then
  import the function to do the api call. Another example is react-query.service.ts which will initialize react-query
  and export the provider.

# Contexts

- Directory storing all react contexts

# assets

- asset files like images

# public directory

- Asset files whose names won't change, like index.html, favicon.ico file

# src/styles

- Global style file types, like _variables.scss, _mixins.scss
