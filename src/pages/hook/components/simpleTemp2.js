/* eslint-disable */
import { Fragment,useRef, useState, useEffect,forwardRef,useImperativeHandle } from 'react'
import {Form,Input} from 'antd'

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
            
    return <input ref={inputRef} />
}

export default forwardRef(FancyInput);