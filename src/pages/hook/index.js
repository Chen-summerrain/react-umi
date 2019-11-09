/* eslint-disable */
import {Link} from 'umi'
import {Button} from 'antd'
import { Item } from 'rc-menu'
import Breadcrumb from '@/components/Breadcrumb'
const links = [
    {name:'useMemo',to:'/hook/useMemo'},
    {name:'selfHook',to:'/hook/selfHook'},
    {name:'useCallback',to:'/hook/useCallback'},
    {name:'useImperativeHandle',to:'/hook/useImperativeHandle?id=1'},
    {name:'useImperativeHandle1',to:'/hook/useImperativeHandle1'},
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