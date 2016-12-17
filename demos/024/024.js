var heroColor = ["#BA9658", "#FEF26E"];
var enemyColor = ["#FF5252", "#FFA6A6"];

var WINDOW_WIDTH = 600;
var WINDOW_HEIGHT = 300;

var canvas = document.getElementById("canvas");
var cxt = canvas.getContext("2d");

canvas.width = WINDOW_WIDTH;
canvas.height = WINDOW_HEIGHT;


var enemyTanks = [];

var enemyNumber = 20;

for (var i = 0; i < enemyNumber; i++) {
    // var x = Math.floor((Math.random() * WINDOW_WIDTH));
    var x = i * 30;;
    // var y = Math.floor((Math.random() * WINDOW_HEIGHT));
    var y = 30;
    var direct = Math.floor((Math.random() * 4))
    var speed = 1;
    var isLive = true
    var enemyTank = new EnemyTank(x, y,direct, enemyColor, speed, isLive);
    if (enemyTanks.length > 0) {
    }
    enemyTank.timerChangeEnemyDirect = setInterval("if(enemyTanks[" + i + "]) enemyTanks[" + i + "].changeDirect()", Math.ceil((Math.random() * 5)) * 500);
    enemyTank.timerShotHero = setInterval("if(enemyTanks[" + i + "]) enemyTanks[" + i + "].shotHero()", Math.ceil((Math.random() * 4)) * 500);
    enemyTanks[i] = enemyTank;
    enemyTanks[i].changeDirect();
    // enemyTanks[i].shotHero();

}

var bulletId = 0;


//不使用var定义的变量，可以用delete删除。
hero = new Hero(WINDOW_WIDTH / 2 - 15, WINDOW_HEIGHT - 30, 0, heroColor, 2, true);

var heroBullets = [];

var heroBullet = null;


var enemyBullets = [];

var enemyBullet = null;

var booms = [];
var boom = null;


function Boom(x, y) {
    this.x = x;
    this.y = y;
    this.r = 2;
}

function drawBoom(obj) {
    if (obj.r < 20) {
        cxt.beginPath();
        cxt.fillStyle = "pink";
        cxt.arc(obj.x, obj.y, obj.r, 0, 2 * Math.PI, true);
        cxt.closePath();
        cxt.fill();
        obj.r = obj.r + 2;
    }
}


function Tank(x, y, direct, color, speed, isLive) {
    // this.timerShotHero = null;
    // this.timerChangeEnemyDirect = null;
    this.isLive = isLive;
    this.x = x;
    this.y = y;
    this.moveUp = false;
    this.moveRight = false;
    this.moveDown = false;
    this.moveLeft = false;
    this.speed = speed;
    this.direct = direct;
    this.color = color;
    this.move = function() {
        if (this.moveUp === true) this.y -= this.speed;
        if (this.moveRight === true) this.x += this.speed;
        if (this.moveDown === true) this.y += this.speed;
        if (this.moveLeft === true) this.x -= this.speed;
    };
}

//定义一个自己的坦克继承Tank这个对象
function Hero(x, y, direct, color, speed, isLive) {
    this.tank = Tank;
    this.tank(x, y, direct, color, speed, isLive);
    this.shotEnemy = function() {
        switch (this.direct) {
            case 0:
                heroBullet = new Bullet(this.x + 9, this.y, this.direct, 5, "hero");
                break;
            case 1:
                heroBullet = new Bullet(this.x + 18, this.y + 9, this.direct, 5, "hero");
                break;
            case 2:
                heroBullet = new Bullet(this.x + 9, this.y + 18, this.direct, 5, "hero");
                break;
            case 3:
                heroBullet = new Bullet(this.x, this.y + 9, this.direct, 5, "hero");
                break;
        }
        heroBullets.push(heroBullet);
        heroBullets[heroBullets.length - 1].bulletId = bulletId++;
        console.log("生成了一个bulletID为" + heroBullets[heroBullets.length - 1].bulletId + "的子弹");

    };
}



function EnemyTank(x, y, direct, color, speed, isLive) {
    this.tank = Tank;
    this.tank(x, y, direct, color, speed, isLive);
    this.changeDirect = function() {
        this.direct = Math.floor((Math.random() * 4));
        this.moveUp = this.moveRight = this.moveDown = this.moveLeft = false;
        switch (this.direct) {
            case 0:
                this.moveUp = true;
                break;
            case 1:
                this.moveRight = true;
                break;
            case 2:
                this.moveDown = true;
                break;
            case 3:
                this.moveLeft = true;
                break;
        }
    };
    this.shotHero = function() {
        switch (this.direct) {
            case 0:
                enemyBullet = new Bullet(this.x + 9, this.y, this.direct, 2, "enemy");
                break;
            case 1:
                enemyBullet = new Bullet(this.x + 18, this.y + 9, this.direct, 2, "enemy");
                break;
            case 2:
                enemyBullet = new Bullet(this.x + 9, this.y + 18, this.direct, 2, "enemy");
                break;
            case 3:
                enemyBullet = new Bullet(this.x, this.y + 9, this.direct, 2, "enemy");
                break;
        }
        enemyBullets.push(enemyBullet);
        enemyBullets[enemyBullets.length - 1].bulletId = bulletId++;
        console.log("生成了一个bulletID为" + enemyBullets[enemyBullets.length - 1].bulletId + "的子弹");

    };
}

