import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { handlers } from 'test/serverHandlers';

const server = setupServer(...handlers);

export { rest, server };
