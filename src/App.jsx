import React ,{useState , useEffect, createContext}from 'react'; 
import './App.css'; 
import { toast } from 'react-toastify'; 
import { BrowserRouter, Route, Routes ,Navigate } from 'react-router-dom';     
import ControlPanel from './pages/ControlPanel.jsx';
import Generate from './pages/Generate.jsx';                  
import Filter from './pages/Filter.jsx';
import Login from './pages/Login.jsx'; 
import Students from './pages/Students.jsx'; 
import CreatQr from './pages/CreatQr.jsx';
import Sidebar from './components/Sidebar';

export const loginContext = createContext();

const App = () => {

  const [isLogged , setIsLogged ]=useState(false) ;

  const logFunc = (val) => {
    setIsLogged(val);
  }
  return (
    <BrowserRouter>
      <loginContext.Provider value={logFunc}>
        {isLogged ? (
          <Routes>
            <Route path="/controlPanel" element={<ControlPanel />} />
            <Route path="/generate" element={<Generate/>} />
            <Route path="/sidebar" element={<Sidebar/>} />
            <Route path="/creatQr" element={<CreatQr/>} />
            <Route path="/filter" element={<Filter/>} />
            <Route path="/students" element={<Students/>} />
            <Route path="*"  element={<Navigate to="/controlPanel" replace />} />
          </Routes> ):(
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="*"  element={<Navigate to="/login" replace />} />
          </Routes> )
        }
      </loginContext.Provider>
    </BrowserRouter>
  );
};

export default App;