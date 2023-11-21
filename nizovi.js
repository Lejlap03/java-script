// niz = [1,2,3,4]
//split razdvaja
//join spaja -
//concat spaja dva niza
//niz.reverse
//niz.push dodaje na kraju
//niz.pop uzima poslednji clan iz pusha i brise ga
//niz.shift sklanja prvi element i pomera ga izbacuje prvi element
//niz.unshift dodaje na mesto prvog elementa
//delete niz empty-nadje clan obrise ga i ostavi prazno polje
//slice uzima taj element i brise ostalo
//flat sklanja zagrade = matrice pretvara u niz
//splice odakle pocinje i brisemo 
//araj sort iet cons

// let brojevi = [1,5,9,4,6,3]
// console.log(brojevi.sort());
// console.log(brojevi.reverse());

////////////////////////////////////2. cas/////////////////////////////////////
//sort

// let niz = [0,5,7,8,3,9,1]

// niz.sort((a,b) => a-b )
// console.log(niz);

// niz.reverse()
// console.log(niz);

// console.log(Math.max(0,1,2,3,4));
// console.log(Math.max(...niz)); //spreding operator
// console.log(Math.min(...niz));

//objekat kao paket u kome stavljamo niz..

// let objekat = {
//     "ime": "Lejla",
//     "prezime" : "prusevic",
//     "brojGodina" : "20",
//     "function": function nesto(){
//         return true
//     },  
    
//     "mestoStanovanja" : {

//     }
// }

// let objekat2 = {...objekat, "mestoStanovanja": {...objekat.mestoStanovanja}}

// let niz = [1,2,3,4,5,6,78,8,9,0]
// let niz3 =[... niz]
// niz3.push(10)
// console.log(niz3);
// console.log(niz);

// let niz = [1,2,3,4,5,6,78,8,9,0]
// let niz3 = [...niz].sort((a,b)=>a-b);
// console.log(niz);
// console.log(niz3);


///ITERATION

// let niz = [1,2,3,4,5,6,78,8,9,0]

// for(let clan of niz){
//     console.log(clan);
// }



//+
// niz.forEach((clan,i, array)=>{ //forpetlja

//     console.log(i+clan);
//     console.log(array);
// })


//map - na svakom clanu radi nesto i vraca ga

// let niz2 = niz.map((clan, i)=>{
//    return clan*clan
// })

// console.log(niz);
// console.log(niz2);

// let niz3 = niz.filter((clan,i)=>{
//     if(clan%2===0){
//         return clan
//     }
// })


//reduce vraca jedan broj a ne niz uzima 

// let suma = niz.reduce((a,b) =>){
// }

//every da li su svi elementi deljivi sa dva ali na treba true/false
//some elements


// let res= niz.every(clan =>{
//     if(clan%2 ==0){
//         return true
//     }
// })
// console.log(res);

// let resSome = niz.some(clan=>{
//     if(clan%3===0){
//         return true
//     }
// })
// console.log(resSome);



//find vraca prvi element na kooji naidje
// let res = niz.find(clan=>{
//     if(clan%2===0){
//         return clan
//     }
// })

// console.log(res);

//from radi sto i split


//////////////10.4

// let elementiNiza = parseInt(prompt('Unesite elemente: '))
// let niz = [];

// for(let i=0; i<elementiNiza; i++){
//     let clan = parseInt(prompt('Unesite clanove'))
//     niz.push(clan)
// }
// console.log(niz);

//10.5

// let elementiNiza = parseInt(prompt('Unesite elemente: '))
// let niz = [];

// for(let i=0; i<elementiNiza; i++){
//     let clan = parseInt(prompt('Unesite clanove'))
//     niz.push(clan)
// }
// niz.reverse();
// console.log(niz);


//10.7


// let elementiNiza = parseInt(prompt('Unesite elemente: '))
// let niz = [];


// for(let i=0; i<elementiNiza; i++){
//     let clan = parseInt(prompt('Unesite clanove'))
//     niz.push(clan)     
// }
// let suma = niz.reduce((a,b) => {
//     return a+b
// })
    
// console.log(`aritmeticka sredina ${suma/elementiNiza}`);


//domaci: 10.8/10.9 +obnoviti sta koja funkcija radi

// let niz2 = niz.flatMap(el => el > 3 ? el : 0)
// let niz2 = niz.flatMap(el => el > 3 ? el : 0)

////////////////////////NIZOVI 2. CAS  tarik git hub

// let niz = [0, 5, 4, 7, 3, 8, 9, 1];

// niz.sort((a, b) => a - b);

// console.log(niz);

// niz.reverse()

// console.log(niz);

// console.log(Math.max(...niz));
// console.log(Math.min(...niz));

// console.log(objekat);

