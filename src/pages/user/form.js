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
    useEffect(()=>{
        
    },[data])

    const handleClick = () => {
        console.log(data,'e===')
    }
    return (
        <Layout>
            <Button onClick={handleClick}>click</Button>
            <FormTemp data={data} setData={setData}/>
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