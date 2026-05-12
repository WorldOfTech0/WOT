import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, renderHook } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { system } from '@components';
import { HelmetProvider } from 'react-helmet-async';

const AllProviders = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider value={system}>
          <BrowserRouter>{children}</BrowserRouter>
        </ChakraProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

/**
 * Render with providers.
 * @param ui - The UI to render.
 * @returns The rendered component.
 */
export const renderWithProviders = (ui: React.ReactElement) => {
  const queryClient = new QueryClient();
  const { rerender, ...result } = render(ui, {
    wrapper: ({ children }) => (
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider value={system}>
            <BrowserRouter>{children}</BrowserRouter>
          </ChakraProvider>
        </QueryClientProvider>
      </HelmetProvider>
    ),
  });

  return {
    ...result,
    renderer: (renderUi: React.ReactElement) =>
      rerender(
        <QueryClientProvider client={queryClient}>
          <ChakraProvider value={system}>
            <BrowserRouter>{renderUi}</BrowserRouter>
          </ChakraProvider>
        </QueryClientProvider>,
      ),
  };
};

/**
 * Render with router.
 * @param ui - The UI to render.
 * @returns The rendered component.
 */
export const renderWithRouter = (ui: React.ReactElement) => {
  return render(
    <HelmetProvider>
      <ChakraProvider value={system}>
        <BrowserRouter>{ui}</BrowserRouter>
      </ChakraProvider>
    </HelmetProvider>,
  );
};

/**
 * Render with providers and router.
 * @param ui - The UI to render.
 * @returns The rendered component.
 */
export const renderWithProvidersAndRouter = (ui: React.ReactElement) => {
  const queryClient = new QueryClient();
  const { rerender, ...result } = render(ui, {
    wrapper: ({ children }) => (
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider value={system}>
            <BrowserRouter>{children}</BrowserRouter>
          </ChakraProvider>
        </QueryClientProvider>
      </HelmetProvider>
    ),
  });

  return {
    ...result,
    renderer: (renderUi: React.ReactElement) =>
      rerender(
        <QueryClientProvider client={queryClient}>
          <ChakraProvider value={system}>
            <BrowserRouter>{renderUi}</BrowserRouter>
          </ChakraProvider>
        </QueryClientProvider>,
      ),
  };
};

/**
 * Render hook with providers.
 * @param renderCallback - The render callback.
 * @returns The rendered hook.
 */
export const renderHookWithProviders = <Result, Props>(
  renderCallback: (props: Props) => Result,
) => {
  return renderHook(renderCallback, {
    wrapper: ({ children }) => <AllProviders>{children}</AllProviders>,
  });
};
