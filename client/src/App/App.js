import { Heading } from 'components';
import {
  RecruitPostList,
  RegularPostList,
  RegularPost,
  RecruitPost,
} from 'containers';

function App() {
  return (
    <div className="App">
      <Heading level={1} content="SANTA" />
      <Heading level={2} content="Reviews" />
      <Heading level={3} content="제목" />
      <RecruitPostList />
      <RegularPostList />
      <RegularPost />
      <RecruitPost />
    </div>
  );
}

export default App;
