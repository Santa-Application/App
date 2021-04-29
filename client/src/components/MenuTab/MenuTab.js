import { NavLink } from 'react-router-dom';
import { array, string, } from 'prop-types';
import { menuTab } from './MenuTab.module.scss';

const MenuTab = ({ menus, label }) => {

  return (
    <ul role="tablist" aria-label={label} className={menuTab}>
      {menus.map((menu, index) => (
        <li 
          key={index} 
          role="tab" 
          tabIndex={index === 0 ? '0' : '-1'}
        >
          <NavLink 
            to={menu.path} 
            className="tab" 
            activeClassName="tabSelected" 
          >
            {menu.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MenuTab;

MenuTab.propTypes = {
  menus: array,
  label: string,
};
