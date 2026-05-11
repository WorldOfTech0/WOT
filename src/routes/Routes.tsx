import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
} from 'react-router-dom';
import {
  LazyLandingPage,
  LazyPublicHost,
  LazySoftware,
  LazyInfrastructure,
  LazySecurity,
  LazyLearning,
  LazyResources,
  LazyTools,
} from './lazyScreens/publicScreens';

export const getAppRouter = (isUserLogin: boolean) => {
  return createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<LazyPublicHost />}>
        <Route path="" element={<LazyLandingPage />} />
        <Route path="resources" element={<LazyResources />} />
        <Route path="tools" element={<LazyTools />} />
        <Route path="software" element={<LazySoftware />} />
        <Route path="infrastructure" element={<LazyInfrastructure />} />
        <Route path="security" element={<LazySecurity />} />
        <Route path="learning" element={<LazyLearning />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>,
    ),
  );
};
