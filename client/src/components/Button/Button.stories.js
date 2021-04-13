// Story를 구성할 컴포넌트 파일 불러오기
import Button from './Button'

/* ------------------------------------------------------------------- */

export default {
  // 컴포넌트 설명을 입력하면 Storybook에 카테고리 되어 표시됩니다.
  title: 'UI/Control/Button',
  // 컴포넌트 설정
  component: Button,
  // 전달 인자 유형 설정
  argTypes: {
    disabled: {
      name: 'disabled',
      control: { type: 'boolean' },
      description: '버튼의 disabled를 설정하는 아규먼트입니다.',
      table: {
        type: {
          summary: '설명',
          detail: 'This value can have only true or false'
        }
      },
    },
    type: {
      table: {
        type: {
          summary: '설명',
          detail: 'submit, button, reset'
        }
      },
      description: '버튼의 타입 지정할 수 있습니다.'
    },
  },
}

// 컴포넌트 템플릿
// 함수의 복사본을 만드는 표준 JavaScript 기법
const Template = (args) => <Button {...args} />

export const RegularButton = Template.bind({});
RegularButton.storyName = 'Regular';
RegularButton.args = {
  type: 'submit'
}
