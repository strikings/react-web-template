import React from 'react'

import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
// 导入路由
import { Route, Link } from 'react-router-dom'

import MovieList from '@/components/movie/movieList'

export default class MovieContainer extends React.Component {
    constructor() {
        super()

        {/* 组件私有数据 */ }
        this.state = {

        }
    }

    render() {
        return <Layout className="site-layout-background" style={{ padding: '0', height: '100%' }}>
            <Sider className="site-layout-background" width={200}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={[location.hash.split('/')[2] || 'in_theaters']}
                    style={{ height: '100%' }}
                >
                    <Menu.Item key="in_theaters">
                        <Link to="/movie/in_theaters/1" replace>正在热映</Link>
                    </Menu.Item>
                    <Menu.Item key="coming_soon">
                        <Link to="/movie/coming_soon/1" replace>即将上映</Link>
                    </Menu.Item>
                    <Menu.Item key="top250">
                        <Link to="/movie/top250/1" replace>top250</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>

                <Route path="/movie/:type/:page" component={MovieList}></Route>

            </Content>
        </Layout>
    }

}
