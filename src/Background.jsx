import React from 'react'
import darkMobile from './Assets/Image/darkMobile.jpg';
import lightMobile from './Assets/Image/lightMobile.jpg';
import darkDesktop from './Assets/Image/darkDesktop.jpg';
import lightDesktop from './Assets/Image/lightDesktop.jpg';

const Background = ({mobile,darkMode}) =>{
    return(
        <>
            {
                mobile ?
                <div className="header">
                    <div className="image">
                        {
                            darkMode?
                            <img src={darkMobile} alt="darkM" />
                            :
                            <img src={lightMobile} alt="lightM" />
                        }
                    </div>
                </div>
                :
                <div className="header">
                    <div className="image">
                        {
                            darkMode?
                            <img src={darkDesktop} alt="darkD" />
                            :
                            <img src={lightDesktop} alt="lghtD" />
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default Background;