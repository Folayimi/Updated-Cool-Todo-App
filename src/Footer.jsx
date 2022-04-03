import React from 'react'

const Footer = ({darkMode}) =>{
    return(
        <>
            {
                darkMode ?
                <div className="footer"
                style={{background:"hsl(235, 21%, 11%)"}}
                ></div>
                :
                <div className="footer"
                style={{background:'hsl(0, 0%, 98%)'}}
                ></div>
            }            
        </>
    )
}

export default Footer;