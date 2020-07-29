# tooploox-demo-app

A demo app for Tooploox. Nothing less, nothing more.

## Getting started

As a prerequisite, [node](https://nodejs.org/en/) and [yarn](https://classic.yarnpkg.com/en/) are required.
Once you have that, run this command in the project root directory:

```sh
yarn
```

Once that is done, start the app with this command:

```sh
yarn dev
```

After the server has started, you can go to http://localhost:3000 to use the app.

## Commands

- `dev`: starts the development version of the Next.js app
- `validate`: runs the linter, the type checker, and the tests
- `lint`: lints the code
- `lint:fix`: lints the code and fixes what can be automatically fixed
- `types`: runs the TypeScript checks
- `test`: runs the tests
- `build` and `start`: builds and starts the production version of the Next.js app, respectively

## Tool stack

- [TypeScript](https://github.com/Microsoft/TypeScript): used almost everywhere in the project, with strict checks by default
- [Next.js](https://github.com/vercel/next.js): a framework for creating React apps
- [styled-jsx](https://github.com/vercel/styled-jsx): built into Next.js, a CSS-in-JS tool
- [ESLint](https://github.com/eslint/eslint), [Prettier](https://github.com/prettier/prettier): linting and formatting
- [Jest](https://github.com/facebook/jest), [testing-library](https://github.com/testing-library), [msw](https://github.com/mswjs/msw): testing
