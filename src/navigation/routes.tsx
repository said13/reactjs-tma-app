import type { ComponentType, JSX } from 'react';

import HomePage from '@/pages/HomePage/HomePage.tsx';
// import { InitDataPage } from '@/pages/InitDataPage.tsx';
// import { LaunchParamsPage } from '@/pages/LaunchParamsPage.tsx';
// import { ThemeParamsPage } from '@/pages/ThemeParamsPage.tsx';
// import { TONConnectPage } from '@/pages/TONConnectPage/TONConnectPage';

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: '/', Component: HomePage, title: 'Home' },
  { path: '/search', Component: HomePage, title: 'Search' },
  { path: '/profile', Component: HomePage, title: 'Profile' },
  // { path: '/init-data', Component: InitDataPage, title: 'Init Data' },
  // { path: '/theme-params', Component: ThemeParamsPage, title: 'Theme Params' },
  // { path: '/launch-params', Component: LaunchParamsPage, title: 'Launch Params' },
];
