/* eslint-disable */
import {Link} from 'umi'
import {Button} from 'antd'
import { Item } from 'rc-menu'
const links = [
    {name:'useMemo',to:'/hook/useMemo'},
    {name:'selfHook',to:'/hook/selfHook'},
    {name:'useCallback',to:'/hook/useCallback'},
    {name:'useImperativeHandle',to:'/hook/useImperativeHandle'},
]
export default () => (
    <div>
        Hooks
        <div>
            {
                links.map(link=>(
                    <Button type="link" key={link.name}><Link to={link.to}>{link.name}</Link></Button>
                ))
            }
        </div>
    </div>
)