/* eslint-disable */
import React,{useContext,useState,useEffect} from 'react';
import {Button} from 'antd'
import Child1 from './components/Child1';
import Child2 from './components/Child2';
const ContextTemp= React.createContext({});

const Index = () =>{
    const [data,setData] = useState({})
    return (
        <ContextTemp.Provider
            value={data}
        >   
            <Button onClick={()=>{
                setData({text:'change!'})
            }}>click</Button>
            <Child1 context={ContextTemp}/>
            <Child2 context={ContextTemp}/>
        </ContextTemp.Provider>
    )
}

export default Index;