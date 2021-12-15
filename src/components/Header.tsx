import Menu from './Menu';

import logo from '@/assets/logo.svg';

import './Header.scoped.scss';

function Header() {
  return (
    <header>
      <div id="title">
        <svg id="logo" data-src={logo} />
        <span>React - Vite - TypeScript template</span>
      </div>
      <Menu />
    </header>
  );
}

export default Header;
