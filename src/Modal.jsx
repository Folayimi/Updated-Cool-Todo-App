import React, {useState,useEffect} from 'react';

const Modal = ({errMessage,setError})=>{
    const [show, setShow] = useState(false)
    useEffect(()=>{    
        setShow(true)    
        setTimeout(()=>{
            setShow(false)  
            setError(false)          
        },[5000])                                     
    },[])
    return(
        <>
            {show ?
            <div className="messCont">
                <div className="Message">{errMessage}</div>
            </div>
             
            :
            <div></div>
            }
        </>
    )
}
export default Modal;