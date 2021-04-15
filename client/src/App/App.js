import { Heading } from 'components';
import { Checkbox } from 'components';

function App() {
  return (
    <div className="App">
      <Heading level={1} content="SANTA" />
      <Heading level={2} content="Reviews" />
      <Heading level={3} content="제목" />
      <Checkbox content="like" />
    </div>
  );
}

export default App;
