/* eslint-disable */
import { Fragment,useRef, useState, useEffect,forwardRef,useImperativeHandle } from 'react'
import {Form,Input} from 'antd'

function FormTemp (props,ref) {
    const [data,setData] = useState({})
    let { getFieldDecorator, resetFields, validateFieldsAndScroll } = props.form
    const domRef = useRef(null)
    useEffect(()=>{
        console.log('[],domRef')
    },[domRef])

    useImperativeHandle(ref, () => {
        return {
            dom: domRef.current,
            val: handleSubmit
        }
    })

    const handleSubmit = () => {
        let obj={}
        validateFieldsAndScroll((err,val)=>{
            obj={err,val}
        })
        return obj
    }
    return(
        <Fragment>
            <div ref={domRef}>simple ref dom</div>
            <Form layout="inline">
                <Form.Item label="simpleDom">
                    {
                        getFieldDecorator('simpleDom',{
                            initialValue:data.simpleDom,
                            rules:[
                                {required:true,message:'simpleDom'}
                            ]
                        })(<Input placeholder="simpleDom"/>)
                    }
                </Form.Item>
            </Form>
        </Fragment>
    )
}

export default forwardRef(FormTemp);