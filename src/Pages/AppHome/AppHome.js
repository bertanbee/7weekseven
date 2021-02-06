import Date from '../../components/Date/Date';
import Logo from '../../components/Logo/Logo';
import Body from '../../components/Body/Body';
import Bottom from '../../components/Bottom/Bottom';
import Cookies from '../../components/Cookies/Cookies';
import Loading from '../../components/Loading/Loading';

import '../../globalcss/global.css'
import '../../globalcss/head.css';
import '../../globalcss/body.css';
import '../../globalcss/main-block.css';

function AppHome() {
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

export default AppHome;