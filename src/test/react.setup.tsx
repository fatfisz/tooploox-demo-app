import React from 'react';

// @ts-ignore Normally Next.js provides React via a Babel plugin, here we need a global
global.React = React;

declare global {
  const React: typeof React;
}
