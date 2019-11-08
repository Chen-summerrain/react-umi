/* eslint-disable */
import {useEffect} from 'react'
import withRouter from 'umi/withRouter';

const Page = props => {
    const {context} = props
    // props.children.context = context
    console.log(props,'page')
    // useEffect(()=>{
    //     window.scrollTo(0, 0);
    // })
    return props.children
}

export default withRouter(Page)