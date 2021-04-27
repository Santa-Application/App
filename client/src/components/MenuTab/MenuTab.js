import { NavLink } from 'react-router-dom';
import { array, string, number } from 'prop-types';
import { menuTab } from './MenuTab.module.scss';

const MenuTab = ({ menus, label, selected, onClick }) => {
  return (
    <ul role="tablist" aria-label={label} className={menuTab}>
      {menus.map((menu, index) => (
        // <li
        //   key={menu.name}
        //   role="tab"
        //   aria-selected={index === selected ? 'true' : 'false'}
        //   aria-controls={`${menu?.name}-tab`} // should be associated with aria-labelledby
        //   tabIndex={index === 0 ? '0' : '-1'}
        //   id={menu?.name}
        //   onClick={onClick}
        // >
        //   <NavLink to={menu?.path} activeClassName="selected">
        //     {menu?.name}
        //   </NavLink>
        // </li>
        <li key={index}>
          <NavLink to={menu.path} className="tab" activeClassName="tabSelected">
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
  selected: number,
};
