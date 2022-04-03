import React, {useState, useEffect} from 'react'
import Todo from "./Todo";
import './index.css'
import Background from './Background'
import Footer from './Footer'
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
            <Router>
                <Background mobile={mobile} darkMode={darkMode}/>
                <Routes>
                    <Route exact path="/" element={
                        <Todo mobile={mobile} darkMode={darkMode}
                        setDarkMode={setDarkMode} actMode={actMode}
                        setActMode={setActMode}/>
                    }/>                    
                </Routes>         
                <Footer mobile={mobile} darkMode={darkMode}/>       
            </Router>            
        </>
    )
}

export default App;