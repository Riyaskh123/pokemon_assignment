import Box from '@/UI/Box';
import React from 'react'
import ReactApexChart from 'react-apexcharts';

export default function Chart({ title, label, data }) {


    const Chartdata = {

        series: [{
            name: 'power',
            data: data
        }],
        options: {
            chart: {
                height: 350,
                type: 'bar',
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        position: 'top',
                    },
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val;
                },
                offsetY: -20,
                style: {
                    fontSize: '14px',
                    colors: ["#304758"]
                }
            },

            xaxis: {
                categories: label,
                position: 'bottom',
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                crosshairs: {
                    fill: {
                        type: 'gradient',
                        gradient: {
                            colorFrom: '#D02321',
                            colorTo: '#BED1E6',
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                }
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false,
                    formatter: function (val) {
                        return val;
                    }
                }

            },
            title: {
                text: title,
                floating: true,
                offsetY: 0,
                align: 'center',
                style: {
                    color: '#444'
                }
            }
        },


    };
    return (
        <ReactApexChart options={Chartdata.options} series={Chartdata.series} type="bar" height={350} />
    );
}