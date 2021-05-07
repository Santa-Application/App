import SearchBox from './SearchBox'
import { useDispatch } from 'react-redux'
import { getMountainAsync } from 'redux/modules/mountain'

export default {
  title: 'Components/SearchBox',
  component: SearchBox,
  decorators: [
    () => {
      const dispatch = useDispatch()
      dispatch(getMountainAsync())
    }
  ],
  argType: {
    mountainData: {
      description: '상위로부터 전체 산 데이터를 전달 받습니다.'
    }
  }
};

export const Story = args => <SearchBox {...args} />;
