/* eslint-disable */
import {useImperativeHandle,forwardRef,useRef,useEffect} from 'react'
import {Button,Card,Form} from 'antd'
import FormTemp1 from './components/form1'
import FormTemp2 from './components/form2'

function FancyInput(props, ref) {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        },
        input: inputRef.current,
        on:1,
        off:2
    }));
    return <Form layout="inline">
        <Form.Item label="input">
            <input ref={inputRef} />
        </Form.Item>
    </Form>;
}

FancyInput = forwardRef(FancyInput);

export default function Index () {
    const refSimple = useRef(null)
    const refForm1 = useRef(null)
    const refForm2 = useRef(null)

    useEffect(()=>{
        console.log(refSimple,'ref')
    },[refSimple])

    return (
        <div>
            <div>useImperativeHandle</div>
            <Button type="primary" onClick={()=>{
                const {current} = refSimple
                console.log(current,'simple')
            }}>simple ref</Button>

            <Button type="primary" onClick={()=>{
                const {validateFieldsAndScroll} = refForm1.current
                validateFieldsAndScroll((err,vals)=>{
                    console.log(err,vals,'ref1')
                })
            }}>form ref1</Button>

            <Button type="primary" onClick={()=>{
                const {validateFieldsAndScroll} = refForm2.current
                validateFieldsAndScroll((err,vals)=>{
                    console.log(err,vals,'ref2')
                })
            }}>form ref2</Button>

            <Card title="simple ref">
                <FancyInput ref={refSimple}/>
            </Card>
            <Card title="form1">
                <FormTemp1 ref={refForm1}/>
            </Card>
            <Card title="form2">
                <FormTemp2 ref={refForm2}/>
            </Card>
            
            
        </div>
    )
}