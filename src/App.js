import Date from './components/Date/Date';
import Logo from './components/Logo/Logo';
import Body from './components/Body/Body';

import Cookies from './components/Cookies/Cookies';
import Loading from './components/Loading/Loading';
import Bottom from './components/Bottom/Bottom';

import './globalcss/global.css'
import './globalcss/head.css';
import './globalcss/body.css';
import './globalcss/main-block.css';

function App() {
  return (
    <>
    <div className="main-block">
      <Cookies></Cookies>
      <div className="head">
        <Date></Date>
        <Logo></Logo>
      </div>
      <div className="body">
        <Body></Body>
      </div>
    </div>
    <Bottom></Bottom>
    <Loading></Loading>
    </>
  );
}

export default App;