// let objekat = {
//   ime: "Tarik",
//   prezime: "ibrahimovic",
//   brojGodina: 5,
//   ozenjen: false,
//   projekti: [1, 2, 3, 4, 5],
//   function: function nesto() {
//     return true;
//   },
//   mestoStanovanja: {
//     grad: "Novi Pazar",
//     ulica: "Rajka Ackovica",
//     broj: "BB",
//   },
// };

// let objekat2 = {
//   ime: "Hasan",
//   prezime: "ibrahimovic",
//   brojGodina: 10,
//   ozenjen: false,
//   projekti: [1, 2, 3, 4, 5],
//   function: function nesto() {
//     return true;
//   },
//   mestoStanovanja: {
//     grad: "Novi Pazar",
//     ulica: "Rajka Ackovica",
//     broj: "BB",
//   },
// };

// let objekat3 = {
//   ime: "Amer",
//   prezime: "ibrahimovic",
//   brojGodina: 15,
//   ozenjen: false,
//   projekti: [1, 2, 3, 4, 5],
//   function: function nesto() {
//     return true;
//   },
//   mestoStanovanja: {
//     grad: "Novi Pazar",
//     ulica: "Rajka Ackovica",
//     broj: "BB",
//   },
// };

// // console.log(objekat);

// let objekat2 = {...objekat, "mestoStanovanja": {...objekat.mestoStanovanja}}

// // console.log(objekat2);

// objekat2.ime = "Amer"
// objekat2.mestoStanovanja.broj = "10"

// console.log(objekat2);

// console.log(objekat);

// let niz2 = [objekat, objekat2, objekat3];

// console.log(niz2);

// niz2.sort((a, b) => a.brojGodina + b.brojGodina)

// console.log(niz2);

// const cars = [
//     {type:"Volvo", year:2016},
//     {type:"Saab", year:2001},
//     {type:"BMW", year:2010}
//   ];

//   cars.sort(function(a, b){return a.year - b.year});

//   niz2.sort((a,b) => a.brojGodina - b.brojGodina)

//   console.log(niz2);
//   console.log(cars);

// let niz = [1,5,4,6,78,3,5,9,4];

// let niz3 = [...niz];

// let niz3 = [...niz].sort((a,b) => a-b);

// console.log(niz);

// niz3.push(10)

// console.log(niz3);

// let niz = [0, 5, 4, 7, 3, 8, 9, 1];

// for(let i = 0; i<niz.length; i++){
//     console.log(niz[i]);
// }

// for(let clan of niz){
//     console.log(clan);
// }

// niz.forEach((clan, i, array) => {
//     if(clan % 2 === 0){
//         console.log(i + " " + clan);
//     }
//     else {
//         console.log("neparni brojevi " + clan + " "+ i);
//     }
//     console.log(array);
// })

// niz = niz.map((clan, i) => {
//     return clan*clan
// })

// console.log(niz);
// console.log(niz2);

// niz = niz.filter((clan, i) => {
//     if(clan % 2 === 0){
//         return clan
//     }
// })

// console.log("Filterovan niz: " + niz);

// let niz4 = niz.flatMap((clan) => clan*2)

// console.log(niz4);

// let matrica = [[1,2,3], [4,5,6], [7,8,9]]

// console.log(matrica.flat());

// let suma = niz.reduce((a, b) => {
//     return a + b
// })

// console.log(suma);

// let res = niz.every(clan => {
//     if(clan % 2 === 0){
//         return true
//     }
// })

// console.log(res);

// let resSome = niz.some(clan => {
//     if(clan % 3 === 0) {
//         return true
//     }
// })

// console.log(resSome);

// let res = niz.find(clan => {
//     if(clan % 3 === 0){
//         return clan
//     }
// })

// console.log(res);

// 10.4. Саставити програм који ће учитати низ од n елемената и исписати их оним редоследом којим
// су учитани.

// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz = []

// for(let i = 0; i < brojClanova; i++){
//     let broj = parseFloat(prompt("Unesite broj:"))
//     niz.push(broj)
// }

// console.log(niz);

// 10.5. Саставити програм који ће учитати низ од n елемената и исписати их обрнутим редоследом.

// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz = []

// for(let i = 0; i < brojClanova; i++){
//     let broj = parseFloat(prompt("Unesite broj:"))
//     niz.push(broj)
// }

// console.log(niz.reverse());

// 10.7. Саставити програм за израчунавање и исписивање аритметичке средине задатог низа (дужине
//     n) целих бројева

// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz = []

// for(let i = 0; i < brojClanova; i++){
//     let broj = parseFloat(prompt("Unesite broj:"))
//     niz.push(broj)
// }

// let suma = niz.reduce((a, b) => {
//     return a + b
// })

