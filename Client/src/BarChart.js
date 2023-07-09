import React from "react";
import Chart from "react-apexcharts";

class BarChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          data: [5, 10, 9, 6, 3, 6, 4, 9,3,7,5]
        }],
        options: {
          chart: {
            height: 350,
            type: 'bar',
            events: {
              click: function(chart, w, e) {
                // console.log(chart, w, e)
              }
            }
          },
          // colors: colors,
          plotOptions: {
            bar: {
              columnWidth: '45%',
              distributed: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          legend: {
            show: true
          },
          xaxis: {
            categories: ["Fraction", "Addition","Substraction", "2 Words", "Vocab", "T&M Game", "Mumbai MT", "Lemon", "Stamping","Family M&ID","Musium"],
            llabels: {
              rotate: -45,
              rotateAlways: true,
              trim: false,
            hideOverlappingLabels: false,
            },
          }
        },
      
      
      };
    }

  

    render() {
      return (
        

<Chart options={this.state.options} series={this.state.series} type="bar" height={350} />


      );
    }
  }

  export default BarChart;