import pick from 'lodash.pick';
import { rest } from 'msw';

import { testServerErrorUsername, testUsers } from 'test/serverFixtures';

export const handlers = [
  rest.get('https://api.github.com/users/:login', (req, res, ctx) =>
    res(
      testUsers.has(req.params.login)
        ? ctx.json(pick(testUsers.get(req.params.login)!, 'avatar_url', 'bio', 'name'))
        : ctx.status(req.params.login === testServerErrorUsername ? 500 : 404),
    ),
  ),
  rest.get('https://api.github.com/users/:login/repos', (req, res, ctx) =>
    res(
      testUsers.has(req.params.login)
        ? ctx.json(testUsers.get(req.params.login)!.repos)
        : ctx.status(req.params.login === testServerErrorUsername ? 500 : 404),
    ),
  ),
];
