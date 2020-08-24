import React, { Component } from 'react'

const sum = 2 ** 2;

function observer() {}

@observer
class App extends Component {
    render() {
        return (
            <div>
            <img src="baidu.com" alt="baidu" className="baidu" />
          </div>
        // React.createElement("div")
        )
    }
}