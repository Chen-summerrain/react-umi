/* eslint-disable */
import React,{ Fragment,useState,useEffect,useMemo} from 'react';
import {Button,message} from 'antd'

const text ={
    add: '加法',
    decrease: '减法',
    multiply: '乘法',
    divison: '除法',
    mod: '取余',
}

const useCount = (initialVal) => {
    const [count,setCount] = useState(initialVal)

    const add = (v=1) => {
        message.info(`现在的操作是${text.add}: 输入值为 ${v}`)
        setCount(count+v)
    }

    const decrease = (v=1) => {
        message.info(`现在的操作是${text.decrease}: 输入值为 ${v}`)
        setCount(count-v)
    }

    const multiply = (v=1) => {
        message.info(`现在的操作是${text.multiply}: 输入值为 ${v}`)
        setCount(count*v)
    }

    const divison = (v=1) => {
        message.info(`现在的操作是${text.divison}: 输入值为 ${v}`)
        if(v==0) {
            message.error('除数不能为0')
            return;
        }
        setCount(count/v)
    }

    const mod = (v=1) => {
        message.info(`现在的操作是${text.mod}: 输入值为 ${v}`)
        if(v==0) {
            message.error('取余不能为0')
            return;
        }
        setCount(count%v)
    }

    return [
        count,{add,decrease,multiply,divison,mod}
    ]
}


export default () => {
    const [count,setCount] = useCount(0)
    const [type,setType] = useState('add')

    const handleType = (type,v) => {
        setType(type)
        setCount[type](v)
    }
    return (
        <Fragment>
            <div>{text[type]} : {count}</div>
            <Button onClick={()=>handleType('add')}>add</Button>
            <Button onClick={()=>handleType('decrease')}>decrease</Button>
            <Button onClick={()=>handleType('multiply',2)}>multiply</Button>
            <Button onClick={()=>handleType('divison',2)}>divison</Button>
            <Button onClick={()=>handleType('mod',2)}>mod</Button>
        </Fragment>
    )
}