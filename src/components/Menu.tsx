import { NavLink } from 'react-router-dom';

import 'external-svg-loader';

import { useTheme } from '@/store/ThemeProvider';

import darkIcon from '@/assets/icons/dark.svg';
import lightIcon from '@/assets/icons/light.svg';

import './Menu.scoped.scss';

function Menu() {
  const { theme, toggleTheme } = useTheme();

  const routes = { '/': 'Home', '/about': 'About' };

  return (
    <nav>
      <ul>
        {Object.entries(routes).map(([key, value]) => (
          <li key={key}>
            <NavLink to={key} className={({ isActive }) => (isActive ? 'active' : '')}>
              {value}
            </NavLink>
          </li>
        ))}

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
