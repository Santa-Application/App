import { Heading } from 'components';
import { RegularPostForm } from 'containers';
import { heading } from './GlobalRegularPostEditPage.module.scss';

const GlobalRegularPostEditPage = ({ ...restProps }) => {
  return (
    <main>
      <Heading content="RECRUIT" className={heading} />
      <RegularPostForm />
    </main>
  );
};

export default GlobalRegularPostEditPage;
