import React from 'react'

import { DatePicker } from 'antd';

export default class App extends React.Component {
  constructor() {
    super()
    {/* 组件私有数据 */ }
    this.state = {

    }
  }

  render() {
    return<div>
      <h3>这是App根组件</h3>
      <DatePicker />
    </div>
  }

}