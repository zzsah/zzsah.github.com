$(function() {
    var $t, leftX, newWidth;

    $('.menu ul').append('<div class="block"></div>');
    var $block = $('.block');

    $block.width($(".current").width()).css('left', $('.current a').position().left).data('rightLeft', $block.position().left).data('rightWidth', $block.width());

    $('.menu ul li').find('a').hover(function() {
            $t = $(this);
            leftX = $t.position().left;
            newWidth = $t.parent().width();

            $block.stop().animate({
                left: leftX,
                width: newWidth
            }, 200);
        }, function() {
            $block.stop().animate({
                left: $block.data('rightLeft'),
                width: $block.data('rightWidth')
            }, 200)
        })
        // $($('.menu ul li.current'))[0].setAttribute('id','firstLi');
        // var getClass = $($('.menu ul li.current'))[0].getAttribute('class','current');
        // console.log(getClass)
})

window.onload = function() {
    var oDiv = document.getElementById("play");
    var oBtnPrev = document.getElementById("prev");
    var oBtnNext = document.getElementById("next");
    var oMarkLeft = document.getElementById("mark_left");
    var oMarkRight = document.getElementById("mark_right");
    var aLiBig = document.getElementById("big_pic").getElementsByTagName("li");
    var aLiSmall = document.getElementById("small_pic").getElementsByTagName("li");
    var oSmallUl = document.getElementById("small_pic").getElementsByTagName("ul")[0];
    var nowIndex = 2;
    var now = 0;


    // startMove(aLiSmall[now], "opacity", 100);

    oSmallUl.style.width = aLiSmall[0].offsetWidth * aLiSmall.length + "px";

    oMarkLeft.onmouseover = function() {
        startMove(oBtnPrev, "opacity", 60);
    }

    oMarkLeft.onmouseout = function() {
        startMove(oBtnPrev, "opacity", 0);
    }

    oMarkRight.onmouseover = function() {
        startMove(oBtnNext, "opacity", 60);
    }

    oMarkRight.onmouseout = function() {
        startMove(oBtnNext, "opacity", 0);
    }

    oBtnNext.onmouseover = oBtnPrev.onmouseover = function() {
        startMove(this, "opacity", 100);
    }

    oBtnNext.onmouseout = oBtnPrev.onmouseout = function() {
        startMove(this, "opacity", 60);
    }
    for (var i = 0; i < aLiSmall.length; i++) {
        aLiSmall[i].index = i;
        aLiSmall[i].onclick = function() {
            if (this.index != now) {
                now = this.index;
                changeBig();
            }
        };
        aLiSmall[i].onmouseover = function() {
            startMove(this, "opacity", 100)
        }
        aLiSmall[i].onmouseout = function() {
            if (this.index != now) {
                startMove(this, "opacity", 60)
            }
        }
    }

    oBtnPrev.onclick = function() {
        now = now - 1;
        if (now == -1) {
            now = aLiBig.length - 1;
        }
        changeBig();
    }

    oBtnNext.onclick = function() {
        now = now + 1;
        if (now == aLiBig.length) {
            now = 0;
        }
        changeBig();
    }

    function changeBig() {
        aLiBig[now].style.height = 0 + "px";
        aLiBig[now].style.zIndex = nowIndex++;
        startMove(aLiBig[now], "height", 250);
        for (var i = 0; i < aLiSmall.length; i++) {
            startMove(aLiSmall[i], "opacity", 60);
        }
        startMove(aLiSmall[now], "opacity", 100);

        oBtnPrev.style.zIndex = oBtnNext.style.zIndex = 2 + nowIndex;
        oMarkLeft.style.zIndex = oMarkRight.style.zIndex = 1 + nowIndex;
        if (now > 0 && now < aLiSmall.length - 1) {
            startMove(oSmallUl, "left", -(now - 1) * aLiSmall[0].offsetWidth);
        } else if (now == 0) {
            startMove(oSmallUl, "left", 0);
        } else if (now == aLiSmall.length - 1) {
            startMove(oSmallUl, "left", -(now - 2) * aLiSmall[0].offsetWidth);
        }
    }

    var timer = setInterval(oBtnNext.onclick, 2000);
    oDiv.onmouseover = function() {
        clearInterval(timer);
    }

    oDiv.onmouseout = function() {
        timer = setInterval(oBtnNext.onclick, 2000);
    }
}



function startMove(obj, attr, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var cur = 0;
        if (attr == "opacity") {
            cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
        } else {
            cur = parseInt(getStyle(obj, attr));
        }

        var speed = (target - cur) / 10;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

        if (cur == target) {
            clearInterval(obj.timer);
        } else {
            if (attr == "opacity") {
                obj.style.opacity = (cur + speed) / 100;
                obj.style.filter = "alpha(opacity=" + (cur + speed) + ")";
            } else {
                obj.style[attr] = cur + speed + "px";
            }
        }
    }, 15);

}

function getStyle(obj, name) {
    if (obj.currentStyle) {
        return obj.currentStyle[name];
    } else {
        return getComputedStyle(obj, null)[name];
    }
}
