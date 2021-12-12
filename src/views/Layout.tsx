import { Outlet } from 'react-router-dom';
import 'external-svg-loader';

import ThemeProvider from '@/store/ThemeProvider';

import Menu from '@/components/Menu';

import './Layout.scss';
import './Layout.scoped.scss';

import logo from '@/assets/logo.svg';

function Layout() {
  return (
    <ThemeProvider>
      <header>
        <div id="title">
          <svg id="logo" data-src={logo} />
          <span>React - Vite - TypeScript template</span>
        </div>
        <Menu />
      </header>
      <main>
        <Outlet />
      </main>
      <aside />
      <footer />
    </ThemeProvider>
  );
}

export default Layout;
