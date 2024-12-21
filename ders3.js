//dizi (array)
//-biden fazla değer saklar
//-sıralıdır

var notlar = [30, 70, 80, 55];
var ogrenciler = ["batuhan", "erhan", "batu", "adem"];

// console.log(ogrenciler)//tümünü yazdırmek için
// console.log(ogrenciler[3])//tek bir eleanı yazdırmak için
//kşeli parantez icine yazlan sayı :sra numarası (index) 0d dan başlar

// // eleman ekleme
// console.log(ogrenciler)
// ogrenciler.push("ahmet")
// console.log(ogrenciler)

// //eleman silme
// console.log(ogrenciler)
// ogrenciler.pop()//son elemanı siler
// console.log(ogrenciler)

var silinicekelemanınIndexi = ogrenciler.indexOf("erhan");
// console.log(silinicekelemanınIndexi);
ogrenciler.splice(silinicekelemanınIndexi, 1);
//ilk belirtilen sayıdan başlaıp ikinci belirten sayı kadar eleman siler
console.log(ogrenciler);

//sıralama
ogrenciler.sort()//büyükten küçüğe ve A dan Z ye
ogrenciler.reverse()//küçükten büyüğe
console.log(ogrenciler)

console.log(ogrenciler.length)//leght (uzunluk)
console.log("mutlu yıllar".length)
