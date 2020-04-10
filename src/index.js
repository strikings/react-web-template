import React from 'react'
import ReactDOM from 'react-dom'

{/*导入 App 根组件*/}
import App from '@/components/App'

import fetchJsonp from 'fetch-jsonp'

{/* 把 fetch-jsonp 挂载到每个组件上*/}
React.Component.prototype.$http = fetchJsonp
React.Component.prototype.baseURL = 'https://api.douban.com'


ReactDOM.render(
 <App></App>
, document.getElementById('app'))