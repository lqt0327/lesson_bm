import React from 'react';
import Header from './Header';
import Search from './Search';
import { Link } from 'react-router-dom';

class Main extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        const searchTerm = this.props.match.params.searchTerm || undefined;
        console.log(searchTerm, '+++++++++');
        this.loadBeeers(searchTerm);
    }
    loadBeeers() {
        
    }
    render() {
        return (
            <div className="wrapper">
                <Header siteName="Beer me!" />
                <Search />
                {/* <Link to="about">About</Link> */}
            </div>
        )
    }
}

export default Main;