//事件绑定
var oBtn = document.getElementById("btn1");
if (oBtn.attachEvent) {  //IE写法：obj.attachEvent(事件名，函数)；
    oBtn.attachEvent("onclick", function() {
        alert("do something");
    });
    oBtn.attachEvent("onclick", function() {
        alert("do something too");
    });
} else {                 //FF写法：obj.addEventListener(事件名，函数，false)；
    oBtn.addEventListener("click", function() {
        alert("do something");
    },false);
    oBtn.addEventListener("click", function() {
        alert("do something too");
    },false);
}

//事件绑定函数
function addEvent(obj,ev,fn){
    if (oBtn.attachEvent) {
        obj.attachEvent("on" + ev,fn);
    }else{
        obj.addEventListener(ev,fn,false);
    }
}

//加载函数
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        };
    }
}


//事件对象
function getXY() {
    document.onclick = function(ev) {
        //IE
        //event.clientX + "," + event.clientY;

        //FF
        //ev.clientX + "," + ev.clientY;

        var oEvent = ev || event; //兼容写法

        alert(oEvent.clientX + "," + oEvent.clientY);
    };
}

function getPosition(ev) {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;

    return { x: ev.clientX + scrollLeft, y: ev.clientY + scrollTop };
}

window.onmousemove = function(ev) {
    var oEvent = ev || event;
    var oTest = document.getElementById("test");
    var oDiv = document.getElementById("div1");

    oTest.value = oEvent.clientX + " , " + oEvent.clientY;
    oDiv.style.left = getPosition(oEvent).x + "px";
    oDiv.style.top = getPosition(oEvent).y + "px";

};



//事件冒泡
var oBtn = document.getElementById("btn1");
oBtn.onclick = function(ev) {
    var oEvent = ev || event;
    oEvent.cancelBubble = true; //取消冒泡事件
    alert("按钮被点击了");

};
document.onclick = function(ev) {
    var oEvent = ev || event;
    alert("document被点击了");
};

//获取滚动距离
//IE、FF支持document.documentElement.scrollTop
//chrome支持doucument.body.scrollTop
var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

//获取外部样式
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr]; //IE的写法
    } else {
        return getComputedStyle(obj, null)[attr]; //火狐的写法
    }
}

//缓冲运动
function startMove(obj, json, fnEnd) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var bStop = true;
        for (var attr in json) {
            var cur = 0;
            if (attr == "opacity") {
                cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
            } else {
                cur = parseInt(getStyle(obj, attr));
            }
            var speed = (json[attr] - cur) / 6;
            speed = (speed > 0) ? Math.ceil(speed) : Math.floor(speed);
            if (cur != json[attr]) {
                bStop = false;
            }
            if (attr == "opacity") {
                obj.style[attr] = (cur + speed) / 100;
                obj.style.filter = "alpha(opacity=" + parseInt(cur + speed) + ")";
            } else {
                obj.style[attr] = parseInt(cur + speed) + "px";
            }
        }
        if (bStop) {
            clearInterval(obj.timer);
            if (fnEnd) fnEnd();
        }
    }, 15);
}
