
import Navbar from './component/Navbar';
import News from "./component/News";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState } from "react";


function App() {
  const pageSize = 6 ;
  const country = "in";
  const apikey ="60ce9c599628400787fef4dbc81df63b";
  const [progress, setProgress] = useState(0)
  const [mode, setMode] = useState("light");




  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <div className="App">
      <Router>
      <Navbar  mode={mode} toggleMode={toggleMode} />
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route exact path="/" element={ <News  mode={mode} setProgress={setProgress} key="general" apikey={apikey} pageSize={pageSize} country ={country} category="general"/> } />
        <Route exact path="/technology" element={ <News  mode={mode} setProgress={setProgress} key="technology" apikey={apikey} pageSize={pageSize} country ={country} category="technology"/> } />
        <Route exact path="/business" element={ <News  mode={mode} setProgress={setProgress} key="business" apikey={apikey} pageSize={pageSize} country ={country} category="business"/> } />
        <Route exact path="/entertainment" element={ <News  mode={mode} setProgress={setProgress} key="entertainment" apikey={apikey} pageSize={pageSize} country ={country} category="entertainment"/> } />
        <Route exact path="/general" element={ <News  mode={mode} setProgress={setProgress} key="general" apikey={apikey} pageSize={pageSize} country ={country} category="general"/> } />
        <Route exact path="/health" element={ <News  mode={mode} setProgress={setProgress} key="health" apikey={apikey} pageSize={pageSize} country ={country} category="health"/> } />
        <Route exact path="/science" element={ <News  mode={mode} setProgress={setProgress} key="science" apikey={apikey} pageSize={pageSize} country ={country} category="science"/> } />
        <Route exact path="/sports" element={ <News  mode={mode} setProgress={setProgress} key="sports" apikey={apikey} pageSize={pageSize} country ={country} category="sports"/> } />
      </Routes>
 </Router>
    </div>
  );
  
}


export default App;
