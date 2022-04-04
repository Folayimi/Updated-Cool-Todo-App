import React, {useState, useEffect} from 'react'
import Todo from "./Todo";
import './index.css'
import Background from './Background'
import {BrowserRouter as 
    Router, 
    Routes, 
    Route} from 'react-router-dom'

function App (){
    const [size,setSize] = useState(window.innerWidth)
    const [mobile,setMobile] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [actMode,setActMode] = useState(false);    
    window.addEventListener('resize',()=>{
        setSize(window.innerWidth);
    })
    window.removeEventListener('resize',()=>{
        setSize(window.innerWidth);
    })
    useEffect(()=>{
        if(size<=625){
            setMobile(true)
            setDarkMode(true)
            setDarkMode(false)
        }
        else if(size>625){
            setMobile(false)
        }
    },[size])
    return(
        <>  
        {
            darkMode ?
            <div className="body" style={{background:"hsl(235, 21%, 11%)"}}>
            <Router>
                <Background mobile={mobile} darkMode={darkMode}/>
                <Routes>
                    <Route exact path="/" element={
                        <Todo mobile={mobile} darkMode={darkMode}
                        setDarkMode={setDarkMode} actMode={actMode}
                        setActMode={setActMode}/>
                    }/>                    
                </Routes>                         
            </Router>
            </div>
            :
            <div className="body" style={{background:"hsl(0, 0%, 98%)"}}>
            <Router>
                <Background mobile={mobile} darkMode={darkMode}/>
                <Routes>
                    <Route exact path="/" element={
                        <Todo mobile={mobile} darkMode={darkMode}
                        setDarkMode={setDarkMode} actMode={actMode}
                        setActMode={setActMode}/>
                    }/>                    
                </Routes>                         
            </Router>
            </div>
        }                                
        </>
    )
}

export default App;