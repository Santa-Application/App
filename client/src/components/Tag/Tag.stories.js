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
    contents: {
      description: '타입에 따라서 들어가는 값을 정할 수 있습니다.',
      table: {
        type: {
          summary: '설명',
          detail: '산, 성별, 사람수, 날짜'
        }
      }
    }
  },
}

const Template = (args) => <Tag {...args} />

export const DefaultTag = Template.bind({});
