import React from "react";
import Chart from 'react-apexcharts';



class PieChart extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          options: {labels: ['1-3', '4-6', '7-10'],},
          series: [3,5,9],
        };
      }
   
    render() {
      return (
        

      <Chart options={this.state.options} series={this.state.series} type="donut" />


      );
    }
  }

  export default PieChart;

