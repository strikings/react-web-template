import React from 'react'

export default class Home extends React.Component {
    constructor() {
        super()

        {/* 组件私有数据 */ }
        this.state = {

        }
    }

    render() {
        return <div>Home内容
  	<button onClick={() => this.goAbout()}>跳转到about页面</button>
        </div>
    }

    goAbout(){
        this.props.history.push('/about')
    }
}
