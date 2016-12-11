window.onload = function() {
    setWidth();
    setHeight();
    showLink();
    showTime();
    showChapter();
    setInterval(showTime, 30);
};

window.onresize = function() {
    setWidth();
    setHeight();
};

function setHeight() {
    var height = window.innerHeight;
    var aside = document.getElementsByTagName("aside")[0];
    var logoHeight = document.getElementById("logo").offsetHeight;
    var headerHeight = document.getElementsByTagName("header")[0].offsetHeight;
    var footerHeight = document.getElementsByTagName("footer")[0].offsetHeight;
    var iframe = document.getElementById("iframeBox");
    var demoList = document.getElementById("demoList");
    aside.style.height = height - footerHeight + "px";
    demoList.style.height = height - (logoHeight + footerHeight + 20) + "px";
    iframe.style.height = height - (headerHeight + footerHeight) + "px";
}

function setWidth() {
    var width = window.innerWidth;
    var container = document.getElementById("container");
    var content = document.getElementById("content");
    var asideWidth = document.getElementsByTagName("aside")[0].offsetWidth;
    if (width > asideWidth) {
        container.style.width = width + "px";
        content.style.width = (width - asideWidth) + "px";
    }
}

function showIframe(link) {
    var iframeBox = document.getElementById("showHTML");
    var oldLink = iframeBox.getAttribute("src");
    iframeBox.setAttribute("src", link);
}



function showChapter() {
    var oH1 = document.getElementById("demoList").getElementsByTagName("h1");
    var hiddenHeight = 0;
    var oldHeight = 0;
    var numberOfLi = 0;
    var oLi = null;
    var nowObj = null;
    for (var i = 0; i < oH1.length; i++) {
        oLi = oH1[i].parentNode.getElementsByTagName("li");
        oH1[i].className = "unCheckedH1";
        hiddenHeight = parseInt(getStyle(oH1[0], "height"));
        oH1[i].innerHTML = oH1[i].innerHTML + "(" + oLi.length + ")";
        oH1[i].onclick = function() {
            nowObj = this;
            switchComboBox(nowObj);
        };
    }

    function switchComboBox(nowObj) {
        for (var j = 0; j < oH1.length; j++) {
            oH1[j].className = "unCheckedH1";
            startMove(oH1[j].parentNode, { height: hiddenHeight });
        }
        numberOfLi = nowObj.parentNode.getElementsByTagName("a").length;
        oldHeight = hiddenHeight * (numberOfLi + 1);
        if (nowObj.parentNode.offsetHeight == hiddenHeight) {
            nowObj.className = "checkedH1";
            startMove(nowObj.parentNode, { height: oldHeight });
        } else {
            nowObj.className = "unCheckedH1";
            startMove(nowObj.parentNode, { height: hiddenHeight });
        }
    }
}

function showLink() {
    var link = document.getElementsByTagName("aside")[0].getElementsByTagName("a");
    for (var i = 0; i < link.length; i++) {
        if (i > 0) {
            link[i].className = "unChecked";
            link[i].innerHTML = i + "、" + link[i].innerHTML;
            // link[i].setAttribute("href", "./demos/" + toTreble(i) + "/" + toTreble(i) + ".html");
        }

        link[i].onclick = function() {
            for (var a in link) {
                link[a].className = "unChecked";
            }
            this.className = "checked";
            showIframe(this.getAttribute("href"));
            return false;
        };
    }
}

function showTime() {
    var footer = document.getElementsByTagName("footer")[0];
    var myDate = new Date();
    footer.innerHTML = "ahahh";
    var year = myDate.getFullYear();
    var month = myDate.getMonth();
    var day = myDate.getDay();
    var hours = myDate.getHours();
    var minutes = myDate.getMinutes();
    var seconds = myDate.getSeconds();
    footer.innerHTML = year + '年' + month + '月' + day + '日' + toDouble(hours) + ':' + toDouble(minutes) + ':' + toDouble(seconds) + ' ' + '挖坑填坑中...';
}

function toDouble(num) {
    if (num < 10) {
        numDouble = "0" + num;
        return numDouble;
    } else {
        return num;
    }
}

function toTreble(num) {
    if (num < 10) {
        num = "00" + num;
        return num;
    } else if (num < 100) {
        num = "0" + num;
        return num;
    } else {
        return num;
    }
}

function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, null)[attr];
    }
}

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
            var speed = (json[attr] - cur) / 10;
            speed = (speed > 0) ? Math.ceil(speed) : Math.floor(speed);
            if (cur != json[attr]) {
                bStop = false;
            }
            if (attr == "opacity") {
                obj.style[attr] = parseInt(cur + speed) / 100;
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
