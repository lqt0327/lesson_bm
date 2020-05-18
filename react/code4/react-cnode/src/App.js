import React from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tabs: [
        {content: '全部', param: 'all'},
        {content: '招聘',param: 'job'},
        {content: '精华', param: 'good'},
        {content: '分享', param: 'share'},
        {content: '问答', param: 'ask'},
    ],
      tab: 'all',
      isLoading: true,
      lists: []   // 文章列表
    }
  }
  handleGetPost = () => {
    const { tab } = this.state;
    axios({
      url:'https://cnodejs.org/api/v1/topics',
      params: {
        tab,
        page: 1,
        limit: 40
      }
    }).then(res => {
      // console.log(res.data)
      this.setState({
        lists: res.data.data,
        isLoading: false
      })
    }).catch(err => {
        this.setState({
          isLoading: false
        })
      })
  }
  // 生命周期
  componentDidMount() {
    this.handleGetPost();
  }
  handleTabChange = (event) => {
    // console.log(event.target);
    const tab = event.target.getAttribute('data-tab');
    this.setState({
      tab,
      isLoading: true
    }, () => {
      // setState 异步
      this.handleGetPost();
    })
  }
  render() {
    const { lists, tabs, tab, isLoading } = this.state;
    return (
      <div>
        { isLoading && '正在加载中...' }
        { lists.length === 0 && '暂无文章请重试' }
        {
          tabs.map((tabObj, i) => {
            return (
              <div key={i} data-tab={tabObj.param} 
              className={tabObj.param === tab ? "high-light" : ''} 
              onClick={this.handleTabChange}
              >
                { tabObj.content }
              </div>
            )
          })
        }
        {
          lists.map((list, i) => {
            return (
              <div key={i}>
                { list.title }
              </div>
            )
          })
        }
        <h1>hello,world</h1>
      </div>
    )
  }
}

export default App;
