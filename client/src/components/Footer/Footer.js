import { Logo } from 'components';
import { footerContainer, menuContainer } from './Footer.module.scss';

const projectInfoData = [
  {
    key: 'introduction-SANTA',
    href: 'https://github.com/Santa-Application/App#santa-%EC%86%8C%EA%B0%9C',
    content: 'SANTA 소개',
  },
  {
    key: 'tech-stack',
    href: 'https://github.com/Santa-Application/App#tech-stack',
    content: '기술 스택',
  },
  {
    key: 'application-flow',
    href: 'https://github.com/Santa-Application/App#application-flowss',
    content: '애플리케이션 플로우',
  },
];
const projectMemberData = [
  {
    key: 'eunjin-kang',
    github: 'https://github.com/ejinaaa',
    name: '강은진',
  },
  {
    key: 'wonjun-jang',
    github: 'https://github.com/Wonjuny0804',
    name: '장원준',
  },
  {
    key: 'jinyoung-choi',
    github: 'https://github.com/Bernese-Corgi',
    name: '최진영',
  },
];

const Footer = () => {
  return (
    <footer className={footerContainer}>
      <Logo href="/" />
      <div className={menuContainer}>
        <p>PROJECT INFORMATION</p>
        <ul>
          {projectInfoData.map(({ key, href, content }) => (
            <li key={key}>
              <a href={href}>{content}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={menuContainer}>
        <p>PROJECT MEMBER</p>
        <ul>
          {projectMemberData.map(({ key, github, name }) => (
            <li key={key}>
              <a href={github}>{name}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
