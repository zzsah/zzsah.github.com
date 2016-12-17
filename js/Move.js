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
            if (fnEnd) { fnEnd() }
        }
    }, 15);
}
