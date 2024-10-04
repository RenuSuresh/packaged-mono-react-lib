/** @type { import('@storybook/react').Preview } */
import React from 'react';
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <Story />
    )
  ]
};

export default preview;
