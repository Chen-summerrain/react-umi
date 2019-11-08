/* eslint-disable */
import {useImperativeHandle,forwardRef,useRef,useEffect} from 'react'
import {Button,Card,Form} from 'antd'
import SimpleTemp1 from './components/simpleTemp1'
import SimpleTemp2 from './components/simpleTemp2'
import FormTemp1 from './components/form1'
import FormTemp2 from './components/form2'

function Index ({form}) {
    const refSimple1 = useRef(null)
    const refSimple2 = useRef(null)
    const refForm1 = useRef(null)
    const refForm2 = useRef(null)

    useEffect(()=>{
        console.log('ref')
    },[])

    return (
        <div>
            <div>useImperativeHandle</div>
            <Button type="primary" onClick={()=>{
                const {dom,val} = refSimple1.current
                console.log(val(),'val')
                console.log(refSimple1.current,'simple1')
            }}>simple ref1</Button>

            <Button type="primary" onClick={()=>{
                const {current} = refSimple2
                console.log(current,'simple')
            }}>simple ref2</Button>

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

            <Card title="simple ref1">
                <SimpleTemp1 ref={refSimple1} form={form}/>
            </Card>
            <Card title="simple ref2">
                <SimpleTemp2 ref={refSimple2}/>
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

const WrapIndex  = Form.create({name:'form'})(Index)

export default WrapIndex