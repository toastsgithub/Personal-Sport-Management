/**
 * Created by duanzhengmou on 10/11/16.
 */
$('#myTab a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
});
draw_step_bar_chart();
draw_weight_line_chart();

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