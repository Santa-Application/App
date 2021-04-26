import AreaCategory from './AreaCategory'

/* ------------------------------------------------------------------- */

export default {
  title: 'Components/AreaCategory',
  component: AreaCategory,
}

const Template = (args) => <AreaCategory {...args} />

export const Sample = Template.bind({})
Sample.args = {
  district: '서울경기'
}