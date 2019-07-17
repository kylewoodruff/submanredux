import React, { Component } from "react";
import Chart from "react-apexcharts";
import styled from 'styled-components';

class CircleChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    fontFamily: "Helvetica, Arial, sans-serif",
                },
                // colors: ["#1345FA"],
                labels: ["Monthly Cost %"],
                theme: {
                    monochrome: {
                        enabled: true,
                        color: "#FC2E01",
                        shadeTo: "light",
                        shadeIntensity: 0.99
                    }     
                }
            },
            series: [90],
            labels: ["Next Due"]
        }
    }
    render() {
        return (
            <Chart
                name={"Next Due"}
                options={this.state.options}
                series={this.state.series}
                type="radialBar"
                width={500}
                height={320}
            />
        )
    }
}

export default CircleChart;