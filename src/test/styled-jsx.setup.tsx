export {};

// Silence React complaining about styled-jsx, as it's not transpiled for the tests
beforeAll(() => {
  const consoleError = console.error;
  console.error = (...args: any[]): void => {
    if (
      /Warning: Received `%s` for a non-boolean attribute `%s`./.test(args[0]) &&
      args[1] === 'true' &&
      args[2] === 'jsx'
    ) {
      return;
    }
    consoleError(...args);
  };
});
