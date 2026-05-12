import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
} from 'react-router-dom';
import {
  LazyLandingPage,
  LazyPublicHost,
  LazyCategory,
  LazyPrivacyPolicy,
  LazyTermsOfService,
  LazyContentViewer,
} from './lazyScreens/publicScreens';

export const getAppRouter = (isUserLogin: boolean) => {
  return createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<LazyPublicHost />}>
        <Route path="" element={<LazyLandingPage />} />
        <Route path="privacy" element={<LazyPrivacyPolicy />} />
        <Route path="terms" element={<LazyTermsOfService />} />
        <Route path=":categoryId" element={<LazyCategory />} />
        <Route path=":category/:subcategory" element={<LazyContentViewer />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>,
    ),
  );
};
