import React, { Component } from "react";
import Chart from "react-apexcharts";
//import styled from 'styled-components';

class CircleChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    fontFamily: "Helvetica, Arial, sans-serif",
                    background: "rgb(30, 30, 30)",
                    foreColor: 'white'
                },
                colors: [function({ value, seriesIndex, w }) {
                    if(value < 25) {
                        return '#778AFF'
                    } else if (value >= 25 && value < 50) {
                        return '#3954FF'
                    } else if (value >= 50 && value < 75) {
                        return '#1536FF'
                    } else {
                        return '#0023FF'
                    }
                  }],
                 labels: ["% of Total Monthly Cost"],
                // theme: {
                //     monochrome: {
                //         enabled: true,
                //         color: "#0325FB",
                //         shadeTo: "dark",
                //         shadeIntensity: 0.19
                //     }     
                // }
            },
            series: [55],
            labels: ["Next Due"]
        }
    }
    render() {
        return (
            <Chart
                options={this.state.options}
                series={this.state.series}
                type="radialBar"
                height={255}
            />
        )
    }
}

export default CircleChart;