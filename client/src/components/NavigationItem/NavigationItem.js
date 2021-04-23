import { Icon } from 'components';
import { oneOf, string } from 'prop-types';
import { navigationItem } from './NavigationItem.module.scss';

const NavigationItem = ({ shape, title }) => {
  return (
    <div className={navigationItem}>
      <Icon 
        shape={shape} 
        title={title} 
        aria-hidden={true} 
      />
      <p>{title}</p>
    </div>
  );
};

export default NavigationItem;

NavigationItem.defaultProps = {
  shape: 'navMountains',
  title: 'mountains'
};

NavigationItem.propTypes = {
  shape: oneOf(['navMountains', 'navProfile', 'navRecruits', 'navReviews']).isRequired,
  title: string.isRequired
};