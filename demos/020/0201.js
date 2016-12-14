    var digit = [
        [
            [0, 0, 1, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 1, 0, 0]
        ], //0
        [
            [0, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [1, 1, 1, 1, 1, 1, 1]
        ], //1
        [
            [0, 1, 1, 1, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 0],
            [0, 1, 1, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 1, 1, 1, 1, 1]
        ], //2
        [
            [1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 1, 1, 1, 1, 1, 0]
        ], //3
        [
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 1, 1, 1, 1]
        ], //4
        [
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 1, 1, 1, 1, 1, 0]
        ], //5
        [
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 0],
            [0, 1, 1, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0],
            [1, 1, 0, 1, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 1, 1, 1, 1, 1, 0]
        ], //6
        [
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0]
        ], //7
        [
            [0, 1, 1, 1, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 1, 1, 1, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 1, 1, 1, 1, 1, 0]
        ], //8
        [
            [0, 1, 1, 1, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 1, 1, 1, 0, 1, 1],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 0, 0]
        ], //9
        [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ] //:
    ];
    var WINDOW_WIDTH = 800;
    var WINDOW_HEIGHT = 400;
    var RADIUS = 5;
    var MARGIN_TOP = 60;
    var MARGIN_LEFT = 20;
    var endTime = new Date(2016,11,2,12,12,54);
    var curShowTimeSeconds = 0;
    var balls = [];
    const colors = ["#33B5E5", "#0099CC", "#AA66CC", "#9933CC", "#99CC00", "#669900", "#FFBB33", "#FF8800", "#FF4444", "#CC0000"];


    window.onload = function() {

        // alert(endTime.getTime());
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");

        // alert(ctx);


        canvas.width = WINDOW_WIDTH;
        canvas.height = WINDOW_HEIGHT;

        curShowTimeSeconds = getCurrentShowTimeSeconds();

        setInterval(function() {
            render(ctx);
            update();
        }, 30);

    };

    function update() {
        var nextShowTimeSeconds = getCurrentShowTimeSeconds();

        var nextHours = parseInt(nextShowTimeSeconds / 3600);
        var nextMinutes = parseInt((nextShowTimeSeconds - nextHours * 3600) / 60);
        var nextSeconds = nextShowTimeSeconds % 60;

        var curHours = parseInt(curShowTimeSeconds / 3600);
        var curMinutes = parseInt((curShowTimeSeconds - curHours * 3600) / 60);
        var curSeconds = curShowTimeSeconds % 60;
        // alert(nextShowTimeSeconds);

        if (nextSeconds != curSeconds) {
            if (parseInt(curHours / 10) != parseInt(nextHours / 10)) {
                addBalls(MARGIN_LEFT + 0 * 16 * (RADIUS + 1), MARGIN_TOP, parseInt(curHours / 10));
            }
            if (parseInt(curHours % 10) != parseInt(nextHours % 10)) {
                addBalls(MARGIN_LEFT + 1 * 16 * (RADIUS + 1), MARGIN_TOP, parseInt(curHours % 10));
            }
            if (parseInt(curMinutes / 10) != parseInt(nextMinutes / 10)) {
                addBalls(MARGIN_LEFT + 2 * 16 * (RADIUS + 1) + 10 * (RADIUS + 1), MARGIN_TOP, parseInt(curMinutes / 10));
            }
            if (parseInt(curMinutes % 10) != parseInt(nextMinutes % 10)) {
                addBalls(MARGIN_LEFT + 3 * 16 * (RADIUS + 1) + 10 * (RADIUS + 1), MARGIN_TOP, parseInt(curMinutes % 10));
            }
            if (parseInt(curSeconds / 10) != parseInt(nextSeconds / 10)) {
                addBalls(MARGIN_LEFT + 4 * 16 * (RADIUS + 1) + 20 * (RADIUS + 1), MARGIN_TOP, parseInt(curSeconds / 10));
            }
            if (parseInt(curSeconds % 10) != parseInt(nextSeconds % 10)) {
                addBalls(MARGIN_LEFT + 5 * 16 * (RADIUS + 1) + 20 * (RADIUS + 1), MARGIN_TOP, parseInt(curSeconds % 10));
            }
            curShowTimeSeconds = nextShowTimeSeconds;
        }
        updateBalls();
    }

    function updateBalls() {

        for (var i = 0; i < balls.length; i++) {

            balls[i].x += balls[i].vx;
            balls[i].y += balls[i].vy;
            balls[i].vy += balls[i].g;

            if (balls[i].y >= WINDOW_HEIGHT - RADIUS) {
                balls[i].y = WINDOW_HEIGHT - RADIUS;
                balls[i].vy = -balls[i].vy * 0.9;
            }
            if (balls[i].x > WINDOW_WIDTH - RADIUS) {
                // balls[i].x = WINDOW_WIDTH - RADIUS;
                balls[i].vx = -balls[i].vx;
            }
        }
        var cnt = 0
        for (var i = 0; i < balls.length; i++)
            if (balls[i].x + RADIUS > 0 && balls[i].x - RADIUS < WINDOW_WIDTH)
                balls[cnt++] = balls[i]

        while (balls.length > cnt) {
            balls.pop();
        }

        console.log(cnt);
    }

    function getCurrentShowTimeSeconds() {
        var time = new Date();
        var ret = time.getTime()%(24*3600*1000)+(8*3600000);
        ret = Math.round(ret / 1000);
        return ret > 0 ? ret : 0;
    }

    function addBalls(x, y, num) {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        for (var i = 0; i < digit[num].length; i++) {
            for (var j = 0; j < digit[num][i].length; j++) {
                if (digit[num][i][j] == 1) {
                    var aBall = {
                        x: x + j * 2 * (RADIUS + 1) + (RADIUS + 1),
                        y: y + i * 2 * (RADIUS + 1) + (RADIUS + 1),
                        g: 1.5 + Math.random(),
                        vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * Math.random()*20,
                        vy: -10,
                        color: colors[Math.floor(Math.random() * colors.length)]
                    }

                    balls.push(aBall)
                }
            }
        }
    }

    function render(ctx) {
        ctx.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);

        var hours = parseInt(curShowTimeSeconds / 3600);
        var minutes = parseInt((curShowTimeSeconds - hours * 3600) / 60);
        var seconds = curShowTimeSeconds % 60;

        renderDigit(MARGIN_LEFT + 0 * 16 * (RADIUS + 1), MARGIN_TOP, parseInt(hours / 10), ctx);
        renderDigit(MARGIN_LEFT + 1 * 16 * (RADIUS + 1), MARGIN_TOP, parseInt(hours % 10), ctx);
        renderDigit(MARGIN_LEFT + 2 * 16 * (RADIUS + 1), MARGIN_TOP, 10, ctx);
        renderDigit(MARGIN_LEFT + 2 * 16 * (RADIUS + 1) + 10 * (RADIUS + 1), MARGIN_TOP, parseInt(minutes / 10), ctx);
        renderDigit(MARGIN_LEFT + 3 * 16 * (RADIUS + 1) + 10 * (RADIUS + 1), MARGIN_TOP, parseInt(minutes % 10), ctx);
        renderDigit(MARGIN_LEFT + 4 * 16 * (RADIUS + 1) + 10 * (RADIUS + 1), MARGIN_TOP, 10, ctx);
        renderDigit(MARGIN_LEFT + 4 * 16 * (RADIUS + 1) + 20 * (RADIUS + 1), MARGIN_TOP, parseInt(seconds / 10), ctx);
        renderDigit(MARGIN_LEFT + 5 * 16 * (RADIUS + 1) + 20 * (RADIUS + 1), MARGIN_TOP, parseInt(seconds % 10), ctx);

        for (var i = 0; i < balls.length; i++) {
            ctx.fillStyle = balls[i].color;

            ctx.beginPath();
            ctx.arc(balls[i].x, balls[i].y, RADIUS, 0, 2 * Math.PI, true);
            ctx.closePath();

            ctx.fill();
        }
    }

    function renderDigit(x, y, num, ctx) {
        ctx.fillStyle = "#3688F8"; //注意颜色值上面要加引号！！！！！！！！！！！

        for (var i = 0; i < digit[num].length; i++) {
            for (var j = 0; j < digit[num][i].length; j++) {
                if (digit[num][i][j] == 1) {
                    ctx.beginPath();
                    ctx.arc(x + j * 2 * (RADIUS + 1) + (RADIUS + 1), y + i * 2 * (RADIUS + 1) + (RADIUS + 1), RADIUS, 0, 2 * Math.PI, false);
                    ctx.closePath();

                    ctx.fill();
                }
            }
        }
    }