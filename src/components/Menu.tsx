import { NavLink } from 'react-router-dom';
import 'external-svg-loader';

import { useTheme } from '@/store/ThemeProvider';

import './Menu.scoped.scss';

import darkIcon from '@/assets/icons/dark.svg';
import lightIcon from '@/assets/icons/light.svg';

function Menu() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav>
      <ul>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <button
            id="toggle-theme"
            title="Toggle theme"
            type="button"
            onClick={() => {
              toggleTheme();
            }}
          >
            <svg data-src={theme === 'dark' ? lightIcon : darkIcon} />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
