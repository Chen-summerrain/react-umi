/* eslint-disable */
import React,{useState,useEffect} from 'react'
import { Layout, Menu, Icon } from 'antd';
import Breadcrumb from '@/components/Breadcrumb'
import PageLayout from '@/components/Layout'
import styles from './index.css';
import Link from 'umi/link'
import {connect} from 'dva'
import MenuList from '@/utils/menu.js'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Index = (props) => {
  const {dispatch,children,route} = props
  const [openKeys,setOpenKeys] = useState(['0'])
  
  useEffect(()=>{
    
  },[route])

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    latestOpenKey ? setOpenKeys([latestOpenKey]):setOpenKeys([])
  }

  return (
    <Layout>
      <Header style={{color:'#fff'}}>React</Header>
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            style={{ height: '100%', borderRight: 0 }}
          >
            {
              MenuList.length && MenuList.map((menu,index)=>(
                menu.children ? <SubMenu 
                  key={index}
                  title={
                    <span>
                      <Icon type={menu.icon||'user'} />
                      {menu.title}
                    </span>
                  }> 
                  {
                    menu.children.map((item,_index)=>(
                      <Menu.Item key={_index}>
                        {item.icon && <Icon type={item.icon} />}
                        <Link to={item.to} />
                        {item.title}
                      </Menu.Item>
                    ))
                  }
                </SubMenu> :
                <Menu.Item key={index}>
                  {menu.icon && <Icon type={menu.icon} />}
                  <Link to={menu.to} />
                  {menu.title}
                </Menu.Item>
              ))
            }
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb route={route}></Breadcrumb>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 'auto',
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

function mapStateToProps (state) {
  const {route} = state.global
  return {
    route
  }
}
export default connect(mapStateToProps)(Index)
