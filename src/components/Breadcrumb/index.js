/* eslint-disable */
import {useEffect} from 'react'
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import Link from 'umi/link';
import MenuList from '@/utils/menu.js'
import {Icon,Button,Typography,message} from 'antd'

const flatArr = (arr=[]) => {
    const originArr = JSON.stringify(arr)
    const _arr = [] 

    function fArr (originArr) {
        originArr.map(item=>{
            const {children} = item
            if(Array.isArray(children)) {
                fArr(children)
                delete item.children
            }
            _arr.push(item)
        })
    }
    fArr(JSON.parse(originArr))
    return _arr;
}

export default withBreadcrumbs ([])((props)=>{
    const {breadcrumbs,history,route} = props
    const routes = flatArr(MenuList)
    const {length:len} = breadcrumbs;
    const curRoute = breadcrumbs[len-1]||{}
    const findRoute = routes.find(r=> r.to === (route?route:curRoute.key))
    const title = findRoute && findRoute.title
    
    return (
        <div>
            {
                len>2 && 
                <Link to={breadcrumbs[route?len-3:len-2].key}>
                    <Button size="small" >
                        <Icon type="left" />
                        返回
                    </Button>
                </Link>
            }
            <Typography.Title level={2}>
                {title}
            </Typography.Title>
        </div>
    )
})
