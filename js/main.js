var mang = [3, -12, 2, 1, 8, 2, -6];
console.log(mang);


function tinhTong() {
    var sum = 0;
    for (var i = 0; i < mang.length; i++)
        sum += mang[i];

    console.log("Tổng các số trong mảng " + sum);
}
tinhTong();

function demSoDuong() {
    var count = 0;
    for (var i = 0; i < mang.length; i++)
        if (mang[i] > 0)
            count++;

    console.log("Có bao nhieu so duong trong mảng " + count);
}
demSoDuong();

function timSoNhoNhat() {
    var a = mang[0];
    for (var i = 0; i < mang.length; i++)
        if (a > mang[i])
            a = mang[i];

    console.log("Số nhỏ nhất trong mảng là " + a);
}
timSoNhoNhat();

function timSoDuongNhoNhat() {
    var a = mang[0];
    for (var i = 0; i < mang.length; i++)
        if (mang[i] > 0 && a > mang[i])
            a = mang[i];


    console.log("Số dương nhỏ nhất trong mảng là " + a);
}
timSoDuongNhoNhat();

function timSoChanCuoiCung() {
    var a = mang[0];
    for (var i = 0; i < mang.length; i++)
        if (mang[i] % 2 == 0)
            a = mang[i];

    if (a % 2 != 0)
        a = -1;
    console.log("Số chăn cuois cùng là " + a);
}
timSoChanCuoiCung();


function doiCho2ViTri() { 
    var a = [];
    var num = 0;
    var x = 1;
    var y =2;
    for (var i = 0; i < mang.length; i++)
    a[i] = mang[i];

    console.log("Mảng trước khi thay đổi :"+a);

    num = a[x];
    a[x] = a[y];
    a[y] = num;
    console.log("Mảng sau khi thay đổi :"+a);
 }
 doiCho2ViTri();

 function xapXepTangDan(){
    var a = [];
    var num = 0;
    for (var i = 0; i < mang.length; i++)
    a[i] = mang[i];

    for(var i=0;i<a.length;i++)
    for (var j = 0; j < mang.length-1; j++)
        if(a[j]>a[j+1]){
            num = a[j];
            a[j] = a[j+1];
            a[j+1] = num;
        }

        console.log("Mảng sau khi xap xep :"+a);
 }
 xapXepTangDan();

 function demSoNguyen(){
     var a = [1,2,-3,-5,0.5,1.9,10.1,2]
     console.log("Mảng :"+a);
     count = 0;
     for(var i=0;i<a.length;i++)
     if(Number.isInteger(a[i])==true)
     count++;
    
    console.log("Các số nguyên trong mảng là "+count);
     
 }
 demSoNguyen();

 function soSanhSoDA(){
     var countD =0;
     var countA =0;
     for (var i = 0; i < mang.length; i++){
         if(mang[i]>0)
         countD++;
         else if(mang[i]<0)
         countA++;
     }
     if(countD>countA)
     console.log("Số dương > Số âm");
     else if(countD<countA)
     console.log("Số âm > Số dương");
     else if(countD==countA)
     console.log("Số âm = Số dương");
 }
 soSanhSoDA();