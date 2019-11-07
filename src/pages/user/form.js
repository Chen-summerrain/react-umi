/* eslint-disable */
import React,{ useEffect,useState,useRef} from 'react'
import {connect} from 'dva'
import {Form,Button} from 'antd'
import Layout from '@/components/Layout'
import FormTemp from './components/formTemp'
import api from '@/utils/request.js'
// const HocFormTemp = React.forwardRef((props,ref)=>(<div ref={ref}><FormTemp {...props} /></div>))

const Index = ({dispatch,history,userinfo,list,form}) => {
    const [data,setData] = useState({})
    const [count,setCount] = useState(0)
    const form_ref = useRef()

    useEffect(()=>{
        console.log(count,'count //shouldComponentUdate')
    },[count])

    useEffect(()=>{
        console.log(count,'[] //componetDidMount')
    },[])

    useEffect(()=>{
        console.log(count,'null //componentDidUpdate')
    })
    const handleClick = () => {
        setCount(count+1)
        // console.log(form_ref.current,'rrr')
    }
    const handleEvent = (e) => {
        console.log(e,'dd')
    }
    return (
        <Layout>
            <span>count{count}</span>
            <Button onClick={handleClick}>click</Button>
            <FormTemp 
                ref={form_ref} 
            />
        </Layout>
    )
}

function mapStateToProps (state) {
    const {list,userinfo} = state.user
    return {
        userinfo,
        list
    }
}

export default connect(mapStateToProps)(Index)