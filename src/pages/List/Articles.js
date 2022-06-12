import React, { Component, Fragment } from 'react';
import moment from 'moment';
import { connect } from 'dva';
import { Form, Card, Select, List, Tag, Icon, Avatar, Row, Col, Button } from 'antd';

import TagSelect from '@/components/TagSelect';
import StandardFormRow from '@/components/StandardFormRow';
import styles from './Articles.less';

const { Option } = Select;
const FormItem = Form.Item;

const pageSize = 5;

export default
@Form.create()
@connect(({ list, loading }) => ({
  list,
  loading: loading.models.list,
}))
class SearchList extends Component {
  componentDidMount() {
    this.fetchMore();
  }

  setOwner = () => {
    const { form } = this.props;
    form.setFieldsValue({
      owner: ['wzj'],
    });
  };

  fetchMore = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'list/appendFetch',
      payload: {
        count: pageSize,
      },
    });
  };

  render() {
    const {
      form,
      list: { list },
      loading,
    } = this.props;
    const { getFieldDecorator } = form;

    const owners = [
      {
        id: 'wzj',
        name: '我自己',
      },
      {
        id: 'wjh',
        name: '吴家豪',
      },
      {
        id: 'zxx',
        name: '周星星',
      },
      {
        id: 'zly',
        name: '赵丽颖',
      },
      {
        id: 'ym',
        name: '姚明',
      },
    ];

    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    );

    const ListContent = ({ data: { content, updatedAt, avatar, owner, href } }) => (
      <div className={styles.listContent}>
        <div className={styles.description}>{content}</div>
        <div className={styles.extra}>
          <Avatar src={avatar} size="small" />
          <a href={href}>{owner}</a> 发布在
          <a href={href}>{href}</a>
          <em>{moment(updatedAt).format('YYYY-MM-DD HH:mm')}</em>
        </div>
      </div>
    );

    const formItemLayout = {
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 24 },
        md: { span: 12 },
      },
    };

    const loadMore =
      list.length > 0 ? (
        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <Button onClick={this.fetchMore} style={{ paddingLeft: 48, paddingRight: 48 }}>
            {loading ? (
              <span>
                <Icon type="loading" /> 加载中...
              </span>
            ) : (
              '加载更多'
            )}
          </Button>
        </div>
      ) : null;

    return (
      <Fragment>
        <Card bordered={false}>
        <div style={{display:'flex'}}>
          <iframe
          width="1200"
          height="1200"
          seamless
          frameBorder="0"
          scrolling="no"
          src="http://18.208.185.17:8088/superset/explore/?form_data=%7B%22queryFields%22%3A%7B%22groupby%22%3A%22groupby%22%2C%22metric%22%3A%22metrics%22%7D%2C%22datasource%22%3A%221__table%22%2C%22viz_type%22%3A%22directed_force%22%2C%22slice_id%22%3A345%2C%22url_params%22%3A%7B%7D%2C%22time_range_endpoints%22%3A%5B%22unknown%22%2C%22inclusive%22%5D%2C%22time_range%22%3A%22Last+week%22%2C%22groupby%22%3A%5B%22source%22%2C%22target%22%5D%2C%22metric%22%3A%22sum__value%22%2C%22adhoc_filters%22%3A%5B%5D%2C%22row_limit%22%3A%225000%22%2C%22link_length%22%3A%22200%22%2C%22charge%22%3A%22-500%22%7D&menudisable=true"
          style={{margin:'auto'}}
          onLoad={(e)=>{
            console.log(e.currentTarget.contentDocument);
          }}
        >
        </iframe>
        </div>
        </Card> 
        </Fragment>
    );
  }
}
