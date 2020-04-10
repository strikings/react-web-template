import React from 'react'

export default class Movie extends React.Component {
    constructor() {
        super()

        {/* 组件私有数据 */ }
        this.state = {

        }
    }

    render() {
        return <div>Movie内容---{this.props.match.type}</div>
    }

}
