/* eslint-disable */
import React,{ useEffect,useState,useRef} from 'react'
import {Button} from 'antd'
import Layout from '@/components/Layout'
import User from './components/User'

const Index = ({dispatch,history,userinfo,list}) => {
    const [userList,setList] = useState(null)
    const Uref = useRef()
    useEffect(()=>{
        
    },[userList])
    return (
        <Layout>
            <Button onClick={()=>{
                // const {resetFields} = Uref.current
                // resetFields()
                console.log(Uref,'Uref')
            }}>click</Button>
            <User ref={Uref}/>
        </Layout>
    )
}

export default Index
// export default Index