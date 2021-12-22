var mang = [];
console.log(mang);
document.getElementById("btnArray").onclick = function () {
    var num = Number(document.getElementById("inpArray").value);
    mang.push(num);

    document.getElementById("txtArray").innerHTML = "Mảng là: " + mang;
}

document.getElementById("btnTinhTong").onclick = function () {
    var sum = 0;
    for (var i = 0; i < mang.length; i++)
        if (mang[i] > 0)
            sum += mang[i];

    document.getElementById("txtBai1").innerHTML = "Tổng các số trong mảng " + sum;
}

document.getElementById("btnDemSoDuong").onclick = function () {
    var count = 0;
    for (var i = 0; i < mang.length; i++)
        if (mang[i] > 0)
            count++;

    document.getElementById("txtBai2").innerHTML = "Có bao nhieu so duong trong mảng " + count;

}
document.getElementById("btnTimSoNhoNhat").onclick = function () {
    var a = mang[0];
    for (var i = 0; i < mang.length; i++)
        if (a > mang[i])
            a = mang[i];
    document.getElementById("txtBai3").innerHTML = "Số nhỏ nhất trong mảng là " + a;

}

document.getElementById("btnTimSoDuongNhoNhat").onclick = function () {
    var a = mang[0];
    for (var i = 0; i < mang.length; i++)
        if (mang[i] > 0 && a > mang[i])
            a = mang[i];

    document.getElementById("txtBai4").innerHTML = "Số dương nhỏ nhất trong mảng là " + a;
}

document.getElementById("btnTimSoChanCuoiCung").onclick = function () {
    var a = mang[0];
    for (var i = 0; i < mang.length; i++)
        if (mang[i] % 2 == 0)
            a = mang[i];

    if (a % 2 != 0)
        a = -1;

    document.getElementById("txtBai5").innerHTML = "Số chăn cuois cùng là " + a;

}
document.getElementById("btnDoiCho2ViTri").onclick = function () {
    var a = [];
    var num = 0;
    var x = Number(document.getElementById("inpViTriX").value);
    var y = Number(document.getElementById("inpViTriY").value);
    for (var i = 0; i < mang.length; i++)
        a[i] = mang[i];
    num = a[x];
    a[x] = a[y];
    a[y] = num;
    document.getElementById("txtBai6").innerHTML = "Mảng sau khi thay đổi :" + a;
}

document.getElementById("btnXapXepTangDan").onclick = function () {
    var a = [];
    var num = 0;
    for (var i = 0; i < mang.length; i++)
        a[i] = mang[i];

    for (var i = 0; i < a.length; i++)
        for (var j = 0; j < mang.length - 1; j++)
            if (a[j] > a[j + 1]) {
                num = a[j];
                a[j] = a[j + 1];
                a[j + 1] = num;
            }
    document.getElementById("txtBai7").innerHTML = "Mảng sau khi xap xep :" + a;
}

document.getElementById("btnTimSoNguyenTo").onclick = function () {

    var num = -1;
    for (var i = 0; i < mang.length; i++)
        if (kiemTraSNT(mang[i]) == 0) {
            num = mang[i];
            break
        }
    document.getElementById("txtBai8").innerHTML = "so nt la: " + num;

}

function kiemTraSNT(n) {
    if (n < 2)
        return 1;
    else {
        for (var i = 2; i < n / 2; i++)
            if (n % i == 0)
                return 1;
        return 0;
    }
}

var mang2 = [];
console.log("mang moi : " + mang2);
document.getElementById("btnArray2").onclick = function () {
    var num2 = Number(document.getElementById("inpArray2").value);
    mang2.push(num2);

    document.getElementById("txtArray2").innerHTML = "Mảng mới là: " + mang2;
}
document.getElementById("btnDemSoNguyen").onclick = function () {
    count = 0;
    for (var i = 0; i < mang2.length; i++)
        if (Number.isInteger(mang2[i]) == true)
            count++;

    document.getElementById("txtBai9").innerHTML = "Các số nguyên trong mảng là " + count;

}
document.getElementById("btnSoSanhAD").onclick = function () {
    var countD = 0;
    var countA = 0;
    for (var i = 0; i < mang.length; i++) {
        if (mang[i] > 0)
            countD++;
        else if (mang[i] < 0)
            countA++;
    }
    if (countD > countA)
        document.getElementById("txtBai10").innerHTML = "Số dương > Số âm";
    else if (countD < countA)
        document.getElementById("txtBai10").innerHTML = "Số âm > Số dương";
    else if (countD == countA)
        document.getElementById("txtBai10").innerHTML = "Số âm = Số dương"

}
