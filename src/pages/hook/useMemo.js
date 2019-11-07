/* eslint-disable */
import React,{ Fragment,useState,useEffect,useMemo} from 'react';
import {Button} from 'antd'

/***
 *  useMemo 动态计算，返回值
 * 
*/
export default () => {
    const [count1,setCount1] = useState(0)
    const [count2,setCount2] = useState(0)

    const calculateCount = useMemo(() => {
        console.log('usememo')
        return count1 + count2;
    }, [count1,count2]);

    useEffect(()=>{
        console.log(calculateCount,'calculateCount useEffect')
    },[calculateCount])
      
    return (
        <Fragment>
            <div>count1: {count1}</div>
            <div>count2: {count2}</div>
            {/* <div>calculateCount: {calculateCount}</div> */}
            <Button onClick={()=>setCount1(count1+1)}>count1</Button>
            <Button onClick={()=>setCount2(count2+1)}>count2</Button>
        </Fragment>
    )
}