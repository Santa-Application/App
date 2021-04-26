import MountainCard from './MountainCard';
import { addDecorator } from '@storybook/react';

addDecorator(StoryRouter());


export default {
  title: 'Components/MountainCard',
  component: MountainCard,
  argTypes: {
    mountainName: {
      name: 'mountainName',
      description: '산의 이름이 들어갑니다.'
    },
    to: {
      name: 'to',
      description: '카드를 클릭했을때 어디로 이동할지 경로가 들어갑니다.'
    }
  },
}

const Template = (args) => <MountainCard {...args} />

export const Sample = Template.bind({});

Sample.args = {
  mountainName: '한라산',
  to: '/mountain/hanlasan'
}
