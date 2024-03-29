import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: './icon.svg',
    brandTitle: 'Hamish Williams Components',
    brandUrl: 'https://hamishw.com',
  },
});
