import React from 'react';
import { fromJS } from 'immutable';
import ImmutableComponent from './componets/common';
import logo from './logo.svg';
import Header from './componets/Header'
import './App.css';


class App extends ImmutableComponent{
  state = {
    title: fromJS('123')
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        title: fromJS('89890')
      })
    }, 3000)
  }
  render() {
    console.log('app render');
    return (
      <div>
        123456
        <Header title={this.state.title}/>
      </div>
    )
  }
}


export default App;

