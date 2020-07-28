import '@testing-library/jest-dom';
import React from 'react';

// @ts-ignore Normally Next.js provides React via a Babel plugin, here we need a global
global.React = React;

declare global {
  const React: any;
}

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
