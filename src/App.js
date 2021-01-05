import Date from './components/Date/Date';
import Logo from './components/Logo/Logo';
import Body from './components/Body/Body';

import './globalcss/global.css'
import './globalcss/head.css';
import './globalcss/body.css';
import './globalcss/main-block.css';

function App() {
  return (
    <div className="main-block">
      <div className="head">
        <Date></Date>
        <Logo></Logo>
      </div>
      <div className="body">
        <Body></Body>
      </div>
    </div>
  );
}

export default App;
