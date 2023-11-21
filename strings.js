// let recenica = 'Ana voli Milovana'

// console.log(recenica[17, recenica.length]);

//SLICE-uzme string i presece deo koji necemo
//end nee uljucuje poslednji broj
//-17>-8
// console.log(recenica.slice(-17,-8));

//SUBSTRING isto kao slice samo ne mogu negativni brojevi

//SUBSTR 
// console.log(recenica.substr(2,5));

//REPLACE-REPLACEALL

// console.log(recenica.replaceAll("Ana","Amina"));

//TO LOWER CASE -mala slova

//TO UPPERCASE -velika slova

// console.log(recenica.toUpperCase());

//CONCAT- spaja dva stringa 

// let recenica2=  'Amin se osisao'
// console.log(recenica2+ recenica);

//TRIM - sklanja sa pocetka i kraja

// let trimRecenica ='  Tarik je prof    '

// console.log(trimRecenica.tr);

// let primer ='5'

// console.log(primer.padStart(4,'0'));
// console.log(primer.padEnd(4, '0'));

//CharAt ,[]
// let recenica3 = 'Hasane ostavi telefon'
// console.log(recenica3[2]);
// console.log(recenica3.chartAt(2));

//SPLIT

// for (let i = 0; i < recenica.length; i++) {
//     console.log( recenica[i])
    
// }

//let niz=recenica.split(" ")//pravilo po kome pravi elemente u nizu
// let niz=recenica.split("a")
// console.log(niz);

//SPLICE - 

// console.log(recenica.splite(' ').splice(0,3, 'nesto')

//INDEXOF- da li postoji clan i na kom mestu...trazi i kad to pogodi..krece od pocetka stringa
//LASTINDEXOF - od poslednje reci ..

//match kada nadje rec kao da je istazi

//INCLUDE- vraca true or false

// console.log(recenica.includes('Milovana'));


//////////////////////zbirka

// let recenica = prompt('Unesite recenicu')
// console.log(recenica.split(' ').length)

///////////////////////////////////////////////////////////
// let samoglasnici = ['a', 'e', 'i', 'o', 'u'];

// while(true){
//     let suglasnici  = 0;
//     let brSamoglasnika = 0;
//     let rec =prompt('unesite rec: ')
//     for(let i=0; i<=rec.length; i++)
//     // if(samoglasnici.includes(rec[i]))
// if(rec[i]==='a'|| rec[i]==='e'|| rec[i]==='i' || rec[i]==='o'|| rec[i]==='u')
//     {
//         brSamoglasnika ++
//     }
//     else{
//         suglasnici ++
//     }
// console.log(`ima ${suglasnici} suglasnika, i ${brSamoglasnika}samoglasnika`);
// }



// while(true){
//     let velikaSlova = 0;
//     let malaSlova = 0;
//     let rec = prompt('unesite rec: ')
//     if(rec==='0')
//     break
// for(let i=0; i<rec.length; i++)
// {
//     if(rec[i]===rec[i].toLocaleUpperCase())
//     {
//         velikaSlova++
//     }
//     else{
//         malaSlova++
//     }
// }
// clg
// }


///DOMACI

// let slova = prompt('Unesite slovo')
// console.log(slova.length)
//



//8.9

// while(true){
//     let razmak = 0;
//     let znak= 0;
//     let tekst = prompt('Unesite tekst: ')
//     if(tekst ==="0")
//     break;
// for(let i=0; i<=tekst.length){
//     if(tekst[i]===' '|| tekst[i]===','|| tekst[i]==='.')

//    }

// }



//8.12
// while(true){
// let zagrade = 0;

// let tekst = prompt('unesite tekst')
// if(tekst==='0')
//     break;
// for(let i=0; i<=tekst.length; i++){
//     if(tekst === '(' || tekst === ')') {
//         console.log('greska');
//         break;
//     }else if(tekst==='()')
    
      
   
// }

// // }


// let zagrade = prompt('unesite recenicu')
// let otvorene = 0;
// let zatvorene =0;
//  for(let karakter of zagrade){
//     if(karakter === '('){
//         otvorene ++
//     }else if(karakter === ')'){
//         zatvorene ++
//     }
//  }

//  if(zatvorene===otvorene) console.log(('dobro su poredjane'));
//  else console.log('nisu dobro poredjane');


//8.13

// let tekst = prompt(' unesite tekst')

// console.log(tekst.toLowerCase());
// console.log(tekst.toUpperCase());


///////////////////////////////////////////////////////

// let tekst = prompt('unesite tekst: ')
// let output = '';


