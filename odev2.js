var name = prompt("adın ne?");
var dersadı = prompt("hangi ders?");
var sınav11 = prompt("1.dönem 1. yazılı notun kaç?");
var sınav12 = prompt("1.dönem 2.yazılı notun kaç?");
sınav11 = parseInt(sınav11);
sınav12 = parseInt(sınav12);
var ortalama1 = (sınav11 + sınav12) / 2;

var dersadı2 = prompt("diğer ders hangisi?");
var sınav21 = prompt("2. dönem 1.yazlı sınav notun kaç?");
var sınav22 = prompt("2.dönem 2. yazılı sınav notun kaç?");
sınav21 = parseInt(sınav21);
sınav22 = parseInt(sınav22);
var ortalama2 = (sınav21 + sınav22) / 2;

var ortalama3 = (ortalama1 + ortalama2) / 2;

console.log("Merhaba", name);
console.log("1.dönem ders ortalaman " + ortalama1);
console.log("2.dönem ders ortalaman " + ortalama2);
console.log("yıl sonu ortalaman " + ortalama3);
