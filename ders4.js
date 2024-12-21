var dersadlari = []
var notlar =[]
var dersadi =""
var not =0

dersadi = prompt("1.dersin adı nedir?")
dersadlari.push(dersadi)
not = parseFloat(prompt("1.dersin 1.notunu giriniz?"))
notlar.push(not)
not = parseFloat(prompt("1.dersin 2.dersin notunu giriniz"))
notlar.push(not);



dersadi = prompt("2.dersin adı nedir?");
dersadlari.push(dersadi);
not = parseFloat(prompt("2.dersin 1.notunu giriniz?"));
notlar.push(not);
not = parseFloat(prompt("2.dersin 2.dersin notunu giriniz"));
notlar.push(not);

ortalama = (notlar[0] + notlar[1] + notlar[2] + notlar[3]) /4 
console.log(ortalama)

