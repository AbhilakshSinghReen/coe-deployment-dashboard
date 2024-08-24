// import React from 'react'
// import ReactECharts from "echarts-for-react";
// import * as echarts from "echarts";


// const OrdersPieChart = () => {
//     const option = {
//         color: [
//             new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                 {
//                     offset: 0,
//                     color: "#1158E2"
//                 },
//                 {
//                     offset: 1,
//                     color: "#42B5F2"
//                 }
//             ]),
//             new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                 {
//                     offset: 0,
//                     color: "#BC1FD7",
//                 },
//                 {
//                     offset: 1,
//                     color: "#7F1DD1",
//                 }
//             ]),
//             new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                 {
//                     offset: 0,
//                     color: "#E8A618",
//                 },
//                 {
//                     offset: 1,
//                     color: "#EB6B36",
//                 }
//             ]),
//             new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                 {
//                     offset: 0,
//                     color: "#D131BE",
//                 },
//                 {
//                     offset: 1,
//                     color: "#BF1575",
//                 }
//             ]),
//         ],
//         series: [
//             {
//                 name: "Item",
//                 type: "pie",
//                 radius: ["60%", "80%"],
//                 avoidLabelOverlap: false,
//                 itemStyle : {
//                     borderRadius: 50,
//                     borderColor: "black",
//                     borderWidth: 5,
//                 },
//                 label: {
//                     show: false,
//                     position: "center"
//                 },
//                 emphasis : {
//                     label: {
//                         show: true,
//                         fontSize: 20,
//                         fontWeight: "bold"
//                     }
//                 },
//                 data: [
//                     { value: 2190, name: "Search Engine" },
//                     { value: 735, name: "Direct" },
//                     { value: 580, name: "Email" },
//                     { value: 484, name: "Union Ads" },
//                 ]
//             }
//         ]
//     }

//     return (
//         <ReactECharts style={{ height: 140, marginTop: "1rem" }} option={option} />
//     )
// }

// export default OrdersPieChart
import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { cardsData } from '../../data'

const OrdersPieChart = () => {
    const chartData = cardsData.slice(0, 4).map(card => ({
        value: card.amount,
        name: card.title
    }));
    const option = {
        // title: {
        //     text: 'Referer of a Website',
        //     subtext: 'Fake Data',
        //     left: 'center',
        //     textStyle: {
        //         color: '#333',
        //         fontWeight: 'bold',
        //         fontSize: 18,
        //     },
        //     subtextStyle: {
        //         color: '#aaa',
        //         fontSize: 12,
        //     }
        // },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            orient: 'horizontal',
            bottom: 'bottom',
            itemGap: 20, // Gap between legend items
            itemWidth: 10, // Width of the legend symbol
            itemHeight: 10, // Height of the legend symbol
            textStyle: {
                color: 'white',
            },
            pageIconColor: 'white', // Color of pagination icons
            formatter: function (name) {
                // Custom formatter to limit the display to two items per row
                const maxItemsPerRow = 2;
                const index = chartData.findIndex(item => item.name === name);
                const rowIndex = Math.floor(index / maxItemsPerRow);
                return rowIndex % 2 === 0 ? name : '  ' + name;
            },
        },
        color: [
            new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#1158E2' },
                { offset: 1, color: '#42B5F2' }
            ]),
            new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#BC1FD7' },
                { offset: 1, color: '#7F1DD1' }
            ]),
            new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#E8A618' },
                { offset: 1, color: '#EB6B36' }
            ]),
            new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#D131BE' },
                { offset: 1, color: '#BF1575' }
            ]),
        ],
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '60%',
                data: chartData,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                label: {
                    show: true,
                    formatter: '{b}: {c}',
                    fontSize: 10,
                    color: 'white',
                },
                labelLine: {
                    show: true,
                    length: 10,
                    length2: 10,
                },
                itemStyle: {
                    borderRadius: 7,
                    borderColor: '#fff',
                    borderWidth: 2,
                }
            }
        ]
    };

    return (
        <ReactECharts style={{ width: '100%', height: '300px', marginTop:"-1.2rem" }} option={option} />
    );
};

export default OrdersPieChart;
