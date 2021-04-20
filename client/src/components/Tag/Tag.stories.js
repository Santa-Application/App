// Story를 구성할 컴포넌트 파일 불러오기
import Tag from './Tag'

/* ------------------------------------------------------------------- */

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    type: {
      name: 'type',
      table: {
        type: { summary: 'string'}
      },
      control: { type: 'select' },
      description: '메뉴나 글에 들어가는 tag 컴포넌트의 타입을 정할수 있습니다.',
      options: ['mountain', 'date', 'person', 'gender']
    },
    content: {
      name: 'content',
      table: {
        type: { summary: 'string' }
      }
    }
  },
}

const Template = (args) => <Tag {...args} />

export const DefaultTag = Template.bind({})

export const PersonTag = Template.bind({});
PersonTag.args ={
  type: 'person',
  content: '6명'
};

export const MountainTag = Template.bind({});
MountainTag.args = {
  type: 'mountain',
  content: '백두산'
};

export const DateTag = Template.bind({});
DateTag.args = {
  type: 'date',
  content: '2021/04/16'
}
export const GenderTag = Template.bind({});
GenderTag.args = {
  type: 'genderBoth',
  content: '상관없음'
}
