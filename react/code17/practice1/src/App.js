import React from 'react';
import './App.css';
import axios from 'axios';
import { Menu, Table, Tag, Space, Button } from 'antd';
import { List, Avatar, Skeleton, Divider } from 'antd';
import './mock/data';
import { Tabs, Radio } from 'antd';

const { TabPane } = Tabs;
const { Column, ColumnGroup } = Table;
const { SubMenu } = Menu;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: "all",
      data: []
    }
    this.pass = false;
  }

  componentDidMount() {
    this.getData(this.state.msg);
  }

  getData(url){
    url = url ? url : 'all'
    axios.get('/api/msg/'+url).then(res=>{
      console.log(res.data);
      this.setState({
        data:res.data.data
      })
    })
  }

  handleClick = e => {
    this.setState({
      msg:e.key
    })
    this.getData(e.key)
  };

  testClick = e => {
    console.log(e);
  };

  render() {
    return (
      <div style={{padding:'0 50px'}}>
        <h2 style={{fontWeight:'bold'}}>我的课程</h2>
        <Menu onClick={this.handleClick} mode="horizontal">
          <Menu.Item key="all">
            全部（10）
        </Menu.Item>
          <Menu.Item key="nostudy">
            未学完
        </Menu.Item>
          <Menu.Item key="study">
            已学完
        </Menu.Item>
        </Menu>
        <Tabs onChange={this.testClick} defaultActiveKey="1" type="card" size="small">
          <TabPane tab="所有形式" key="1">
          所有形式
          </TabPane>
          <TabPane tab="专栏" key="2">
          专栏
          </TabPane>
          <TabPane tab="视频课" key="3">
          视频课
          </TabPane>
          <TabPane tab="微课" key="4">
          微课
          </TabPane>
          <TabPane tab="每日一课" key="5">
          每日一课
          </TabPane>
          <TabPane tab="其它" key="6">
          其它
          </TabPane>
        </Tabs>
        <div>
          {
            // this.state.data!=null?
            // this.state.data.map((item1, index)=>{
            //   {
            //     // console.log(item1);
            //     return (
                  <List
                    itemLayout="horizontal"
                    dataSource={this.state.data}
                    renderItem={item => (
                      <List.Item
                        actions={[<Button type="primary">开始学习</Button>]}
                      >
                        <Skeleton avatar title={false} loading={false} active>
                          <List.Item.Meta
                            avatar={
                              <Avatar src={item.image} />
                            }
                            title={<a href="https://ant.design">{item.title}</a>}
                            description={<>
                              共 {item.all} 讲
                    <Divider style={{ color: '#efefef' }} type="vertical" />
                    已学 {item.study} 讲
                    <Divider type="vertical" />
                    学完 {((item.study*100)/item.all).toFixed(2)}%
                  </>}
                          />
                          <div>专栏</div>
                        </Skeleton>
                      </List.Item>
                    )}
                  />
          //       )
          //     }
          //   }) : ''
          }
        </div>

      </div>
    )
  }
}

export default App;
