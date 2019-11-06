/* eslint-disable */
import {Form,Input} from 'antd'
import { useRef, useState, useEffect } from 'react'

const FormTemp = ({form,data,setData}) => {
    const _form = useRef()
    // const [data,setData] = useState({})
    const { getFieldDecorator, resetFields, validateFieldsAndScroll } = form

    useEffect(()=>{
        console.log(data,'data')
        setData({...data,id:1})
    },[])
    
    return(
        <Form ref={_form}>
            <Form.Item>
                {
                    getFieldDecorator('name',{
                        initialValue:data.name,
                        getValueFromEvent(e){
                            setData({...data,name:e.target.value})
                            return e.target.value
                        },
                        rules:[
                            {require:true,message:'name'}
                        ]
                    })(<Input placeholder="name"/>)
                }
            </Form.Item>
            <Form.Item>
                {
                    getFieldDecorator('user',{
                        initialValue:data.user,
                        getValueFromEvent(e){
                            setData({...data,user:e.target.value})
                            return e.target.value
                        },
                        rules:[
                            {require:true,message:'name'}
                        ]
                    })(<Input placeholder="user"/>)
                }
            </Form.Item>
        </Form>
    )
}

export default Form.create({name:'form'})(FormTemp)