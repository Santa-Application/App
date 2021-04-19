import { array, string, number } from 'prop-types';
import { menuTab } from './MenuTab.module.scss';


const MenuTab = ({ menus, label, selected }) => {

  return (
    <ul 
      role="tablist" 
      aria-label={label}
      className={menuTab}
    >
      {
        menus.map((menu, index) => (
          <li
            key={menu.name}
            role="tab"
            aria-selected={index === selected ? "true" : "false"}
            aria-controls={`${menu?.name}-tab`} // should be associated with aria-labelledby
            tabIndex={index === 0 ? "0" : "-1"}
            id={menu?.name}
          >
            <a
              href={menu?.href}
            >
              {menu?.name}
            </a>
          </li>
        ))
      }
    </ul>
  );
};

export default MenuTab;

MenuTab.propTypes = {
  menus: array,
  label: string, 
  selected: number
};

MenuTab.defaultProps = {
  menus: [ 
    { name: 'Overview', href: '/Overview' }, 
    { name: 'Reviews', href: '/Reviews' },
    { name:'Recruits', href: '/Recruits' }
  ],
  label: '산 메뉴 탭',
  selected: 1
};

  