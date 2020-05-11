import React,{Component} from 'react';
export default class InputComponent extends Component{
    render() {
        return (
            <div>
                <input type="text" onChange={this.props.onChange} />
            </div>
        );
    }
}
