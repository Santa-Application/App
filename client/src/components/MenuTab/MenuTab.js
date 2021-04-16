import { string, array } from 'prop-types';
const MenuTab = ({ currentUrl, array }) => {

  const menus = ['Overviews', 'Reviews', 'Recruit'];

  return (
    <div role="tablist" aria-label="menu-tabs">
      {
        menus.map((menu, index) => (
          <a 
            href={currentUrl + '/' + menu}
            role="tab"
            aria-selected={ index === 1 ? "true" : "false" }
            aria-controls="nils-tab"
            id={menu}
          >
            {menu}
          </a>
        ))
      }
    </div>
  );
};

export default MenuTab;

MenuTab.propTypes = {
  currentUrl: string,
  array: array
};
