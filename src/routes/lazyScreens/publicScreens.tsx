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
const Software = lazy(() => import('@screens/Software/Software'));
const Infrastructure = lazy(() => import('@screens/Infrastructure/Infrastructure'));
const Security = lazy(() => import('@screens/Security/Security'));
const Learning = lazy(() => import('@screens/Learning/Learning'));
const Resources = lazy(() => import('@screens/Resources/Resources'));

const Tools = lazy(() => import('@screens/Tools/Tools'));

export const LazyLandingPage = () => (
  <LazyProvider>
    <LandingPage />
  </LazyProvider>
);

export const LazySoftware = () => (
  <LazyProvider>
    <Software />
  </LazyProvider>
);

export const LazyInfrastructure = () => (
  <LazyProvider>
    <Infrastructure />
  </LazyProvider>
);

export const LazySecurity = () => (
  <LazyProvider>
    <Security />
  </LazyProvider>
);

export const LazyLearning = () => (
  <LazyProvider>
    <Learning />
  </LazyProvider>
);

export const LazyResources = () => (
  <LazyProvider>
    <Resources />
  </LazyProvider>
);

export const LazyTools = () => (
  <LazyProvider>
    <Tools />
  </LazyProvider>
);

// [End]-------- Landing screens --------
