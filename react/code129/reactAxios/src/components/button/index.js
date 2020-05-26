import React,{Component} from 'react';
import "./style.css";
export default class InputComponent extends Component{
    render() {
        return (
            <React.Fragment>
                <button type={this.props.type} className={"my-button "+this.props.className} style={this.props.style} onClick={this.props.onClick}>{this.props.children}</button>
            </React.Fragment>
        );
    }
}
InputComponent.defaultProps={
    type:"button"
};
