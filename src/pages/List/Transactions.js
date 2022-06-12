import {PureComponent} from 'react';
import {connect} from 'dva';
import {Table,Card} from 'antd';
import moment from 'moment';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

export default @connect(({list,loading})=>({
    transaction:list.transaction,
    loading:loading.models.list
}))

class Transaction extends PureComponent
{
    columns = [
        {
            title:'UserName',
            dataIndex:'username'
        },
        {
            title:'TransactionID',
            dataIndex:'transactionid'
        },{
            title:'Amount',
            dataIndex:'amount',
            render:val=><span>$ {val}</span>
        },{
            title:'Transaction Date', 
            dataIndex:'created_at',
            render:val=><span>{moment(val).format('YYYY-MM-DD hh:mm:ss')}</span>
        }]
    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        const {dispatch} = this.props;
        dispatch({
            type:'list/transaction',
            payload:{count:8}
        })
    }

    render()
    {
        let {transaction} = this.props;
        return (
            <PageHeaderWrapper title="Transactions">
                <Card bordered={true}>
                    <Table 
                    loading={this.props.loading} 
                    rowKey='key'
                    dataSource={transaction.list}
                    columns={this.columns}
                    pagination={transaction.pageprops}
                    ></Table>
                </Card>
            </PageHeaderWrapper>
        );
    }
}
