   var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
var timer = false;
var c = 0;



function start() {
    timer = true;
    if (c == 0) {
        stopwatch();
        c = 1; 
    }

}

function stop() {
    timer = false;
    stopwatch();
    c = 0;
}
function reset() {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    c = 0
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";

}
document.getElementById("lap").addEventListener("click", () => {
    Abc();

})

function Abc() {
    let di = document.createElement("div");
    di.classList = "di";
    let sp = document.createElement("p");
    let out = document.getElementById("output");
    sp.innerText = hr + "hr" + min + "min" + sec + "sec" + count;

    di.append(sp);
    out.append(di);
    


}


function stopwatch() {
    if (timer == true) {
        count = count + 1;



        if (count == 100) {
            sec = sec + 1;
            count = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;

            count = 0;
        }

        if (min == 60) {
            hr = hr + 1;
            min = 0;
        }

        var hrstring = hr;
        var minstring = min;
        var secstring = sec;
        var countstring = count;

        if (secstring < 10) {
            secstring = "0" + secstring;
        }
        if (min < 10) {
            minstring = "0" + minstring;
        }
        if (hr < 10) {
            hrstring = "0" + hrstring;
        }
        if (count < 10) {
            countstring = "0" + countstring;
        }

        document.getElementById('hr').innerHTML = hrstring;
        document.getElementById('min').innerHTML = minstring;
        document.getElementById('sec').innerHTML = secstring;
        document.getElementById("count").innerHTML = count;
        setTimeout("stopwatch()", 10);
    }
}