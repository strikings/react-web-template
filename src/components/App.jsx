import React from 'react'

import { Layout, Menu, Breadcrumb } from 'antd'

const { Header, Content, Footer } = Layout

// 导入组件需要的样式表
import cssObj from '@/css/app.scss'

{/* 导入需要的路由组件*/ }
import { HashRouter, Route, Link, Redirect } from 'react-router-dom'

{/* 导入 Home、Movie、About 组件 */ }
import Home from '@/components/home/homeContainer'
import Movie from '@/components/movie/movieContainer'
import About from '@/components/about/aboutContainer'

export default class App extends React.Component {
  constructor() {
    super()
    {/* 组件私有数据 */ }
    this.state = {

    }
  }

  render() {
    return <HashRouter>
      <Layout className="layout" style={{ height: '100%' }}>
        <Header>
          <div className={cssObj.logo} />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[location.hash.split('/')[1] || 'home']}>
            <Menu.Item key="home">
              <Link to="/home">首页</Link>
            </Menu.Item>
            <Menu.Item key="movie">
              <Link to="/movie/top250">电影</Link>
            </Menu.Item>
            <Menu.Item key="about">
              <Link to="/about">关于</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0', backgroundColor: 'white' }}>
          {/* 路由规则 */}
          <Route path="/home" component={Home}></Route>
          <Route path="/movie/:type" component={Movie}></Route>
          <Route path="/about" component={About}></Route>
          {/* 路由重定向 */}
          <Route exact path="/" render={() => <Redirect to="/home" />}></Route>
        </Content>
        <Footer style={{ textAlign: 'center' }}>豆瓣电影 ©{new Date().getFullYear()} Created by Ant UED</Footer>
      </Layout>
    </HashRouter>
  }
}