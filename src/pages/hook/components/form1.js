/* eslint-disable */
import { useRef, useState, useEffect,forwardRef,useImperativeHandle } from 'react'
import {Form,Input} from 'antd'

function FormTemp (props,ref) {
    const [data,setData] = useState({})
    const { getFieldDecorator, resetFields, validateFieldsAndScroll } = props.form

    // useEffect(()=>{
    //     console.log('[],child')
    // },[])

    useImperativeHandle(ref, () => {
        // handleSubmit()
        return {on:1}
    })

    const handleSubmit = () => {
        validateFieldsAndScroll((err,vals) => {
            console.log(err,vals,'vals')
            setData({err,vals})
        })
    }

    return(
        <Form layout="inline">
            <Form.Item label="name">
                {
                    getFieldDecorator('name',{
                        initialValue:data.name,
                        rules:[
                            {required:true,message:'name'}
                        ]
                    })(<Input placeholder="name"/>)
                }
            </Form.Item>
            <Form.Item label="user">
                {
                    getFieldDecorator('user',{
                        initialValue:data.user,
                        rules:[
                            {required:true,message:'user'}
                        ]
                    })(<Input placeholder="user"/>)
                }
            </Form.Item>
        </Form>
    )
}

FormTemp = forwardRef(FormTemp);
const WrapForm  = Form.create({name:'form'})(FormTemp)
export default WrapForm