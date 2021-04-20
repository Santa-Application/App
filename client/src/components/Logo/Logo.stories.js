import Logo from './Logo'

/* ------------------------------------------------------------------- */

export default {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {
    mode: {
      name: 'mode',
      description: 'default value는 black이고 white를 넣어주면 글자색이 white인 logo가 render됩니다.',
      options: ['white', 'black']
    },
    title: {
      name: 'title',
      description: ''
    }
  },
}

const Template = (args) => <Logo {...args} />

export const DefaultLogo = Template.bind({});

export const WhiteLogo = Template.bind({});
WhiteLogo.args = {
  mode: 'white'
} 