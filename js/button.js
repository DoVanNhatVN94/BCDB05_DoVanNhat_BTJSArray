var count1 = 0;

document.getElementById("brnTT").onclick = function () {
    if (count1 == 0) {
        document.getElementById("form_1").style.height = "100%";
        count1++;
    }
    else{
        document.getElementById("form_1").style.height = "100%";
        count1--;
    }
}