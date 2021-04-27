// Story를 구성할 컴포넌트 파일 불러오기
import Icon from './Icon';

/* ------------------------------------------------------------------- */

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    shape: {
      type: { name: 'string', required: true },
      description: '아이콘의 생김새를 지정할 수 있습니다.',
      table: {
        type: { summary: 'number' },
      },
      control: { type: 'select' },
      options: ['calendar', 'close', 'edit', 'female', 'genderBoth', 'back',
        'likeFalse', 'likeTrue', 'logout', 'male', 'member', 'menu', 'level1', 'level2', 'level3',
        'selectClose', 'selectOpen', 'more']
    }
  },
};

// 컴포넌트 템플릿
// 함수의 복사본을 만드는 표준 JavaScript 기법
const Template = (args) => <Icon {...args} />;

export const simpleIcon = Template.bind({});