# fullstack-react-app-starter-kit
A fully type safe fullstack react app built on top of Tanstack Start and tRPC.


## How this stack was built

- First we create the root project using the Tanstack Start [Build from Scratch](https://tanstack.com/start/latest/docs/framework/react/build-from-scratch) guide.

## TODO

- [ ] add TanStack Start Build from Scratch code
- [ ] add dev environment setup
    - [ ] .vscode settings.json and extension.json
    - [ ] prettier settings
        - [ ] add prettier sort imports plugin
    - [ ] eslint settings
    - [ ] husky pre commit hook to format before pushing code
	- [ ] improve tsconfig.json
    - [ ] total typescript ts-reset
    - [ ] .env and .env.example and create type safe env file
    - [ ] .gitignore
- [ ] add tailwind
    - [ ] add prettier plugins and .vscode autocomplete helpers
    - [ ] tailwind helper functions
    - [ ] add dark mode support with system preferences support
- [ ] add tRPC and react query
    - [ ] be able to call trpc routes through tanstack-router loaders
    - [ ] be able to intercept custom trpc errors and execute redirects and or dispatch toast messages
- [ ] add zustand and helper functions
- [ ] add ui components
    - [ ] add button
    - [ ] add link integrated with tanstack router
    - [ ] add loading spinner
    - [ ] add toggle
    - [ ] add checkbox
    - [ ] add tag
    - [ ] add modal with global modal isOpen using zustand
    - [ ] add popover with checks to see if its within a modal
    - [ ] add tooltip with checks to see if its within a modal
    - [ ] add scrollable area and integrate it with tanstack router scrollRestoration
    - [ ] add resizable panel when needed
    - [ ] add dropdown components
    - [ ] add input components
    - [ ] add table components
- [ ] add tanstack-form
    - [ ] integrate it with ui components
    - [ ] add custom form components like submit button and form button
    - [ ] find a clean way to do multi step forms
- [ ] add drizzle
    - [ ] add drizzle eslint plugins
    - [ ] upgrade drizzle to new relations api and query api
- [ ] add lucia auth
    - [ ] add google oauth
    - [ ] add email & password flow
        - [ ] add verify email link
        - [ ] add forget password email
        - [ ] add sync oauth accounts
        - [ ] add signin
        - [ ] add signout
        - [ ] add signup
