//atama oparetörleri
// var a = 5;
//a = 10
// a= a + 10
//a += 10
//a+= a%=2
// alert(a)
//işlem önceliği
//var a = 8+2*4 //bu şekilde 16
//var a= ( 8+2) *4 buşekilde 40
//var ortalma = (60 +70+30)/3
//allert (ortalama)

//kullanıcıdan bilgi almak için prompt fonksiyonu kullanılır
//kullanıcının verdiği bilgi sadece sayı bile olsa tırnak içinde
//string olarak verilir

var name = prompt("adın ne?")
var not1 = prompt("1. sınav notun kaç?")
var not2 = prompt("2. sınav notun kaç?")

//intenger (tam sayı) ayıklayıcı
not1 = parseInt(not1) //stringin içersindeki sayıyı (intenger) ayıklar
not2 = parseInt(not2)// stringin içersindeki sayıyı (intenger) ayıklar

var ortalama =(not1+not2) / 2

console.log("merhaba," + name)
console.log("not ortalaman" + ortalama);

//ÖDEV//
//Öğrencinin adını alın
//iki adet dersin adını alın
// iki adet dersin ikişer ikişer sınav notunu alın
//bu iki dersin not ortalamasını hesaplayın
//ardında öğrenciler genel ortalamasını hesaplayın
//en sonunda tüm notları konsola yazdırın