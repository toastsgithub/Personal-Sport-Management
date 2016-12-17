/**
 * Created by duanzhengmou on 10/11/16.
 */
$('#myTab a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
});
load_basic_info();
load_step_bar_chart();
load_sleep_chart();
load_weight_chart();
// draw_step_bar_chart();
draw_weight_line_chart();
// draw_sleep_chart(100,78);

function load_basic_info() {
    var username = getCookie('hiname');
    var url = '/user/' + username;
    $.ajax({
        url:url,
        type:'get',
        success:function ( data ) {
            var info = data[0];
            document.getElementById('nickname').innerText = info.nickname;
            var self_intro_label = document.getElementById('user-description');
            self_intro_label.innerText = ((info.self_intro == null) ? 'So lazy that have nothing to say ..' : info.self_intro);
            // self_intro_label.innerText = info.self_intro;
        },
        error:function ( data ) {

        }
    });
}

function load_step_bar_chart() {
    var username = getCookie('hiname');

    $.ajax({
        url:'/step_data',
        type:'get',
        data:{username:username},
        success:function (data) {
            var step_data = [];
            for (var x in data){
                var data_item = [];
                data_item.push(new Date(data[x].sport_date).getTime());
                data_item.push(parseInt(data[x].steps));
                step_data.push(data_item);
            }

            draw_step_bar_chart(step_data);
        },
        error:function (data) {

        }
    });
}

function load_sleep_chart() {
    var username = getCookie('hiname');
    var date = new Date();

    // var current_date = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
    var current_date = date.dateFormat('yyyy-MM-dd');
    console.log("date:"+current_date);
    $.ajax({
        url:'/sleep_data',
        type:'get',
        data:{username:username,date:current_date},
        success:function (data) {
            console.log(data);
            if(data.length>0){
                draw_sleep_chart(parseInt(data[0].sleep_time),parseInt(data[0].sleep_deep));
            }else{
                draw_sleep_chart(1000000,0);
            }

        },
        error:function (data) {

        }
    });
}

function load_weight_chart() {
    var username = getCookie("hiname");

    $.ajax({
        url:'/weight_data',
        type:'get',
        data:{username:username},
        success:function (data) {
            var weight_data = [];
            for (var x in data){
                var data_item = [];
                data_item.push(new Date(data[x].sport_date).getTime());
                data_item.push(parseFloat(data[x].weight));
                weight_data.push(data_item);
            }
            draw_weight_line_chart(weight_data);
        },
        error:function (data) {

        }
    });
}

function draw_step_bar_chart(step_data) {
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
                    data: step_data,
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

function draw_weight_line_chart(weight_data) {
    console.log(weight_data);
    $(function () {
        // Create the chart
        $('#weight_line_chart').highcharts('StockChart', {
                rangeSelector: {
                    selected: 1
                },

                title: {
                    text: 'Weight'
                },

                series: [{
                    name: 'weight(kg)',
                    data: weight_data,
                    step: true,
                    tooltip: {
                        valueDecimals: 2
                    }
                }]
            });

    });
}

function draw_sleep_chart(total,deep) {
    console.log("total:"+total+"deep:"+deep);
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
                    pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
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
                    max: total,
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
                        y: total
                    }]
                }, {
                    name: 'Deep Sleep',
                    borderColor: "#CCFF66",
                    data: [{
                        color: "#CCFF66",
                        radius: '75%',
                        innerRadius: '75%',
                        y: deep
                    }]
                }, {
                    name: 'Quality',
                    borderColor: "#0099CC",
                    data: [{
                        color: "#0099CC",
                        radius: '50%',
                        innerRadius: '50%',
                        y: deep
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