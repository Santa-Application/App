import { Logo } from 'components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { footerContainer, menuContainer } from './Footer.module.scss';

const Footer = ({ className, ...restProps }) => {
  return (
    <div className={footerContainer}>
      <Logo href="/" />
      <ul className={menuContainer}>
        PROJECT INFORMATION
        <li key="introduction-SANTA">
          <a href="https://github.com/Santa-Application/App#santa-%EC%86%8C%EA%B0%9C">
            SANTA 소개
          </a>
        </li>
        <li key="tech-stack">
          <a href="https://github.com/Santa-Application/App#tech-stack">
            기술 스택
          </a>
        </li>
        <li key="application-flow">
          <a href="https://github.com/Santa-Application/App#application-flow">
            애플리케이션 플로우
          </a>
        </li>
      </ul>
      <ul className={menuContainer}>
        PROJECT MEMBER
        <li key="eunjin-kang">
          <a href="https://github.com/ejinaaa">강은진</a>
        </li>
        <li key="wonjun-jang">
          <a href="https://github.com/Wonjuny0804">장원준</a>
        </li>
        <li key="jinyoung-choi">
          <a href="https://github.com/Bernese-Corgi">최진영</a>
        </li>
      </ul>
    </div>
  );
};

Footer.defaultProps = {
  className: {},
};

Footer.propTypes = {
  className: PropTypes.object,
};

export default Footer;
