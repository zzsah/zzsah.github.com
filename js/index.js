window.onload = function() {
    setWidth();
    setHeight();
    showLink();
    showTime();
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

function showLink() {
    var link = document.getElementsByTagName("aside")[0].getElementsByTagName("a");
    for (var i = 0; i < link.length; i++) {
        if (i > 0) {
            link[i].innerHTML = i + "、" + link[i].innerHTML;
            link[i].setAttribute("href", "./demos/" + toTreble(i) + "/" + toTreble(i) + ".html");
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
