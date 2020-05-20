import React from 'react';
import {localParam} from '../../assets/js/utils';

class NewsDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state={};
    }
    componentDidMount() {
        console.log(this.props);
        console.log("id:"+localParam(this.props.location.search).search.id,"title:"+decodeURIComponent(localParam(this.props.location.search).search.title));
    }
    render() {
        return (
            <div>
                <button type="button" onClick={this.props.history.goBack.bind(this)}>返回</button>
                ID:{localParam(this.props.location.search).search.id},标题:{decodeURIComponent(localParam(this.props.location.search).search.title)}
            </div>
        )
    }
}

export default NewsDetails;