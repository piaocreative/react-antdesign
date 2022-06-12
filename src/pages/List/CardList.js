import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Button, Icon, List, Modal } from 'antd';

import Ellipsis from '@/components/Ellipsis';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import styles from './CardList.less';

import PaypalExpressBtn from 'react-paypal-express-checkout';

import $ from 'jquery';

import DropIn from 'braintree-web-drop-in-react'

import * as api from '../../services/api';
export default @connect(({ list, loading }) => ({
  list,
  loading: loading.models.list,
}))
class CardList extends PureComponent {

  state = {
    braintree:false,
    accesstoken:null
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'list/fetch',
      payload: {
        count: 8,
      },
    });

    api.getaccesstoken().then(result=>{
      console.log('result',result.token);
      this.setState({
        accesstoken:result.token
      })
    })

    // fetch('/api/accesstoken').then(res=>{
    //   console.log('response',res);
    //   this.setState({
    //     accesstoken:res.body.token
    //   })
    // })
   console.log($('#paypal'));
    $('#paypal').click();
  }

  success = (payment) => {
    console.log('payment',payment);
    api.savetransaction({transactionid:payment.paymentID,amount:100,type:'paypal'}).then(res=>console.log(res))
  }

  payment = (name) => {
    if(name == 'Braintree')
    {
      this.setState({
        braintree:true
      })
    }
  }

  purchase_braintree = async() => {
      let data = await this.instance.requestPaymentMethod();
      console.log('data',data);
      api.transaction({nonce:data.nonce}).then(res=>{
        console.log(res)
      })
      this.setState({
        braintree:false
      })
  }

  render() {
    const {
      list: { list },
      loading,
    } = this.props;

    const content = (
      <div className={styles.pageHeaderContent}>
        <p>
          段落示意：蚂蚁金服务设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，
          提供跨越设计与开发的体验解决方案。
        </p>
        <div className={styles.contentLink}>
          <a>
            <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg" />{' '}
            快速开始
          </a>
          <a>
            <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg" />{' '}
            产品简介
          </a>
          <a>
            <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg" />{' '}
            产品文档
          </a>
        </div>
      </div>
    );

    const extraContent = (
      <div className={styles.extraImg}>
        <img
          alt="这是一个标题"
          src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png"
        />
      </div>
    );

    return (
      <PageHeaderWrapper title="卡片列表" content={content} extraContent={extraContent}>
        <div className={styles.cardList}>
          <List
            rowKey="id"
            loading={loading}
            grid={{ gutter: 24, lg: 3, md: 2, sm: 1, xs: 1 }}
            dataSource={['', ...list]}
            renderItem={item =>
              item ? (
                <List.Item key={item.id}>
                  <Card onClick={()=>this.payment(item.name)} style={{position:'relative'}} hoverable className={styles.card} actions={[<a>操作一</a>, <a>操作二</a>]}>
                    <Card.Meta
                      avatar={<img alt="" className={styles.cardAvatar} src={item.logo} />}
                      title={<a>{item.name}</a>}
                      description={
                        <Ellipsis className={styles.item} lines={3}>
                          {item.description}
                        </Ellipsis>
                      }
                    />
                    {
                      item.name == 'Paypal' && (
                        <PaypalExpressBtn 
                        env="sandbox"
                        id="paypal" 
                        client={{sandbox:'AbTIVgWom_WrYB5KaFM7ODY44IG8LV38wXiMe42VSWUYBTLVyGQGQOtf7RP9A-4Zf3hk0MqVGXr49DIU',production:""}} 
                        currency={'USD'} 
                        total={100}
                        onSuccess={this.success}
                        ></PaypalExpressBtn>
                      )
                    }
                    
                  </Card>
                </List.Item>
              ) : (
                <List.Item>
                  <Button type="dashed" className={styles.newButton}>
                    <Icon type="plus" /> 新增产品
                  </Button>
                </List.Item>
              )
            }
          />
        </div>
        <Modal visible={this.state.braintree} onOk={this.purchase_braintree} onCancel={()=>this.setState({braintree:false})}>
          {
            this.state.accesstoken && (
              <DropIn options={{authorization:this.state.accesstoken}} onInstance={(instance)=>this.instance = instance}></DropIn>
            )
          }
          
        </Modal>
      </PageHeaderWrapper>
    );
  }
}