// console.log(`Aritmeticka sredina je: ${suma/brojClanova}`)



///////////////////////////////DOMACI\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

/////////////////////////////10.8
///prvi nacin
// let elementiNiza = parseInt(prompt('Unesite elemente: '))
// let niz = [];

// for(let i=0; i<elementiNiza; i++){
//     let clan = parseInt(prompt('Unesite clanove'))
//     niz.push(clan)     
// }

// let brojevi = niz.filter(clan => clan % 3 === 0);

// let suma = brojevi.reduce((a, b) => {
//         return a + b
//     })
      
// console.log(`aritmeticka sredina ${suma/brojevi.length}`);


/////3 cas

//drugi nacin 10.8

// let elementiNiza = parseInt(prompt('Unesite elemente: '))
// let niz = [];

// for(let i=0; i<elementiNiza; i++){
//     let clan = parseInt(prompt('Unesite clanove'))
//     niz.push(clan)     
// }
// let res=0;
// let t=0;
// niz.forEach((clan)=>{
//     if(clan%3===0){
//         t++;
//         res+=clan;
//     }
// })
// console.log(`aritmetricka sredina ${res/t}`);

//10.9
//a

// let elementiNiza = parseInt(prompt('Unesite elemente: '))
// let niz = [];

// for(let i=0; i<elementiNiza; i++){
//     let clan = parseInt(prompt('Unesite clanove'))
//     niz.push(clan);  
// }

// let resParnih = 0;
// let resNeparnih = 0;

// niz.forEach((clan)=>{
//     clan%2 ===2 ? resParnih +=clan : resNeparnih +=clan 
// })

// console.log(`zbir parnih je: ${resParnih}, a neparnih je ${resNeparnih}`);

//b

// let elementiNiza = parseInt(prompt('Unesite elemente: '))
// let niz = [];

// for(let i=0; i<elementiNiza; i++){
//     let clan = parseInt(prompt('Unesite clanove'))
//     niz.push(clan,i);  
// }

// let resParnih = 0;
// let resNeparnih = 0;

// niz.forEach((clan)=>{
//    i%2 ===2 ? resParnih +=clan : resNeparnih +=clan 
// })

// console.log(`zbir parnih je: ${resParnih}, a neparnih je ${resNeparnih}`);


//10.11

// let elementiNiza = parseInt(prompt('Unesite elemente: '))
// let niz = [];

// for(let i=0; i<elementiNiza; i++){
//     let clan = parseInt(prompt('Unesite clanove'))
//     niz.push(clan);  
// }


// let elementiNizab = parseInt(prompt('Unesite elemente: '))
// let niz2 = [];

// for(let i=0; i<elementiNizab; i++){
//     let clan = parseInt(prompt('Unesite clanove'))
//     niz.push(clan);  
// }
// console.log(niz.concat(niz,niz2));


//10.12


// let elementiNiza = parseInt(prompt('Unesite elemente: '))
// let niz = [];

// for(let i=0; i<elementiNiza; i++){
//     let clan = parseInt(prompt('Unesite clanove'))
//     niz.push(clan);  
// }

// let niz2 = [];

// for(let i=0; i<elementiNiza; i++){
//     let clan = parseInt(prompt('Unesite clanove'))
//     niz2.push(clan);  
// }

// let niz3= niz.map((el,i)=>{
//     return el+niz2[i]
// })
// console.log(niz3);

///10.14

// let elementiNiza = parseInt(prompt('Unesite elemente: '))
// let niz = [];

// for(let i=0; i<elementiNiza; i++){
//     let clan = parseInt(prompt('Unesite clanove'))
//     niz.push(clan);  
// }

// let niz2 = [];
// for(let i=0; i<elementiNiza; i++){
//     let clan = parseInt(prompt('Unesite clanove'))
//     niz2.push(clan);  
// }

// niz2.reverse() 
// let niz3= niz.map((el,i)=>{
//     return el+niz2[i]
// })
// console.log(niz3);
//ili

// let niz3=[]
//     niz.forEach((el,i)=>{
//         niz3.push(el+ niz2[niz2.length-i-1])
//     })
// console.log(niz3);


//10.15

// let elementiNiza = parseInt(prompt('Unesite elemente: '))
// let niz = [];

// for(let i=0; i<elementiNiza; i++){
//     let clan = parseInt(prompt('Unesite clanove'))
//     niz.push(clan);  
// }

// let niz2 = [];
// for(let i=0; i<elementiNiza; i++){
//     let clan = parseInt(prompt('Unesite clanove'))
//     niz2.push(clan);  
// }


// let niz3 = niz.concat(niz2).filter((clan)=>{
//     if(clan%2===0){
//         return clan
//     }
// })
// console.log(niz3);

//10.16, 10.17, 10.18, 10.19
