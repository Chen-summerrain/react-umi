/* eslint-disable */
import React,{useContext,useState,useEffect} from 'react';

const Child = ({context}) =>{
    const {text} = useContext(context)
    
    return (
        <div>child2--{text}</div>
    )
}

export default Child;