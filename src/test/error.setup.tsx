export {};

beforeAll(() => {
  const consoleError = console.error;
  console.error = (...args: any[]): void => {
    if (!consoleErrorFilters.some((filter) => filter(...args))) {
      consoleError(...args);
    }
  };
});

const consoleErrorFilters: ((...args: any[]) => boolean)[] = [
  // Silence React complaining about styled-jsx, as it's not transpiled for the tests
  (...args): boolean =>
    /Warning: Received `%s` for a non-boolean attribute `%s`./.test(args[0]) &&
    args[1] === 'true' &&
    args[2] === 'jsx',
  // Silence dumb error boundary errors
  (...args): boolean => /Error boundaries should implement getDerivedStateFromError/.test(args[0]),
  (...args): boolean => /React will try to recreate this component tree/.test(args[0]),
];

// Silence "uncaught" errors caught by React
window.addEventListener('error', (error) => {
  error.preventDefault();
});
