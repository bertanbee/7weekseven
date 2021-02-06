import TopBody from './Components/TopBody/TopBody';
import Below from './Components/Below/Below';

import './globalstyles.css';

function HomePage() {
  return (
    <div className="app">
      <TopBody></TopBody>
      <Below></Below>
    </div>
  );
}

export default HomePage;
