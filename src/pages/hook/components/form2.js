/* eslint-disable */
import { useRef, useState, useEffect,forwardRef,useImperativeHandle,memo } from 'react'
import {Form,Input} from 'antd'

function FormTemp (props,ref) {
    const [data,setData] = useState({})
    const { getFieldDecorator, resetFields, validateFieldsAndScroll } = props.form

    useEffect(()=>{
        console.log('[],child')
    },[])

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
            <Form.Item label="job">
                {
                    getFieldDecorator('job',{
                        initialValue:data.job,
                        rules:[
                            {required:true,message:'job'}
                        ]
                    })(<Input placeholder="job"/>)
                }
            </Form.Item>
            <Form.Item label="age">
                {
                    getFieldDecorator('age',{
                        initialValue:data.age,
                        rules:[
                            {required:true,message:'age'}
                        ]
                    })(<Input placeholder="age"/>)
                }
            </Form.Item>
        </Form>
    )
}

FormTemp = forwardRef(FormTemp);
const WrapForm  = Form.create({name:'form2'})(FormTemp)
export default WrapForm