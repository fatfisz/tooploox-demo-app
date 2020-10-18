export {};

beforeAll(() => {
  const consoleError = console.error;
  console.error = (...args: unknown[]) => {
    if (!consoleErrorFilters.some((filter) => filter(...args))) {
      consoleError(...args);
    }
  };
});

const consoleErrorFilters: ((...args: unknown[]) => boolean)[] = [
  // Silence dumb error boundary errors
  (...args) => /Error boundaries should implement getDerivedStateFromError/.test(String(args[0])),
  (...args) => /React will try to recreate this component tree/.test(String(args[0])),
];

// Silence "uncaught" errors caught by React
window.addEventListener('error', (error) => {
  error.preventDefault();
});
