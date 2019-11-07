/* eslint-disable */
import { useRef } from 'react'
const  Index = () => {
    const Uref = useRef()
    
    return  (
        <div ref={Uref}>
            <span>user</span>
        </div>
    )
}

export default Index