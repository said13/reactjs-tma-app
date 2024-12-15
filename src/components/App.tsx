// import { useLaunchParams, miniApp, useSignal } from '@telegram-apps/sdk-react';
// import { AppRoot } from '@telegram-apps/telegram-ui';
// import { Navigate, Route, Routes, HashRouter } from 'react-router-dom';

import { routes } from '@/navigation/routes.tsx';
import { TabBar } from '@/components/TabBar.tsx'
// import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import {
  App as KonstaApp,
} from 'konsta/react';
// import { AppRoot } from '@telegram-apps/telegram-ui';

export function App() {
  return (
    <>
      {/* <AppRoot> */}
      <KonstaApp safeAreas theme="ios">
        <HashRouter>
          <TabBar />
          <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          </Routes>
        </HashRouter>

      </KonstaApp>
      {/* <AppRoot /> */}
    </>
  );
}
