import {useEffect} from 'react'
import withRouter from 'umi/withRouter';

const Page = props => {
    useEffect(()=>{
        console.log(props,'props')
        window.scrollTo(0, 0);
    })
    return props.children
}

export default withRouter(Page)