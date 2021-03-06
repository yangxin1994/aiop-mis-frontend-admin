import React from 'react';
import { Table } from 'antd';
import styles from './style.less';

const columns = [{
  title: '参数',
  dataIndex: 'param',
  render: text => <span className={styles.blue}>{text}</span>,
}, {
  title: '值',
  dataIndex: 'value',
}];

export default class RequestBasicTable extends React.Component {
  render() {
    return (
      <Table columns={columns} dataSource={this.props.data} bordered pagination={false} size="middle" className={styles.infoTable} rowKey={record => record.param} />
    );
  }
}
