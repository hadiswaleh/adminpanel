import React, { Component } from "react";
import Chart from "react-apexcharts";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";

class Mixchart extends Component {
  constructor(props) {
    super(props);

    this.state = {
          
      series: [{
        name: 'Website Blog',
        type: 'column',
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
      }, {
        name: 'Social Media',
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
      }],
      options: {
        chart: {
         
          type: 'line',
        },
        stroke: {
          width: [0, 4]
        },
        
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1]
        },
        labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
        xaxis: {
          type: 'datetime'
        },
        yaxis: [{
          title: {
            text: 'Website Blog',
          },
        
        }, {
          opposite: true,
          title: {
            text: 'Social Media'
          }
        }]
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
              type="line"
            
            />
            </div>
      </CardContent>      
    </Card>
       
      </div>
    );
  }
}

export default Mixchart;
