import React from 'react'

import { Spin, Alert } from 'antd';

export default class MovieList extends React.Component {
    constructor(props) {
        super()

        {/* 组件私有数据 */ }
        this.state = {
            myType: props.match.params.type,    // 电影的类型
            nowPage: props.match.params.page,    // 当前的页码值
            isLoading: true // 是否正在加载数据，默认加载中
        }
    }

    render() {
        return <div>
            {
                this.state.isLoading ? <div style={{ textAlign: 'center' }}>
                    <Spin tip="Loading...">
                        <Alert
                            message="Alert message title"
                            description="Further details about the context of this alert."
                            type="info"
                        />
                    </Spin>
            </div>:<h3>电影列表--{this.state.myType}--{this.state.nowPage}</h3>
            }
        </div>
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log(this.props)
        this.setState({
            myType: nextProps.match.params.type,
            nowPage: nextProps.match.params.page,
            isLoading: true
        }, function () {
            setTimeout(() => {
                this.getList()
    
            }, 1000);
        })
    }
    // 组件将要挂载
    UNSAFE_componentWillMount() {
        setTimeout(() => {
            this.getList()

        }, 1000);

    }

    async getList() {
        // const res = await this.$http(this.baseURL + '/v2/movie/'+this.state.myType+'?start=0&count=1')
        // const data = await res.json()
        // console.log(data)

        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1000);
    }
}
