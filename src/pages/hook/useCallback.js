/* eslint-disable */
import React,{ Fragment,useState,useEffect,useCallback} from 'react';
import {Button} from 'antd'

/**
 * callback 复用逻辑返回回调
 * callback and effect 顺序执行
 * * */
export default () => {
    const [count1,setCount1] = useState(0)
    const [count2,setCount2] = useState(0)

    const calculateCount = useCallback(() => {
        console.log(count1,count2,'callback')
        if (count1 && count2) {
            return count1 * count2;
        }
        return count1 + count2;
    }, [count1, count2])

    useEffect(()=>{
        console.log(typeof calculateCount,'typeof')
        const result = calculateCount(count1, count2)
        console.log(result,'useEffect')
    },[calculateCount])
      
    return (
        <Fragment>
            <div>count1: {count1}</div>
            <div>count2: {count2}</div>
            <Button onClick={()=>setCount1(count1+1)}>count1</Button>
            <Button onClick={()=>setCount2(count2+1)}>count2</Button>
        </Fragment>
    )
}