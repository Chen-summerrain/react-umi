/* eslint-disable */
import React,{ useEffect,useState,useRef} from 'react'
import {connect} from 'dva'
import {Table} from 'antd'
import Layout from '@/components/Layout'
import User from './components/User'

const Index = ({dispatch,history,userinfo,list}) => {
    const [userList,setList] = useState(null)
    const Uref = useRef()
    useEffect(()=>{
        dispatch({type:'user/getUser'})
        setList(list)
        console.log(Uref,'userList')
    },[userList])
    return (
        <Layout>
            <div ref={Uref}>layout index</div>
            <User />
            <Table
                style={{marginTop:'20px'}}
                scroll={{y:300}}
                dataSource={list}
                rowKey='username'
                columns={[
                    {title:'用户名',dataIndex:'username'},
                    {title:'邮箱',dataIndex:'email'},
                    {title:'居住地',dataIndex:'city'},
                    {title:'日期',dataIndex:'date',width:200},
                    {title:'备注',dataIndex:'content',width:400},
                ]}
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
// export default Index