function Bullet(x, y, direct, speed, owner) {
    this.owner = owner;
    this.bulletId = 0;
    this.x = x;
    this.y = y;
    this.direct = direct;
    this.speed = speed;
    this.isLive = true;
    this.move = function move() {
        if (this.x < 0 || this.x > WINDOW_WIDTH + 2 || this.y < 0 || this.y > WINDOW_HEIGHT + 2) {
            this.isLive = false;
            removeByValue(heroBullets, this.bulletId);
            removeByValue(enemyBullets, this.bulletId);
        } else {

            if (hero.isLive && this.owner === "enemy" && this.x > hero.x && this.x < hero.x + 20 && this.y > hero.y && this.y < hero.y + 20) {
                hero.isLive = false;
                boom = new Boom(hero.x + 10, hero.y + 10);
                booms.push(boom);
                removeByValue(enemyBullets, this.bulletId);
                setInterval(function() {
                    var test = document.getElementById("test");
                    test.innerHTML = "你死了！";
                }, 500);
            }

            for (var i = 0; i < enemyTanks.length; i++) {
                if (enemyTanks[i].isLive && this.owner === "hero" && this.x > enemyTanks[i].x && this.x < enemyTanks[i].x + 20 && this.y > enemyTanks[i].y && this.y < enemyTanks[i].y + 20) {
                    boom = new Boom(enemyTanks[i].x + 10, enemyTanks[i].y + 10);
                    booms.push(boom);
                    enemyTanks[i].isLive = false;
                    clearInterval(enemyTanks[i].timerChangeEnemyDirect);
                    clearInterval(enemyTanks[i].timerShotHero);
                    enemyTanks.splice(i, 1);
                    removeByValue(heroBullets, this.bulletId);
                }
            }

            switch (this.direct) {
                case 0:
                    this.y -= this.speed;
                    break;
                case 1:
                    this.x += this.speed;
                    break;
                case 2:
                    this.y += this.speed;
                    break;
                case 3:
                    this.x -= this.speed;
                    break;
            }
        }
    };
}


//绘制坦克
function drawTank(tank) {
    if (!tank || !tank.isLive) {
        return;
    }

    var color = tank.color;
    //考虑方向
    switch (tank.direct) {

        case 0: //上
        case 2: // 下
            cxt.fillStyle = color[0];
            cxt.fillRect(tank.x, tank.y, 5, 20);
            cxt.fillRect(tank.x + 15, tank.y, 5, 20);
            //画出中间矩形
            cxt.fillRect(tank.x + 6, tank.y + 3, 8, 14);
            //画出坦克的盖子
            cxt.fillStyle = color[1];
            cxt.arc(tank.x + 10, tank.y + 10, 4, 0, 2 * Math.PI, true);
            cxt.fill();
            //画出炮筒(直线)
            cxt.strokeStyle = color[1];
            //设置线条的宽度
            cxt.lineWidth = 1.5;
            cxt.beginPath();
            cxt.moveTo(tank.x + 10, tank.y + 10);
            if (tank.direct === 0) {
                cxt.lineTo(tank.x + 10, tank.y);
            } else {
                cxt.lineTo(tank.x + 10, tank.y + 20);
            }
            cxt.closePath();
            cxt.stroke();
            break;
        case 1: //右和左
        case 3:
            cxt.fillStyle = color[0];
            cxt.fillRect(tank.x, tank.y, 20, 5);
            cxt.fillRect(tank.x, tank.y + 15, 20, 5);
            //画出中间矩形
            cxt.fillRect(tank.x + 3, tank.y + 6, 14, 8);
            //画出坦克的盖子
            cxt.fillStyle = color[1];
            cxt.arc(tank.x + 10, tank.y + 10, 4, 0, 2 * Math.PI, true);
            cxt.fill();
            //画出炮筒(直线)
            cxt.strokeStyle = color[1];
            //设置线条的宽度
            cxt.lineWidth = 1.5;
            cxt.beginPath();
            cxt.moveTo(tank.x + 10, tank.y + 10);
            if (tank.direct === 3) {
                cxt.lineTo(tank.x, tank.y + 10);
            } else {
                cxt.lineTo(tank.x + 20, tank.y + 10);
            }
            cxt.closePath();
            cxt.stroke();
            break;
    }

    //不能超出边缘
    if (tank.x < 0) {
        tank.x = 0;
    }
    if (tank.x > WINDOW_WIDTH - 20) {
        tank.x = WINDOW_WIDTH - 20;
    }
    if (tank.y < 0) {
        tank.y = 0;
    }
    if (tank.y > WINDOW_HEIGHT - 20) {
        tank.y = WINDOW_HEIGHT - 20;
    }

    //坦克之间碰撞检测
    for(var i = 0; i < enemyTanks.length; i++){
            if(Math.abs(hero.x - enemyTanks[i].x)<20 && Math.abs(hero.y - enemyTanks[i].y)<20) {
                switch (hero.direct){
                    case 0:
                    hero.moveUp = false;
                    hero.y = enemyTanks[i].y + 20;
                    break;
                    case 1:
                    hero.moveRight = false;
                    hero.x = enemyTanks[i].x - 20;
                    break;
                    case 2:
                    hero.moveDown = false;
                    hero.y = enemyTanks[i].y - 20;
                    break;
                    case 3:
                    hero.moveLeft = false;
                    hero.x = enemyTanks[i].x + 20;
                    break;

                }
            }
    }

    tank.move();
}

