/**
 * Created by duanzhengmou on 10/11/16.
 */
$('#myTab a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
});
draw_step_bar_chart();
draw_weight_line_chart();
draw_sleep_chart();

function draw_step_bar_chart() {
    $(function () {


            // create the chart
            $('#step_bar_chart').highcharts('StockChart', {
                chart: {
                    alignTicks: false
                },

                rangeSelector: {
                    selected: 1
                },

                title: {
                    text: '步数跟踪'
                },

                series: [{
                    type: 'column',
                    name: '今日步数',
                    color:'#666666',
                    data: data,
                    dataGrouping: {
                        units: [[
                            'week', // unit name
                            [1] // allowed multiples
                        ], [
                            'month',
                            [1, 2, 3, 4, 6]
                        ]]
                    }
                }]
            });
        });

}

function draw_weight_line_chart() {
    $(function () {
        $('#weight_line_chart').highcharts({
            chart: {
                type: 'line'
            },
            title: {
                text: '体重变化'
            },
            subtitle: {
                text: 'subtitle'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: '体重(Kg)'
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                }
            },
            series: [{
                name: 'Toast',
                data: [87.0, 86.9, 89.5, 90.5, 91.4, 91.5, 88.2, 86.5, 93.3, 92.3, 93.9, 89.6]
            }]
        });
    });
}

function draw_sleep_chart() {
    $(function () {

        Highcharts.chart('sleep_data', {

                chart: {
                    type: 'solidgauge',
                    marginTop: 50
                },

                title: {
                    text: 'Sleep Data',
                    style: {
                        fontSize: '24px'
                    }
                },

                tooltip: {
                    borderWidth: 0,
                    backgroundColor: 'none',
                    shadow: false,
                    style: {
                        fontSize: '16px'
                    },
                    pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
                    positioner: function (labelWidth,labelHight,point) {
                        return {
                            x: point.plotX - labelWidth / 2 + 10,
                            y: point.plotY + 10
                        };
                    }
                },

                pane: {
                    startAngle: 0,
                    endAngle: 360,
                    background: [{ // Track for Move
                        outerRadius: '112%',
                        innerRadius: '88%',
                        backgroundColor: Highcharts.Color("#666666").setOpacity(0.3).get(),
                        borderWidth: 0
                    }, { // Track for Exercise
                        outerRadius: '87%',
                        innerRadius: '63%',
                        backgroundColor: Highcharts.Color("#CCFF66").setOpacity(0.3).get(),
                        borderWidth: 0
                    }, { // Track for Stand
                        outerRadius: '62%',
                        innerRadius: '38%',
                        backgroundColor: Highcharts.Color("#0099CC").setOpacity(0.3).get(),
                        borderWidth: 0
                    }]
                },

                yAxis: {
                    min: 0,
                    max: 100,
                    lineWidth: 0,
                    tickPositions: []
                },

                plotOptions: {
                    solidgauge: {
                        borderWidth: '34px',
                        dataLabels: {
                            enabled: false
                        },
                        linecap: 'round',
                        stickyTracking: false
                    }
                },

                series: [{
                    name: 'Total',
                    borderColor: "#666666",
                    data: [{
                        color: "#666666",
                        radius: '100%',
                        innerRadius: '100%',
                        y: 80
                    }]
                }, {
                    name: 'Deep Sleep',
                    borderColor: "#CCFF66",
                    data: [{
                        color: "#CCFF66",
                        radius: '75%',
                        innerRadius: '75%',
                        y: 65
                    }]
                }, {
                    name: 'Quality',
                    borderColor: "#0099CC",
                    data: [{
                        color: "#0099CC",
                        radius: '50%',
                        innerRadius: '50%',
                        y: 50
                    }]
                }]
            },

            /**
             * In the chart load callback, add icons on top of the circular shapes
             */
            function callback() {

                // Move icon
                this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8])
                    .attr({
                        'stroke': '#303030',
                        'stroke-linecap': 'round',
                        'stroke-linejoin': 'round',
                        'stroke-width': 2,
                        'zIndex': 10
                    })
                    .translate(190, 26)
                    .add(this.series[2].group);

                // Exercise icon
                this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8, 'M', 8, -8, 'L', 16, 0, 8, 8])
                    .attr({
                        'stroke': '#303030',
                        'stroke-linecap': 'round',
                        'stroke-linejoin': 'round',
                        'stroke-width': 2,
                        'zIndex': 10
                    })
                    .translate(190, 61)
                    .add(this.series[2].group);

                // Stand icon
                this.renderer.path(['M', 0, 8, 'L', 0, -8, 'M', -8, 0, 'L', 0, -8, 8, 0])
                    .attr({
                        'stroke': '#303030',
                        'stroke-linecap': 'round',
                        'stroke-linejoin': 'round',
                        'stroke-width': 2,
                        'zIndex': 10
                    })
                    .translate(190, 96)
                    .add(this.series[2].group);
            });


    });
}

var data =  [/* Oct 2009 */
    [1255392000000,87004582],
    [1255478400000,93942639],
    [1255564800000,93388722],
    [1255651200000,107856189],
    [1255910400000,235557336],
    [1255996800000,285259814],
    [1256083200000,298431525],
    [1256169600000,197847825],
    [1256256000000,105196434],
    [1256515200000,121084383],
    [1256601600000,189137473],
    [1256688000000,204596217],
    [1256774400000,142602061],
    [1256860800000,179380894],
    /* Nov 2009 */
    [1257120000000,169897231],
    [1257206400000,130635414],
    [1257292800000,121935499],
    [1257379200000,96230799],
    [1257465600000,73807363],
    [1257724800000,132213683],
    [1257811200000,100298380],
    [1257897600000,111019510],
    [1257984000000,90978853],
    [1258070400000,85832761],
    [1258329600000,121301019],
    [1258416000000,99128064],
    [1258502400000,93579864],
    [1258588800000,135581523],
    [1258675200000,101722565],
    [1258934400000,118793731],
    [1259020800000,79609194],
    [1259107200000,71662311],
    [1259280000000,73814244],
    [1259539200000,106213926]];