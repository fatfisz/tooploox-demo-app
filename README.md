# tooploox-demo-app

A demo app for Tooploox. Nothing less, nothing more.

## Getting started

As a prerequisite, [node](https://nodejs.org/en/) and [yarn](https://classic.yarnpkg.com/en/) are required.
Once you have that, run this command in the project root directory:

```sh
yarn
```

**Important** - you'll also need a GitHub app key.
You can read about how to generate it on [the GitHub documentation page](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token).

Put the key inside a file called `auth.json` in the root of the app; it should look like this:
```json
"Basic XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
```
where "XXX..." is your app key.

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

## Ideas that didn't make the final cut (for future reference)

Here are some ideas that I spent a considerable amount of time testing (much more than actually developing the app).
Those are lessons that may prove useful in the future, so I'm leaving them here.

### Using an existing design system

There is a multitude of options when it comes to component libraries, but the ones that I know are more focused on the look of the components, and less so about providing a good design system structure.
That's why from the start I had my eyes set on the [Braid design system](https://github.com/seek-oss/braid-design-system);
it encompasses a few good ideas that make it very easy to reason about and theme the components.
Unfortunately, it proved to be quite hard to integrate it into a Next.js app, as Braid is tightly coupled with [sku](https://github.com/seek-oss/sku), and that in turn conflicts with Next.js (it's something of a [create-react-app](https://github.com/facebook/create-react-app) lookalike).

After that I looked at [rebass](https://github.com/rebassjs/rebass), but at this point I was convinced that rolling out a custom solution would be quicker.
And it turned out to be so!

I "borrowed" the API from Braid and first implemented the design using a scaffolding version of the components (eg. returning a `<div>{children}</div>` with extra props passed as `data-*` attributes so that they are not marked as unused), then I just implemented the components themselves.
The first part took around 15 minutes, the second was up to 4 hours in total.
Not that much for a simple design system!

Of course it's lacking in functionality, eg. the `Image` component is not handling the loading state that well, but those are details that could be quickly ironed out and tailored to the needs of the app.

### React Suspense

This feature is not officially released yet and has been in development for so long, [some people are making memes out of it](https://twitter.com/jaredpalmer/status/1287038154529177602).
On the other hand the React Europe conference had a workshop on using Suspense, and the API is quite sensible.
The main benefit of Suspense is a much more simplified control over the loading states of asynchronous elements of the app (most importantly, data) compared to `if state === 'loading' ...`.
That's why I decided to try using it in the app.

Alas, it's not supported by the server renderer yet.
And trying to work around that resulted in some infinite loops that I was not able to debug.
It is definitely possible to use Suspense today, but some combination of tools in my setup was preventing that.
So after a few hours I gave up and resigned myself to using `if`-s.

### [react-query](https://github.com/tannerlinsley/react-query)

That's a very useful tool and the prototype of the app was using it.
The main benefits are: built-in caching, retries on failure, and refresh on window refocus.

However, testing the app involved some error scenarios, and I didn't want to spend time on learning how to deal with that (maybe by turning retries off for testing altogether?)

Also, after some time working on the app, it seemed like a too serious of a tool for a project of this size.
I liked learning how to use React Query, the documentation is on point; I'd definitely use it in a bigger app.

### Browser tests with [puppeteer](https://github.com/puppeteer/puppeteer)

Integrating Puppeteer with the setup turned out to be a complicated endeavor, as I encountered a few problems:

- The "integrator" package, [jest-puppeteer](https://github.com/smooth-code/jest-puppeteer) is seemingly abandoned and doesn't support the latest version of Puppeteer
- Adding a [custom integration](https://jestjs.io/docs/en/puppeteer) is an option, but that adds more code to maintain
- ... and without a supported integration starting a Next.js server turned out to be hard-to-get-right and was not performant at all;
  to be a viable option it would require a separate environment where a production build of the app could be tested
  
After failing to arrive at a satisfying solution with Puppeteer, I looked into [Cypress](https://github.com/cypress-io/cypress), but decided not to pursue it any further, as I was unfamiliar with the tool and there was not enough time.

### Keeping the username in the URL

It wasn't a requirement, but a nice-to-have.
Unfortunately, as the time was running out, I decided to get rid of the functionality.
Yes, it was initially implemented, but it added complexity and could complicate tests.
It's a useful feature from the UX standpoint (eg. for link sharing), but ultimately I decided to cut it.
