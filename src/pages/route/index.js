/* eslint-disable */
import {Link} from 'umi'
import {Button} from 'antd'
import { Item } from 'rc-menu'
const links = [
    {name:'动态路由',to:`/route/${1}`},
]
export default () => (
    <div>
        <div>
            {
                links.map(link=>(
                    <Button type="link" key={link.name}><Link to={link.to}>{link.name}</Link></Button>
                ))
            }
        </div>
    </div>
)