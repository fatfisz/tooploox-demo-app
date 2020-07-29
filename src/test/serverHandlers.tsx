import { rest } from 'msw';

export const handlers = [
  rest.get('https://api.github.com/users/:login', (req, res, ctx) =>
    res(
      ctx.json({
        avatar_url: 'https://placehold.it/128x128',
        bio: "He's a good boy",
        name: 'Brant Bront Brent',
      }),
    ),
  ),
  rest.get('https://api.github.com/users/:login/repos', (req, res, ctx) =>
    res(
      ctx.json([
        {
          html_url: 'https://github.com/facebook/react',
          name: 'react',
          stargazers_count: 153000,
        },
        {
          html_url: 'https://github.com/fatfisz/homepage',
          name: 'homepage',
          stargazers_count: 0,
        },
        {
          html_url: 'https://github.com/eslint/eslint',
          name: 'eslint',
          stargazers_count: 16900,
        },
        {
          html_url: 'https://github.com/microsoft/typescript',
          name: 'TypeScript',
          stargazers_count: 62600,
        },
      ]),
    ),
  ),
];
