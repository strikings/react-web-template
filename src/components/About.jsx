import React from 'react'

import { Link, Route, Redirect } from 'react-router-dom'

{/*导入 子路由组件*/ }
import Tab1 from '@/components/tabs/Tab1'
import Tab2 from '@/components/tabs/Tab2'

export default class About extends React.Component {
    constructor() {
        super()

        {/* 组件私有数据 */ }
        this.state = {

        }
    }

    render() {
        return <div>About内容
  	<button onClick={() => this.goBack()}>返回上一级页面</button>
            <Link to="/about/tab1">Tab1</Link>&nbsp;&nbsp;
	<Link to="/about/tab2">Tab2</Link>

            {/* 应该对应放置两个 Route 占位符，分别用来显示 匹配到的 路由组件 */}
            {/* 重定向的路由规则 */}
            <Route exact path="/about" render={() => <Redirect to="/about/tab1" />}></Route>
            <Route path="/about/tab1" component={Tab1}></Route>
            <Route path="/about/tab2" component={Tab2}></Route>

        </div>
    }

    goBack() {
        this.props.history.go(-1)
    }

}
