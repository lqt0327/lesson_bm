import React, { Component } from "react";

export default function asyncComponent(importComponent) {
    class AsyncComponent extends Component {
        constructor(props) {
            super(props);

            this.state = {
                component: null
            };
        }
        async componentDidMount() {
            const {default:compoent} = await importComponent();
            this.setState({
                component: compoent
            });
        }
        render() {
            const C = this.state.component;
            return C ? <C {...this.props} /> : null;
        }
    }
    return AsyncComponent;
}
