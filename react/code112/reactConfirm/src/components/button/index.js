import React,{Component} from 'react';
import './style.css';

export default class ButtonComponent extends Component{
    render() {
        return (
            <React.Fragment>
                <button type={this.props.type} className={"my-button "+this.props.className} style={this.props.style} onClick={this.props.onClick}>{this.props.children}</button>
            </React.Fragment>
        );
    }
}
ButtonComponent.defaultProps={
    type:"button"
};