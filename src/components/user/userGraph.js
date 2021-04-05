import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-lineheight-annotation';
import { Row } from 'react-bootstrap';


class UserGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9", "Week 10"],
                datasets: [{
                    borderColor: "green",
                    backgroundColor: "#6bd098",
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    borderWidth: 3,
                    data: [300, 310, 316, 322, 330, 326, 333, 345, 338, 354]
                },
                {
                    borderColor: "red",
                    backgroundColor: "#f17e5d",
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    borderWidth: 3,
                    data: [320, 340, 365, 360, 370, 385, 390, 384, 408, 420]
                },
                {
                    borderColor: "orange",
                    backgroundColor: "#fcc468",
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    borderWidth: 3,
                    data: [370, 394, 415, 409, 295, 445, 325, 450, 400, 484]
                }
                ]
            },
            options: {
                legend: {
                    display: false
                },

                tooltips: {
                    enabled: false
                },

                scales: {
                    yAxes: [{

                        ticks: {
                            fontColor: "#9f9f9f",
                            beginAtZero: false,
                            maxTicksLimit: 5,
                            //padding: 20
                        },
                        gridLines: {
                            drawBorder: false,
                            zeroLineColor: "#ccc",
                            color: 'rgba(255,255,255,0.05)'
                        }

                    }],

                    xAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(255,255,255,0.1)',
                            zeroLineColor: "transparent",
                            display: false,
                        },
                        ticks: {
                            padding: 20,
                            fontColor: "#9f9f9f"
                        }
                    }]
                },
            }
        };
    }
    render() {
        return (
            <div style={{ position: "relative" }} className="col-lg-6">
                <h2>Chart Sample</h2>
                <Line
                    options={{
                        responsive: true,
                        lineHeightAnnotation: {
                            hover: true,
                            color: "white"
                        }
                    }}
                    data={this.state.data}
                />
            </div>
        );
    }
}

export default UserGraph;