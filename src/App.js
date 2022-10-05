
import './App.css';
import { useState } from 'react';
import apps from './apps'
function App(props) {
  const [activeUrl, setActiveUrl] = useState(apps?.[0]?.activeRule);

  
  return (
    <>
      <main id='root'></main>
    </>
  );
}

export default App;
