/* eslint-disable */
import {useImperativeHandle,forwardRef,useState,useRef,useEffect} from 'react'
import {Button,Card,Form} from 'antd'

function Child (props,ref) {
    const [val,setVal] = useState(0)
    useImperativeHandle(ref,()=>{
        return {
            changeVal(v) {
                setVal(v+val)
            }
        }
    })

    return (
        <div>Child: {val}</div>
    )
}
Child = forwardRef(Child)

export default function Index () {
    const childRef = useRef(null)
    useEffect(()=>{
        console.log('ref')
    },[])

    return (
        <div>
            <div>useImperativeHandle1</div>
            <Child ref={childRef}/>
            <Button type="primary" onClick={()=>{
                const {changeVal} = childRef.current
                changeVal(3)
                console.log(childRef.current,'simple1')
            }}>parent click</Button>

        </div>
    )
}