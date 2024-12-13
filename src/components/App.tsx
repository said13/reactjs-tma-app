// import { useLaunchParams, miniApp, useSignal } from '@telegram-apps/sdk-react';
// import { AppRoot } from '@telegram-apps/telegram-ui';
// import { Navigate, Route, Routes, HashRouter } from 'react-router-dom';

// import { routes } from '@/navigation/routes.tsx';
// import React, { useState } from 'react';
import { useState } from 'react';
import {
  Page,
  Navbar,
  // NavbarBackLink,
  Tabbar,
  TabbarLink,
  // Block,
  // Icon,
  // List,
  // ListItem,
  // Toggle,
} from 'konsta/react';

export function App() {
  const [activeTab, setActiveTab] = useState('tab-1');
  const [isTabbarLabels] = useState(true);
  const [isTabbarIcons] = useState(false);
  return (
    <Page>
      <Navbar
        title="Tabbar"
        />

      <Tabbar
        labels={isTabbarLabels}
        icons={isTabbarIcons}
        className="left-0 bottom-0 fixed"
      >
        <TabbarLink
          active={activeTab === 'tab-1'}
          onClick={() => setActiveTab('tab-1')}
          // icon={
          //   isTabbarIcons && (
          //     <Icon
          //       ios={<EnvelopeFill className="w-7 h-7" />}
          //       material={<MdEmail className="w-6 h-6" />}
          //     />
          //   )
          // }
          label={isTabbarLabels && 'Home'}
        />
        <TabbarLink
          active={activeTab === 'tab-2'}
          onClick={() => setActiveTab('tab-2')}
          // icon={
          //   isTabbarIcons && (
          //     <Icon
          //       ios={<Calendar className="w-7 h-7" />}
          //       material={<MdToday className="w-6 h-6" />}
          //     />
          //   )
          // }
          label={isTabbarLabels && 'Search'}
        />
        <TabbarLink
          active={activeTab === 'tab-3'}
          onClick={() => setActiveTab('tab-3')}
          // icon={
          //   isTabbarIcons && (
          //     <Icon
          //       ios={<CloudUploadFill className="w-7 h-7" />}
          //       material={<MdFileUpload className="w-6 h-6" />}
          //     />
          //   )
          // }
          label={isTabbarLabels && 'Profile'}
        />
      </Tabbar>

      {/* {activeTab === 'tab-1' && (
        <Block strong inset className="space-y-4">
          <p>
            <b>Home</b>
          </p>
        </Block>
      )}
      {activeTab === 'tab-2' && (
        <Block strong inset className="space-y-4">
          <p>
            <b>Search</b>
          </p>
        </Block>
      )}
      {activeTab === 'tab-3' && (
        <Block strong inset className="space-y-4">
          <p>
            <b>Profile</b>
          </p>
        </Block>
      )} */}
    </Page>
  );
}

// export function App() {
//   const lp = useLaunchParams();
//   const isDark = useSignal(miniApp.isDark);

//   return (
//     <AppRoot
//       appearance={isDark ? 'dark' : 'light'}
//       platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
//     >
//       <HashRouter>
//         <Routes>
//           {routes.map((route) => <Route key={route.path} {...route} />)}
//           <Route path="*" element={<Navigate to="/"/>}/>
//         </Routes>
//       </HashRouter>
//     </AppRoot>
//   );
// }