// for(let i=0; i<=tekst.lenght; i++){
//     console.log('input');
//     if(i===0){
//         output += input[i].toUpperCase
//     }
//     else{
//         output += input[i].toLoweCase
//     }

// }

// console.log(output);

//////////////////////////////////////8.16

// let tekst = prompt('unesite tekst');


// for(let i=0; i<=tekst.lenght; i++ ){
//     if(tekst[i]===' ' ){
//     if(razmak[razmak.length-1]  !== ' ')
//     razmak += tekst[i]
//     }else{
//         razmak += tekst[i]
//     }
// }
// console.log(razmak);



////////////////////8.17

// let tekst = prompt('unesite tekst')

//  for(let word of tekst.split(' ')){
//     console.log(word);
//  }


////////////////////////////////////////////////

// console.log('nesto \n jos nesto \n ');

// console.log('nesto \t jos nesto \t ');





























//10.8 x

// let brojElemenata = parseInt(prompt('Unesite broj elemenata: '));
// let niz = [];
// console.log(brojElemenata);

// for (let i = 0; i < brojElemenata; i++) {
//     let n = parseInt(prompt('Unesite n: '));
//     console.log(niz[i]);
//     niz.push(n);
// }
// let suma = 0;
// let brojac = 0;
// for(let i=0; i<niz.length; i++){
//     if(niz[i]%3===0){
//         suma += niz[i]
//         brojac ++
//     }
// }

// console.log(suma / brojac);
// console.log(suma/brojElemenata);



//10.9

// let n = parseInt(prompt('Unesite dužinu niza: '));
// let niz = [];


// for (let i = 0; i < n; i++) {
//     niz.push(parseInt(prompt('unesite broj')));
// }

// let sumaParnih = 0;
// let sumaNeparnih = 0;

// for (let i = 0; i < niz.length; i++) {
//     if (niz[i] % 2 === 0) {
//         sumaParnih += niz[i];
//     } else {
//         sumaNeparnih += niz[i];
//     }
// }

// console.log(sumaParnih);
// console.log(sumaNeparnih);

/////////////////////10.5

// let brojElemenata = parseInt(prompt('unesite niz'))
// let niz = []

// for(let i=0; i<brojElemenata; i++){
//     let n = parseInt(prompt('unesite clanove'))
//     niz.push(n)
// }
// niz.reverse()
// console.log(niz);

////10.7

// let brojElemenata = parseInt(prompt('unesite broj elemenata'))
// let niz = [];
// console.log(`Broj elemenata je ${brojElemenata}`);

// let suma = 0;

// for(let i=0; i<brojElemenata;i++){
//     let elemntiNiza = parseInt(prompt('unesite elemente niza: '))
//     niz.push(elemntiNiza)
//     suma= suma+niz[i]
// }
// console.log(niz);
// console.log(suma/brojElemenata);

//10.8

// let brojElemenata = parseInt(prompt('Unesite broj elemenata: '));
// let niz = [];
// let suma = 0;
// let brojac = 0;
// console.log(`broj elemenata je: ${brojElemenata}`);

// for (let i = 0; i < brojElemenata; i++) {
//     let n = parseInt(prompt('Unesite n: '));
//     // console.log(niz[i]);
//     niz.push(n);
// }

// for(let i=0; i<niz.length; i++){
//     if(niz[i]%3===0){
//         suma += niz[i]
//         brojac ++
//     }
// }
// console.log(niz);
// console.log(suma/brojac);

//10.9

// let brojElemenata = parseInt(prompt('Unesite broj elemenata: '));
// let niz = [];

// for (let i = 0; i < brojElemenata; i++) {
//     niz.push = parseInt(prompt('Unesite n: '));
// }

// let parni = 0;
// let neparni =0;

// for(let i=0; i<niz.length; i++){
//     if(niz[i]%2===0){
//         parni+= niz[i]
//     }else{
//         neparni += niz[i]
//     }
//     }
//     console.log(parni);
//     console.log(neparni);

//     let n = parseInt(prompt('Unesite dužinu niza: '));
// let niz = [];


// for (let i = 0; i < n; i++) {
//     niz.push(parseInt(prompt('unesite broj')));
//     console.log(n);
// }

// let sumaParnih = 0;
// let sumaNeparnih = 0;

// for (let i = 0; i < niz.length; i++) {
//     if (niz[i] % 2 === 0) {
//         sumaParnih += niz[i];
//     } else {
//         sumaNeparnih += niz[i];
//     }
// }
// console.log(sumaParnih);
// console.log(sumaNeparnih);




