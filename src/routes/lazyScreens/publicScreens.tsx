import { LazyProvider } from '@providers';
import { lazy } from 'react';

// [Start]-------- Host screen --------

const Host = lazy(() => import('@screens/Host/Host'));

export const LazyPublicHost = () => (
  <LazyProvider>
    <Host />
  </LazyProvider>
);

// [End]-------- Host screen --------

// [Start]-------- Landing screens --------

const LandingPage = lazy(() => import('@screens/landingPage/LandingPage'));
const CategoryScreen = lazy(() => import('@screens/Category/CategoryScreen'));
const ContentViewer = lazy(
  () => import('@screens/ContentViewer/ContentViewer'),
);

export const LazyLandingPage = () => (
  <LazyProvider>
    <LandingPage />
  </LazyProvider>
);

export const LazyCategory = () => (
  <LazyProvider>
    <CategoryScreen />
  </LazyProvider>
);

export const LazyContentViewer = () => (
  <LazyProvider>
    <ContentViewer />
  </LazyProvider>
);

// [End]-------- Landing screens --------

// [Start]-------- Legal screens --------

const PrivacyPolicy = lazy(() => import('@screens/Legal/PrivacyPolicy'));
const TermsOfService = lazy(() => import('@screens/Legal/TermsOfService'));

export const LazyPrivacyPolicy = () => (
  <LazyProvider>
    <PrivacyPolicy />
  </LazyProvider>
);

export const LazyTermsOfService = () => (
  <LazyProvider>
    <TermsOfService />
  </LazyProvider>
);

// [End]-------- Legal screens --------
