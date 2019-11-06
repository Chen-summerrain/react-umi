/* eslint-disable */
import { useRef } from 'react'
const  Index = () => {
    const Uref = useRef()
    const handleUser = () => {
        console.log('user')
    }
    return  (
        <div ref={Uref}>
            <span>user</span>
        </div>
    )
}

export default Index