import React, { Component } from "react";
import Chart from "react-apexcharts";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from "@mui/material";

class Barchart extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        data: [44, 55, 41, 64, 22, 43, 21]
      }, {
        data: [53, 32, 33, 52, 13, 44, 32]
      }],
      options: {
        chart: {
          type: 'bar',
          
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: 'top',
            },
          }
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: '12px',
            colors: ['#fff']
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['#fff']
        },
        tooltip: {
          shared: true,
          intersect: false
        },
        xaxis: {
          categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
        },
      },
    
    
    };
  }

  render() {
    return (
      <div className="app">
      
          
           
          
          <Card>
      <CardContent>
      <Typography variant="h6" component="div" gutterBottom>
       Charts
      </Typography>
      <div className="mixed-chart">
      <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"              
            />
            </div>
      </CardContent>      
    </Card>
       
      </div>
    );
  }
}

export default Barchart;


