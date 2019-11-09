/* eslint-disable */
import React,{ useEffect,useState,useRef,useContext} from 'react'
import {connect} from 'dva'

const Index = (props) => {
    const {match,dispatch,route} = props

    useEffect(()=>{
        dispatch({type:'global/setRoute',payload:{route:route.path}})
        return ()=>{
            dispatch({type:'global/setRoute',payload:{route:null}})
        }
    },[])

    return (
        <div>{match.params.id}</div>
    )
}

function mapStateToProps (state) {

    return {
        state
    }
}
export default connect(mapStateToProps)(Index)
// export default Index