// 属性代理
import React from 'react';
export default function Hoc(WithComponent, title) {
    return class HocComponent extends React.Component {
        render() {
            return (
                <React.Fragment>
                    <div>{title}</div>
                    <WithComponent title="我是属性代理高阶组件"></WithComponent>
                </React.Fragment>
            )
        }
    }
}