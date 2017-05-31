"use strict";

var RS = (function() {
    var rsOuter = document.getElementById("rs-outer"),
        rsPart = document.getElementsByClassName("rs-seg"),
        rsSpace = document.getElementById("rs-space"),
        rsBtn = document.getElementsByClassName("rs-btn"),
        rsCurId = "rs-current",
        init = function(e) {
            e.id = "";
        },
        specilize = function(e, f) {
            e.id = rsCurId;
            f && f.call(this, e, parseInt(e.getAttribute("data-index")));
        },
        startToggle = function(timespan, toggleTimer, rollTimer, width, speed, func) {
            toggleTimer = setInterval(function() {
                startRoll(rollTimer, width, speed, func);
            }, timespan);
        },
        stopToggle = function(toggleTimer) {
            clearInterval(toggleTimer);
        },
        startRoll = function(rollTimer, width, speed, func) {
            var o = rsPart[0],
                n = rsPart[1];
            init(o);
            specilize(n, func);
            rollTimer = setInterval(function() {
                rsOuter.style.left = rsOuter.offsetLeft - 1 / speed * width + "px";
                if (rsOuter.offsetLeft < -width) {
                    rsOuter.appendChild(o);
                    rsOuter.style.left = "0px";
                    stopRoll(rollTimer);
                }
            }, 1);
        },
        stopRoll = function(rollTimer) {
            clearInterval(rollTimer);
        },
        goToRoll = function(index, func) {
            init(rsPart[0]);
            specilize(rsPart[index], func);

			var arr = [];
			var n = index,
                m = 0,
                l = rsPart.length;

			while(rsPart.length) {
				if (rsPart[m].getAttribute("data-index") === n.toString()) {
					arr.push(rsPart[m].cloneNode(true));
					rsOuter.removeChild(rsPart[m]);
					n++;
                    n = n >= l ? 0 : n;
					m = 0;
                    continue;
				}
                m++;
			}

			for(var i = 0; i < arr.length; i++) {
				rsOuter.appendChild(arr[i]);
			}
        };

    return function(l, s, t, v, f) {
        var w = parseInt(s.width),
            h = parseInt(s.height),
            toggleTimer = null,
            rollTimer = null;

        rsPart[0].id = rsCurId;
        f.call(this, rsPart[0], 0);

        for(var i = 0; i < rsPart.length; i++) {
            rsPart[i].style.float = "left";
            rsPart[i].style.width = s.width;
            rsPart[i].style.height = s.height;
			rsPart[i].setAttribute("data-index", i);
        }

        rsSpace.style.position = "relative";
        rsSpace.style.overflow = "hidden";
        rsSpace.style.height = h + "px";
        rsSpace.style.width = w + "px";

        rsOuter.style.position = "absolute";
        rsOuter.style.zIndex = "10";
        rsOuter.style.width = l * w + "px";
        rsOuter.style.height = h + "px";
        rsOuter.style.left = "0px";

        startToggle(t, toggleTimer, rollTimer, w, v, f);

        for(var i = 0; i < rsBtn.length; i++) {
            (function(index, func) {
                rsBtn[index].onclick = function() {
                    goToRoll(index, func);
                }
            })(i, f);
        }
    }
})();
