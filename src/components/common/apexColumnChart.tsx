"use client";
import React from "react";
import { ApexOptions } from 'apexcharts';
import ReactApexChart from "react-apexcharts";

interface ApexColumnChartState {
    series: {
        name: string;
        data: number[];
    }[];
    options: ApexOptions;
}

const ColumnChart: React.FC = () => {

    const state: ApexColumnChartState = {
        series: [{
            name: 'Followers',
            data: [410, 480, 250, 205, 400, 180, 420, 170, 395, 205, 400, 210, 100, 400, 310]
        }, {
            name: 'Listeners',
            data: [80, 90, 50, 30, 80, 20, 120, 20, 90, 50, 130, 27, 30, 100, 15]
        }, {
            name: 'Streams',
            data: [120, 200, 100, 80, 120, 50, 150, 50, 100, 80, 120, 115, 30, 150, 45]
        }],
        options: {
            chart: {
                type: 'bar',
                stacked: true,
                zoom: {
                    enabled: true
                }
            },
            colors: ['#6585F3', '#85B1F3', '#BBC5E1'], // Custom colors for each series
            responsive: [{
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 10
                    }
                }
            }],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth:'55%',
                    borderRadius: 3,
                    borderRadiusApplication: 'end', // 'around', 'end'
                    borderRadiusWhenStacked: 'last', // 'all', 'last'
                    dataLabels: {
                        total: {
                            enabled: false
                        }
                    }
                },
            },
            dataLabels: {
                enabled: false // Disable all data labels
            },
            xaxis: {
                type: 'datetime',
                categories: [
                    '01/02/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
                    '01/05/2011 GMT', '01/06/2011 GMT', '01/07/2011 GMT', '01/08/2011 GMT',
                    '01/09/2011 GMT', '01/10/2011 GMT', '01/11/2011 GMT', '01/12/2011 GMT',
                    '01/13/2011 GMT', '01/14/2011 GMT', '01/15/2011 GMT'
                ],
            },
            yaxis: {
                min: 0,
                max: 900
            },
            legend: {
                position: 'top',
            },
            fill: {
                opacity: 1,
                colors: ['#6585F3', '#85B1F3', '#BBC5E1'] // Custom fill colors for each series
            }
        },
    };

    return (
        <div className="custom-chart-container">
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="bar" height={400} />
            </div>
        </div>
    );
};

export default ColumnChart;