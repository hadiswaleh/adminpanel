import React, { Component } from "react";
import Chart from "react-apexcharts";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from "@mui/material";

class Bubble extends Component {
  constructor(props) {
    super(props);

    this.state = {
          
      series: [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
      }],
      options: {
        chart: {
          height: 350,
          type: 'radar',
        },
       
        xaxis: {
          categories: ['January', 'February', 'March', 'April', 'May', 'June']
        }
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
              type="radar"            
            />
          </div>
      </CardContent>      
    </Card>
       
      </div>
    );
  }
}

export default Bubble;