function drawHeroBullet() {
    for (var i = 0; i < heroBullets.length; i++) {

        if (heroBullets[i].isLive) {
            console.log(heroBullets.length + "颗子弹运动中...");
            cxt.fillStyle = "white";
            cxt.fillRect(heroBullets[i].x, heroBullets[i].y, 2, 2);
        } else {

        }
        heroBullets[i].move();
    }
}


function drawEnemyBullet() {
    for (var i = 0; i < enemyBullets.length; i++) {

        if (enemyBullets[i].isLive) {
            console.log(enemyBullets.length + "颗子弹运动中...");
            cxt.fillStyle = "white";
            cxt.fillRect(enemyBullets[i].x, enemyBullets[i].y, 2, 2);
        } else {

        }
        enemyBullets[i].move();
    }
}




window.onkeydown = function(ev) {
    var oEvent = ev || event;
    var keyCode = oEvent.keyCode;
    if (hero === undefined) {
        return;
    }
    // alert(keyCode);
    switch (keyCode) {
        case 38:
            hero.direct = 0;
            hero.moveUp = true;
            hero.moveRight = false;
            hero.moveDown = false;
            hero.moveLeft = false;
            console.log("up");
            break;
        case 39:
            hero.direct = 1;
            hero.moveUp = false;
            hero.moveRight = true;
            hero.moveDown = false;
            hero.moveLeft = false;
            console.log("right");
            break;
        case 40:
            hero.direct = 2;
            hero.moveUp = false;
            hero.moveRight = false;
            hero.moveDown = true;
            hero.moveLeft = false;
            console.log("down");
            break;
        case 37:
            hero.direct = 3;
            hero.moveUp = false;
            hero.moveRight = false;
            hero.moveDown = false;
            hero.moveLeft = true;
            console.log("left");
            break;
        case 32:
            console.log("-----------------------------------");
            console.log("shot");
            hero.shotEnemy();
            break;
    }
};


window.onkeyup = function(ev) {
    var oEvent = ev || event;
    var keyCode = oEvent.keyCode;
    if (!hero) {
        return;
    }
    switch (keyCode) {
        case 38:
            if (hero.direct === 0) {
                hero.moveUp = false;
            } else {}
            console.log("up");
            break;
        case 39:
            if (hero.direct === 1) {
                hero.moveRight = false;
            } else {}
            console.log("right");
            break;
        case 40:
            if (hero.direct === 2) {
                hero.moveDown = false;
            } else {}
            console.log("down");
            break;
        case 37:
            if (hero.direct === 3) {
                hero.moveLeft = false;
            } else {}
            console.log("left");
            break;
    }
};


var game = setInterval(flashTankMap, 30);

function flashTankMap() {
    //清除画布
    cxt.clearRect(0, 0, 800, 500);

    //绘制自己坦克
    if (hero !== undefined) drawTank(hero);

    //绘制敌人坦克
    for (var i = 0; i < enemyNumber; i++) {
        drawTank(enemyTanks[i]);
    }

    //绘制自己子弹
    drawHeroBullet();

    //绘制敌人子弹
    drawEnemyBullet();

    for (var i = 0; i < booms.length; i++) {
        drawBoom(booms[i]);
    }

}


function removeByValue(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].bulletId == val) {
            arr.splice(i, 1);
            console.log("删除了bulletId为" + val + "的子弹");
            console.log("还剩下" + heroBullets.length + "颗子弹");
            console.log("-----------------------------------");
            break;
        }
    }
}
