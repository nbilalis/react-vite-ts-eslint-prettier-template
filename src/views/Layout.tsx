import { Outlet } from 'react-router-dom';

import 'external-svg-loader';

import ThemeProvider from '@/store/ThemeProvider';

import Header from '@/components/Header';

import './Layout.scoped.scss';
import './Layout.scss';

function Layout() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <aside />
      <footer />
    </ThemeProvider>
  );
}

export default Layout;
