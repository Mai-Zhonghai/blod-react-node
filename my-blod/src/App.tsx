import * as React from 'react';
import './App.scss';
import { withRouter } from 'react-router-dom';
import { Button, Menu, Icon, } from 'antd';
const SubMenu = Menu.SubMenu;
export interface ITodoItemProps {
  'collapsed' ?: any
} 

class App extends React.Component<any , ITodoItemProps> {
  constructor (props: any) {
    super(props);
    this.state = {
      collapsed: false,
    }
    this.toggleCollapsed = this.toggleCollapsed.bind(this);
    this.click = this.click.bind(this);
  }

  private toggleCollapsed () {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  private click (param: any) {
    this.props.history.push(param.key);
  }

  public render() {
    return (
      <div className={this.state.collapsed ? "slidebar-container hideSidebar" : "slidebar-container"}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
          onClick={this.click}
        >
          <Menu.Item key="/home">
            <Icon type="home" />
            <span>首页</span>
          </Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="setting" /><span>权限管理</span></span>}>
            <Menu.Item key="/userList">管理员列表</Menu.Item>
            <Menu.Item key="/addUser">添加管理员</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="folder" /><span>文章</span></span>}>
            <Menu.Item key="/articleList">文章列表</Menu.Item>
            <Menu.Item key="/addArticle">添加文章</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default withRouter(App);
