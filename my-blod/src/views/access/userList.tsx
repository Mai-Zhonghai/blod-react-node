import * as React from 'react';
import { Table, Pagination, Input  } from 'antd';
const Search = Input.Search;

export default class Access extends React.Component {
    private dataSource = [{
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
      }, {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号'
    }];
      
    private columns = [{
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      }, {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    }];

    constructor (props: any) {
        super(props);
        this.onShowSizeChange = this.onShowSizeChange.bind(this);
        this.search = this.search.bind(this);
    }
    
    private onShowSizeChange (current: any, pageSize: any) {
        console.log(current, pageSize);
    }

    private search (val: any) {
        console.log(val);
    }

    public render () {
        return <div style={{flex:1}}>
                  <div className="search" style={{width: 300, margin: 20}}>
                    <Search placeholder="请输入内容" onSearch={this.search} enterButton={true}/>
                  </div>
                  <div className="container" style={{margin: 20, textAlign: 'right'}}>
                    <Table dataSource={this.dataSource} columns={this.columns} bordered={true} pagination={false} />
                    <Pagination showSizeChanger={true} onShowSizeChange={this.onShowSizeChange} total={50} 
                    style={{marginTop: 20}}/>
                  </div>   
               </div> 
    }
}