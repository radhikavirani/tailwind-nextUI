"use client";
import React from 'react';
import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

interface ApexBarChartState {
    series: {
        name: string;
        data: number[];
    }[];
    options: ApexOptions;
}

class ApexBarChart extends React.Component<{}, ApexBarChartState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            series: [{
                name: 'Revenue',
                data: [4.5, 2.5, 5.0]
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'bar',
                },
                plotOptions: {
                    bar: {
                        borderRadius: 10,
                        borderRadiusApplication: 'end',
                        borderRadiusWhenStacked: 'all',
                    },
                },
                colors: ['#E3E8FC'],
                dataLabels: {
                    enabled: false,
                },
                xaxis: {
                    categories: ["", "", ""],
                    position: 'top',
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                },
                yaxis: {
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    }
                },
                grid: {
                    show: false
                },
                states: {
                    hover: {
                        filter: {
                            type: 'none'
                        },
                    }
                }
            },
        };
    }

    render() {
        return (
            <div className='w-fit absolute -bottom-10 right-[15px]'>
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
            </div>
        );
    }
}

export default ApexBarChart;
