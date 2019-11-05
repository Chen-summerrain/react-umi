import {useEffect} from 'react'
import withRouter from 'umi/withRouter';

const Page = props => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    })
    return props.children
}

export default withRouter(Page)