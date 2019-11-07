/* eslint-disable */
import React,{useContext,useState,useEffect} from 'react';
import {Button} from 'antd'

const Child = ({context}) =>{
    const {text} = useContext(context)

    return (
        <div>
            <div>child1--{text}</div>
        </div>
    )
}

export default Child;