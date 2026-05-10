import '@localization/config';

jest.useFakeTimers();
jest.mock('zustand');

// Font source mocks.
jest.mock('@fontsource/bungee-shade', () => ({
  __esModule: true,
  default: 'bungee-shade',
}));

/**
 * Mock helmet module
 */
jest.mock('react-helmet-async', () => ({
  Helmet: jest.fn(({ children }) => <div>{children}</div>),
  HelmetProvider: () => jest.fn(),
}));
