import React, { Component } from "react";
import Chart from "react-apexcharts";
import DashCard from "../components/DashCard.js";
import styled from 'styled-components';


const ChartTitle = styled.h6`
    color: white;
    margin: 15px 2px 5px 2px;
    font-weight: bold;
`;

class CircleChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    fontFamily: "Helvetica, Arial, sans-serif",
                    foreColor: 'white',
                    labelColor: "white",
                    animations: {
                        enabled: true,
                        easing: "easein",
                        speed: 1600
                    }
                },
                colors: [function ({ value, seriesIndex, w }) {
                    if (value < 25) {
                        return '#778AFF'
                    } else if (value >= 25 && value < 50) {
                        return '#3954FF'
                    } else if (value >= 50 && value < 75) {
                        return '#1536FF'
                    } else {
                        return '#0023FF'
                    }
                }],
                labels: [""]
            },
            series: [60],
        }
    }
    render() {
        return (
            <DashCard>
                <ChartTitle className="text-center">Monthly Subscription Cost % Due This Week</ChartTitle>
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="radialBar"
                    height={250}
                    width={"100%"}
                />
            </DashCard>
        )
    }
}

export default CircleChart;