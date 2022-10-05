This Repository was created through Automation. Change No.: 1377549

## Svelte PWA

This is built using [SvelteKit](https://kit.svelte.dev/)

_Note that you will need to have [Node.js](https://nodejs.org) installed v16.15.0_

## Get started

Install the dependencies...

```bash
npm ci
```

...then start

```bash
npm run dev
```

Navigate to [localhost:3000](http://localhost:3000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

## Unit Testing

```bash
npm run test             #run jest unit test with coverage report
npm run test:watch       #run jest unit test with watch flag
```

## Run Storybookjs

You can find out more about [StorybookJs](https://storybook.js.org/docs/svelte/get-started/setup)

```bash
# Starts Storybook in development mode
npm run storybook
```

Navigate to [localhost:6006](http://localhost:6006). You should see your app running.

### Hosted Storybook build and deploy

Storybook is hosted via [Github Pages](https://special-doodle-bdb819f3.pages.github.io/)

These pages can be updated with the following commands:

```bash
# Predeploy Storybook - required prior to deployment
npm run build-storybook

# Deploy Storybook
npm run deploy-storybook
```

GH Pages has some caching so it may take a few minutes before the new build is visible in https://special-doodle-bdb819f3.pages.github.io/

## Alias and Naming Conventions

All folder names are in lower case
All component file names are in PascalCase

Alias is used for importing components and styles where applicatable

```bash
@ui               # src/components/ui
@stores               # src/stores
@node_modules     # node_modules
```

# Environmental Variables

### To load environmental variables just add a variable inside .env

### with this prefix VITE\_

### E.X.

VITE_BASE_URL=dev

### To access these variables in the code just use this

import.meta.env.VITE_BASE_URL

# Suggested plugins

-   Svelte for VS Code
-   Svelte 3 Snippets
-   ESLint
-   Prettier
