/* eslint-disable */
import React,{ useEffect,useState,useRef,useContext} from 'react'
import {connect} from 'dva'

const Index = (props) => {
    console.log(props,'props')

    useEffect(()=>{
        
    },[])

    return (
        <div>{props.match.params.id}</div>
    )
}

function mapStateToProps (state) {
    return {
        state
    }
}
export default connect(mapStateToProps)(Index)
// export default Index