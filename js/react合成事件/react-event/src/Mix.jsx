import React from 'react'
export default class Mix extends React.Component {
    state = {
        visiable: false
    }
    handleToogle = (e) => {
        this.setState({
            visiable: !this.state.visiable
        })

        e.stopPropagation();
        // 所有react的事件 都被放到了 document 上面
        // 所有的事件统一采用的事件监听 都是一个
        // document.addEventListener()
        // 事件监听器 内部维护了 元素 和 事件处理函数 的关系
        // e.stopPropagation(); 也是react自己实现的 阻止冒泡
        // 仅限于 都用 react 的事件 才生效
        // 合成事件：就是react的一套事件系统
    }
    componentDidMount() {
        document.body.addEventListener('click', ()=>{
            this.setState({
                visiable: false
            })
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleToogle}> toogle </button>
                <div style={{display: this.state.visiable ? 'block' : 'none'}}>
                    内容
                </div>
            </div>
        )
    }
}