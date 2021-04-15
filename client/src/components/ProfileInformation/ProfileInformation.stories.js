// Story를 구성할 컴포넌트 파일 불러오기
import ProfileInformation from './ProfileInformation';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

/* ------------------------------------------------------------------- */

export default {
  title: 'Components/ProfileInformation',
  component: ProfileInformation,
  argTypes: {
    type: {
      name: 'type',
      table: {
        type: { summary: ['age', 'gender', 'level']}
      },
      control: { type: 'radio' },
      description: '개인 정보에 대한 요약을 나타내는 컴포넌트입니다. 다음 중에서 고를 수 있습니다.',
      options: ['나이', '성별', '레벨'],
    },
    options: {
      name: 'options',
      control: { type: 'select'},
      description: 'type을 고르면 그에 따른 options값들입니다.',
      options: ['female', 'male', 'level1', 'level2', 'level3', 27]
    },
  },
}

const Template = (args) => <ProfileInformation {...args} />

export const SampleInfo = Template.bind({});