import React,{useState, useEffect, useContext} from 'react';
import Modal from "./Modal"

const InstantContext = React.createContext()
const Todo = ({mobile,darkMode,setDarkMode,actMode,setActMode}) =>{
    const [data, setData] = useState([]);
    const [actData, setActData] = useState(data);
    const [count, setCount] = useState(0);
    const [compData, setCompData] = useState(data);
    const [showAll,setShowAll] = useState(true)
    const [showActive,setShowActive] = useState(false);
    const [showCompleted,setShowCompleted] = useState(false);    
    const [create, setCreate] = useState("hsl(235, 24%, 19%)");   
    const [txtCol, setTxtCol] = useState("hsl(0, 0%, 98%)");   
    const [basetxt, setBaseTxt] = useState("rgb(160,160,160)")  
    const [text, setText] = useState("");  
    const [textDec,setTextDec] = useState("none")    
    const [error, setError] = useState(false);
    const [errMessage, setErrMessage] = useState("");     
    useEffect(()=>{
        if(darkMode){
            setCreate("hsl(235, 24%, 19%)");
            setTxtCol("hsl(0, 0%, 98%)")    
            setBaseTxt("rgb(160,160,160)")                                            
            setActData(data);
            setActMode(false);
            setActMode(true);
        }
        else{
            setCreate("hsl(0, 0%, 98%)");
            setTxtCol("hsl(235, 24%, 19%)")     
            setBaseTxt("rgb(160,160,160)")                                                                       
            setActData(data);  
            setActMode(false);                              
        }                      
    },[darkMode,actMode])
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(text){
            setData([...data, {id:new Date().getTime().toString(), text,
            active:true,completed:false}]);
            setText("");                 
            setActMode(true); 
            setCount(1);
            actData.map((item)=>{            
                setCount(count+1)
                return null
            })                                                   
        }  
        else{
            setError(true);
            setErrMessage("Kindly Insert a Text!")            
        }                              
    }
    return(
        <>
            {
                error && <Modal 
                setError={setError} 
                errMessage={errMessage}/>
            }
            <div className="todoCont">
                <div className="todo">                    
                    <div className="todoHead">
                        <h1>TODO</h1>
                        {
                            darkMode ?
                            <div className="mode" onClick={()=>{
                                setDarkMode(false)
                            }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/></svg>
                            </div>
                            :
                            <div className="mode" onClick={()=>{
                                setDarkMode(true)
                            }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>
                            </div>
                        }                        
                    </div>
                    <div className="createTodo" 
                    style={{background:create}}
                    >
                        <div className="select">

                        </div>
                        <input type="text" placeholder='Create a new todo...'
                        style={{color:txtCol}}
                        name="insertBox"
                        value={text}
                        onChange={(e)=>{
                            setText(e.currentTarget.value)                                                                                                         
                        }}
                        />
                        <div className="addItem"
                        style={{color:txtCol}}
                        onClick={handleSubmit}>Add</div>
                    </div>                                        
                    {
                        mobile ?
                        <>
                        <div className="baseM"
                        style={{background:create, color:basetxt}}>
                            <div className="unMarked">
                                <p>{count} item(s) left</p>
                            </div>
                            <div className="clCompl">
                                <p onClick={()=>{
                                    setCompData((compData)=>{
                                        return compData.filter((list)=>
                                        list.completed===false)
                                    })
                                    setActData((actData)=>{
                                        return actData.filter((list)=>
                                        list.completed===false)
                                    })
                                    setData((Data)=>{
                                        return Data.filter((list)=>
                                        list.completed===false)
                                    })                                    
                                }}>Clear Completed</p>
                            </div>
                        </div>
                        <div className="Mstatus"
                        style={{background:create, color:basetxt}}>
                            <p onClick={()=>{
                                setShowAll(true);
                                setShowActive(false);
                                setShowCompleted(false);                                    
                            }}>All</p>
                            <p onClick={()=>{   
                                setActData((actData)=>{
                                    return actData.filter((list)=>
                                    list.active===true)
                                })                                                             
                                setShowActive(true);
                                setShowAll(false);                                    
                                setShowCompleted(false);                                                          
                            }}>Active</p>
                            <p onClick={()=>{
                                setCompData((compData)=>{
                                    return compData.filter((list)=>
                                    list.completed===true)
                                })                                                                 
                                setShowCompleted(true);
                                setShowActive(false);
                                setShowAll(false);                                                                                                           
                            }}>Completed</p>
                        </div>
                        </>
                        :
                        <div className="baseD"
                        style={{background:create, color:basetxt}}>
                            <div className="unMarked">
                                <p>{count} item(s) left</p>
                            </div>
                            <div className="status">
                                <p onClick={()=>{
                                    setShowAll(true);
                                    setShowActive(false);
                                    setShowCompleted(false);                                    
                                }}>All</p>

                                <p onClick={()=>{
                                    setActData((actData)=>{
                                        return actData.filter((list)=>
                                        list.active===true)
                                    })                                                                        
                                    setShowActive(true);
                                    setShowAll(false);                                    
                                    setShowCompleted(false);                                    
                                }}>Active</p>

                                <p onClick={()=>{
                                    setCompData((compData)=>{
                                        return compData.filter((list)=>
                                        list.completed===true)
                                    })                                     
                                    setShowCompleted(true);
                                    setShowActive(false);
                                    setShowAll(false);                                                                                                           
                                }}>Completed</p>
                            </div>
                            <div className="clCompl">
                                <p onClick={()=>{
                                    setCompData((compData)=>{
                                        return compData.filter((list)=>
                                        list.completed===false)
                                    })
                                    setActData((actData)=>{
                                        return actData.filter((list)=>
                                        list.completed===false)
                                    })
                                    setData((Data)=>{
                                        return Data.filter((list)=>
                                        list.completed===false)
                                    })                                    
                                }}>Clear Completed</p>
                            </div>
                         </div>
                    }                    
                </div>                
            </div>
                <div className="listCont" >
                    <InstantContext.Provider value={{darkMode,create,txtCol,
                    text,setText,data,setData,setActData,setCompData,
                    textDec,setTextDec,setCount,count}}>
                    {   showAll && 
                        data.map((items)=>{
                        return <List {...items} key={items.id}/>
                        })                            
                    }
                    {
                        showActive &&
                        actData.map((items)=>{
                            return <List {...items} key={items.id}/>
                        })
                    }
                    {
                        showCompleted &&
                        compData.map((items)=>{
                            return <List {...items} key={items.id}/>
                        })
                    }
                    </InstantContext.Provider>                                                
                </div>                                    
        </>
    )
}

export default Todo;

const List = ({text,id,active,completed}) =>{   
    const instantData = useContext(InstantContext)
    const pickData = instantData.data.find((list)=>list.id===id)            
    const removeList = () =>{          
        instantData.setData((Data)=>{            
            return Data.filter((list)=>list.id!==id)
        })
        
        instantData.setActData((Data)=>{            
            return Data.filter((list)=>list.id!==id)
        })

        instantData.setCompData((Data)=>{            
            return Data.filter((list)=>list.id!==id)
        })
        if (pickData.completed===false){
            instantData.setCount(instantData.count-1)
        }                                                                 
        instantData.setCompData((compData)=>{
            return compData.filter((list)=>
            list.completed===true)
        })
        instantData.setActData((actData)=>{
            return actData.filter((list)=>
            list.completed===false)
        })
        instantData.setCount(instantData.count+1)        
    }    
    return(
        <>
        <div className="todoL" 
        style={{background:instantData.create}}
        >
            <div className="remove"
            onClick={removeList}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>    
            </div>
            <h1 style={{color:instantData.txtCol}}>{text}</h1>
            {
                active ?                
                    <div className="selectM">
                    <div className="select" onClick={()=>{ 
                        replaceItem(instantData.setData, {id: new Date().getTime().toString(),
                            text,active:false,completed:true},id)                                               
                        
                        replaceItem(instantData.setActData, {id: new Date().getTime().toString(),
                            text,active:false,completed:true},id)
                            
                        replaceItem(instantData.setCompData, {id: new Date().getTime().toString(),
                            text,active:false,completed:true},id)                                                  
                        instantData.setActData((actData)=>{
                            return actData.filter((list)=>
                            list.active===true)
                        })                        
                        instantData.setCount(instantData.count-1)                          
                        instantData.setCompData((compData)=>{
                            return compData.filter((list)=>
                            list.completed===true)
                        })                                                                                                                        
                        }}>
                        <div className="inSelect"
                        style={{background:instantData.create}}/>                        
                    </div>                    
                    <p style={{color:instantData.txtCol}}>Mark as done!</p>
                    </div>
                :
                    <div className="selectM">
                    <div className="select" onClick={()=>{
                        replaceItem(instantData.setData, {id: new Date().getTime().toString(),
                            text,active:true,completed:false},id)                                               
                        
                        replaceItem(instantData.setActData, {id: new Date().getTime().toString(),
                            text,active:true,completed:false},id)
                            
                        replaceItem(instantData.setCompData, {id: new Date().getTime().toString(),
                            text,active:true,completed:false},id)                                                  
                        instantData.setActData((actData)=>{
                            return actData.filter((list)=>
                            list.active===true)
                        })                        
                        instantData.setCount(instantData.count+1)                          
                        instantData.setCompData((compData)=>{
                            return compData.filter((list)=>
                            list.completed===true)
                        })                                                                    
                        }}>                       
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>                                                 
                    </div>
                    <p style={{color:instantData.txtCol}}>Mark as done!</p>
                    </div>
            }                                           
        </div>        
        </>
    )
}
const replaceItem =(setItem,newItem,identifier)=>{    
        setItem((items)=>{
            return items.filter((item)=>item.id!==identifier);
        });
        setItem((items)=>{
            return [...items, newItem]
        })    
}