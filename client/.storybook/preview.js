import ko from 'axe-core/locales/ko.json'
import { addDecorator } from '@storybook/react'
import { MemoryRouter } from "react-router";
import StoreProvider from '../src/redux/store';

addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);
addDecorator(story => <StoreProvider>{story()}</StoreProvider>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  a11y: { 
    config: { locale: ko } 
  },
};