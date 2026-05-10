import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, renderHook } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

/**
 * Render with providers.
 * @param ui - The UI to render.
 * @returns The rendered component.
 */
export const renderWithProviders = (ui: React.ReactElement) => {
  const queryClient = new QueryClient();
  const { rerender, ...result } = render(ui, {
    wrapper: ({ children }) => (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>{children}</BrowserRouter>
      </QueryClientProvider>
    ),
  });

  return {
    ...result,
    renderer: (renderUi: React.ReactElement) =>
      rerender(
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>{renderUi}</BrowserRouter>
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
  return render(<BrowserRouter>{ui}</BrowserRouter>);
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
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>{children}</BrowserRouter>
      </QueryClientProvider>
    ),
  });

  return {
    ...result,
    renderer: (renderUi: React.ReactElement) =>
      rerender(
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>{renderUi}</BrowserRouter>
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
  const queryClient = new QueryClient();

  return renderHook(renderCallback, {
    wrapper: ({ children }) => (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>{children}</BrowserRouter>
      </QueryClientProvider>
    ),
  });
};
