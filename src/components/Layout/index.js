/* eslint-disable */
import {useEffect} from 'react'
import {connect} from 'dva'
import withRouter from 'umi/withRouter';

const Page = props => {
    const {context} = props
    // props.children.context = context
    console.log(props,'page----')
    // useEffect(()=>{
    //     window.scrollTo(0, 0);
    // })
    return <div>{props.children}</div>
}

export default withRouter(Page)