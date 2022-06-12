import React,{Component} from 'react';
import {BarChart} from 'react-d3-components';
import styles from './index.less';
import moment from 'moment';
class D3Chart extends Component {

  node = null;
  root = null;
  state = {
    height:400,
    width:400
  }
  componentDidMount() {
    window.addEventListener('resize', this.resize, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  handleRef = n => {
    console.log('width',n);
    this.node = n;

    if(this.node)
    {
      this.setState({
        width:this.node.parentNode.clientWidth
      })
    }
  }

  handleRoot = n => {
    console.log('width',n);
    this.root = n;
  } 

  resize = () =>
  {
    console.log('width',this.node);
    if(!this.node)
    {
      return;
    }

    console.log('width',this.node.parentNode.clientWidth);

    this.setState({
      width:this.node.parentNode.clientWidth
    })
  }

  getchartdata = () => {
    let {data} = this.props;
    let list = {};
    for(let item in data)
    {
      var date = moment(new Date(data[item].created_at)).format('YYYY-MM');
      if(list[date] == undefined)
      {
        list[date] = 0;
      }

      list[date] += Number(data[item].amount);
    }

    var values = [];

    for(let item in list)
    {
      values.push({x:item,y:list[item]});
    }
    

    return [{label:'transaction',values}];
  }


  render() {
    const {
        height,
        title,
        forceFit = true,
        color = 'rgba(24, 144, 255, 0.85)',
        padding,
        data
      } = this.props;
  
  
      const scale = {
        x: {
          type: 'cat',
        },
        y: {
          min: 0,
        },
      };
  
      const tooltip = [
        'x*y',
        (x, y) => ({
          name: x,
          value: y,
        }),
      ];
   
    // var data = [{
    //     label: 'somethingA',
    //     values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3},{x: 'SomethingE', y: 10}, {x: 'SomethingF', y: 4}, {x: 'SomethingG', y: 3}]
    // }];

    console.log('width',this.state.width);
    return (
      <div className={styles.chart} style={{ height }} ref={this.handleRoot}>
        <div ref={this.handleRef}>
          {title && <h4 style={{ marginBottom: 20 }}>{title}</h4>}
          <BarChart
            data={this.getchartdata()}
            width={this.state.width}
            height={this.state.height}
            xAxis={{innerTickSize: 6, label: "Month"}}
            yAxis={{label: "Amount"}}
            shapeColor={"#1890FF"}
            margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
        </div>
      </div>
    );
  }
}

export default D3Chart;
