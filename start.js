//4.1

/*for(let i=1; i<6; i++){
    console.log('pozdav svima');
    console.log('\n');
}*/

//4.2
//a

/*for(let i=1; i<=10; i++){
    console.log(i);
}*/

//b

// for(let i=1; i<=10; i++){
//     if(i%2 !==0){
//         console.log(i);
//     }
// }

//c

/*for (let i = 10; i >= 1; i--) {
    console.log(i);
  }*/
  


  //4.4

//   let n=parseInt(prompt('unesite n'));
//   let s=0;

//   for(let i=1; i<=n; i++){
//     s+=i
   
//   }
// console.log(s);

//4.5

/*const n = parseInt(prompt('unesite broj n:'));
let s=0;

for(let i=1; i<=n; i++){
const broj = parseFloat(prompt(`unesite ${i}. realan broj:`));
s+=broj;
}
 const artms= s/n;
 console.log(`Zbir unesenih brojeva je: ${s}`);
 console.log(`Aritmeticka sredina unesenih brojeva je: ${artms}`);*/



 //4.6

//  const n = parseInt(prompt('unesite broj n:'));
//  let br;
//  let max;
//  console.log('\nUnesite 1. broj: ');
//  max=br;

//  for(i=2; i<=n; i++){
//     console.log(i);
//     if(br>max) max=br;
//     console.log(max);
//  }


//4.13

// let n =parseInt(prompt('unesite broj n:'));
// let s=0;

// for(i=0; i<=100; i++){
//     if(i%6==0){
//         s+=i
//         console.log(i);
//     }
// }
// console.log(s);


//4.14

// for(let i=100; i<=999; i++){
//     let prvaCifra= Math.floor(i/100);
//     let drugaCifra=Math.floor((i%100)/10);
//     let trecaCifra=(i%10);

//     if (drugaCifra === prvaCifra + 2 && trecaCifra === drugaCifra + 1) {
//         console.log(i);
//       }
    
// }


  //4.18

//   let brojac=0;

//   for(let i=100; i<1000; i++){
//     let prvaCifra=Math.floor(i/100);
//     let drugaCifra=Math.floor((i%100)/10);
//     let trecaCifra= i%10;

//     let zbir=prvaCifra+drugaCifra+trecaCifra

//     if(zbir===5){
//         brojac++
//     }

//     console.log(brojac);
//   }

//4.19

// let n= parseInt(prompt('Unesite n'));

// for(let i=1; i<=n; i++){
//     if(n%i===0){
//         console.log(i);
//     }
// }


//4.20

// let n= parseInt(prompt('Unesite n'));
// let suma=0;

// for(let i=1; i<n; i++){
//     if(n%i===0){
//         suma+=i;
//         console.log(i);
//     }
// }
//     if(suma==n){
//         console.log('Broj je savrsen');
//     }else{
//         console.log('Broj je nesavrsen');
//     }


//4.20

// let n= parseInt(prompt('Unesite n'));
// let suma=0;
// let jedinica=0;

// for(let i=1; i<=n; i++){
//     let ocena= parseInt(prompt('unesite ocenu',n));
//     suma+=ocena;

//     if(ocena===1){
//        jedinica++
//     }

//     console.log(`prosecna ocena je ${suma/n}`);
//     console.log(`broj jedinica ${jedinica}`);
// }


//4.26



// let n = parseInt(prompt('Unesite n:'));

// for(let i=0; i<n; i++){
//     for(let j=0; j<n*2; j++){
//        console.log('*');
//        console.log('\n'); //jedan prazan red
       
//     }
// }




//////////////////////D O M A C I\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


//4.30

// let n = parseInt(prompt('Unesite broj od 1 do 9:'))

// if(n<1 || n>9){
//     console.log('Unesite broj od 1 do 9:');
// }else{
//     for(let i=n; i>=1; i--){
//         let rowInput = ''
//         for (let j = 1; j <= i; j++) {
//             rowInput += i;
//         }
//         console.log(rowInput);
//     }
//     for(let i=2; i<=n; i++){
//         let rowInput = ''
//         for(let j = 1; j <= i; j++){
//             rowInput +=i;
//         }
//         console.log(rowInput);
//     }
// }




//4.32

// let n = parseInt(prompt('Unesite n:'))

// for(let i=5; i<=10; i++){
//     let rowInput=''
//     for( let j=1; j<=i; j++){
//     rowInput+='*'
// }
//     console.log(rowInput);
// }

// for(let i = 9; i >= 5; i--){
//     let rowInput = ''
//     for(let j=1; j<=i; j++){
//         rowInput +='*'
//     }
//     console.log(rowInput);
// }




//4.29

// let n = parseInt(prompt('Unesite broj n:'))

//     for(let i=1; i<=n; i++){//m=
//         let rowInput = '';
//         for (let j = 1; j <= i; j++) {
//             rowInput += '*';
//         }
//         console.log(rowInput)
//     }
//     for(let i=4; i>0; i--){
//         let rowInput = ''
//         for(let j = 1; j <= i; j++){
//             rowInput +='*';
//         }
//         console.log(rowInput);
//         }



//4.31

// let n = parseInt(prompt('Unesite n:'))

// if(n%2!==0){
//     for(let i=1; i<=n; i++ )
// }



//4.28
//dj

// let n = parseInt(prompt('unesite n broj redova'))
//git hub

//4.29

// ceil na veci
// round kako treba
// flor manji


//4.29   tacan zadatak

// let n = parseInt(prompt('unesite n broj redova'))

// for(let i=1; i<=n; i++){
//    let rowOutput = '';
//    for( let k = n;k>i; k-- ){
//     rowOutput +=' '
//    }
//    for(let j=1; j<= i; j++){
//      rowOutput  +="* "
//     }
//     console.log(rowOutput);
// }
// for(let i=n-1; i>=1; i--){
//     let rowOutput= '';
//     for( let k = n;k>i; k-- ){
//         rowOutput +=' '
//        }
//        for(let j=1; j<= i; j++){
//          rowOutput  +="* "
//         }
//         console.log(rowOutput);
// }

/////////////////////////////////////////////////////

//4.30

// let n = parseInt(prompt('unesite n broj redova'))


// for(let i=n-1; i>=1; i--){
//     let rowOutput= '';
//     let iteration =
//     for( let k = n;k>i; k-- ){
//         rowOutput +=' '
//        }
//        for(let j=1; j<= i; j++){
//          rowOutput  +="* "
//         }
//         console.log(rowOutput);
// }





///////////////////W H I L E\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//5.3

// let n=parseInt(prompt('unesite n'))

// let i=1;
// let suma=0;

// while(i<=n){
//     suma+=i;
//     i++
//     console.log(`suma brojeva ${suma}`);
// }



//5.5
 
// let n=parseInt(prompt('unesite n'))

// let i=1;
// let s=0;

// while(i<=n) 
//  { 
//  s+=1.Math.pow(2*i+1,2)
//  i++;
// console.log(i)
//  }



//5.6

// let n=parseInt(prompt('unesite n'));
// let m;

// let s=0;
// let i=1;

//  while(i<=n){
//     if(i%2===0) {

//     }
    
//  }


//5.7
//a
//preko promenljivih 

// let fp=1;
// let fpp=1;
// let n = parseInt(prompt('Unesite n: '));
// let rowOutput= '1 1 ';

// let i=3;
// while(i<=n){
//   let pom= fp+fpp;
//   rowOutput +=`${pom}`
//   fp=fpp;
//   fpp=pom;
//   i++
// }
// console.log(rowOutput);


//b

// let fp=1;
// let fpp=1;
// let suma=2;//zato sto vec imamo prva dva broja
// let n = parseInt(prompt('Unesite n: '));
// let rowOutput= '1 1 ';

// let i=3;
// while(i<=n){
//   let pom= fp+fpp;
//   rowOutput +=`${pom}`
//   fp=fpp;
//   fpp=pom;
//   suma +=pom
//   i++
// }
// console.log(rowOutput)
// console.log(suma);


//5.8

// let broj= parseInt(prompt('Unesite broj'))
// let n= parseInt(prompt('Unesite stepen'))
// console.log(Math.pow(n,a));//samo jedno resenje
// s=1;
// for(let i=1; i<=n; i++){
//     s*=broj
// }
// console.log(s);

//while
// let i=1;
// while(i<=n){
//   s*=broj;
//   i++
// }
// console.log(s);


//5.9

// let suma=0;
// iterator=0; //sredja vrednost
// let stop=parseInt(prompt('Unesite n: '));
// while(stop!==0){
// suma+=stop;
// stop=parseInt(prompt('Unesite novi broj: '));
// iterator++
// }
// console.log(suma/iterator);


//5.10

// let suma=0;
// iterator=0; //sredja vrednost
// let stop=parseInt(prompt('Unesite n: '));
// while(stop!==0){

//   if(stop >=2 && stop<=6){
//     suma+=stop;
//     iterator++
//     console.log(stop)
//   }
//   stop=parseInt(prompt('Unesite novi broj: '));
// }
// console.log(suma/iterator);

//5.12

// let n= parseInt(prompt('Unesite n'))
// let m= parseInt(prompt('Unesite m'))
// let suma=0;
// let pom

// if(m>n){
//   [m,n]=[n,m] 
// //  pom=m;
// //   m=n;
// //  n=pom;
// }
// let i=m;

// while(i<=n){
//   if(n%2===1){
//   suma+=Math.sqrt(i);
//   }
//   i++
// }
// console.log(suma);


//////////////////////////////////////////////////////////////////////////////////////////////////

//5.18

// let n = parseInt(prompt('unesite n: '));
// let suma=0;
// let pom=n;


//   while(pom >= 1){
//     suma+=pom%10// da bi uzeli poslednji broj
//     pom = Math.floor( pom/10)//skida se poslednji broj)
//   }
// if(n%suma===0){
//   console.log('niveov broj');
// }else{
//   console.log('nije niveov broj');
// }


//5.19

// let n = parseInt(prompt('Unesite n: '))
// // console.log(n.split('').reverse().join(''));
// let obrnuto=0;

// while(n>0){
//   obrnuto = obrnuto*10+n%10//123%10=3
//   n = Math.floor(n/10)
// }

// console.log(obrnuto);


///5.20

// let n = parseInt(prompt('Unesite n: '))

// for( let k=2; k<=n; k+
//   while(n%k===0){
//     n /= k;
//     console.log(k);

//   }
// }


// //5.21

// for(let a=1; a<=20; a++){
//   for(let b=1; b<=20; b++){
//     let formula = a*a+b*b//a**/b**
//     let c=1;
//    while(c*c<=formula){
//     if(c*c===formula){
//       console.log(a,b,c)
//     }
//     c++
//   }
//   }
// }


// let a;
// let b;
// let c;
// let d;
// let xa=1;
// let xb=4;
// let xc=2;



// let s;
// let p;

//  a = Math.sqrt(Math.pow(xb-xc,2)+(Math.pow(xb-xc,2)));
//  b = Math.sqrt(Math.pow(xc-xa,2)-(Math.pow(xa-xb,2)));
//  a = Math.sqrt(Math.pow(xa-xb,2)-(Math.pow(xa-xb,2)));
//  s = (a+b+c)/2
//  p = Math.sqrt(s*(s-a)*(s-b)*(s-c));
//  console.log(p)


// let n = parseInt(prompt('unesite n'))


//       let a=Math.floor(i/100);
//       let b=Math.floor((i/10)%10);
//       let c= Math.floor(i%10);

//       console.log(a+b+c);
  
 

// let broj = parseInt(prompt('Cena proizvoda'))

// prvaNovcanica500= Math.floor(broj/500);
// drugaNovcanica100= Math.floor(broj%500/100);
// trecaNovcanica1= broj%100;

// console.log(prvaNovcanica500, drugaNovcanica100, trecaNovcanica1);


//..................DOMACI.........................................................................
//2.29
//2.30
//3.1-3.5


//3.1

// let n = parseInt(prompt('Unesite broj'))

// if(n%2===0){
//   console.log('Broj je paran');
// }else{
//   console.log('Broj je neparan');
// }



//3.2

// let n = parseInt(prompt('Unesite broj'))

// if(n>0){
//   console.log('Broj je pozitivan');
// }else if(n<2){
//   console.log('Broj je negativan');
// }else{
//   console.log('Broj je jednak');
// }

//3.3

// let a = parseInt(prompt('Unesite a: '))
// let b = parseInt(prompt('Unesite b: '))

// if(a===b){
//   console.log('A=B');
// }else if(a>b){
//   console.log('prvi broj je veci od drugog');
// }else{
//   console.log('drugi broj je veci od prvog');
// }

//3.4

// let a = parseInt(prompt('Unesite a: '))
// let b = parseInt(prompt('Unesite b: '))
// let c = parseInt(prompt('Unesite c: '))

// let pom=a;

// if(pom>b){
//   pom=b
// }else if(c>pom){
//   pom=c
// }
// console.log(pom);

//3.5

// let a= parseFloat(prompt('unesite prvi broj'))
// let b= parseFloat(prompt('unesite drugi broj'))
// let c= parseFloat(prompt('unesite treci broj'))

// let niz=[a,b,c]

// console.log(niz.sort())

///.................................................................................................

//3.7



//  let brojBodova=parseFloat(prompt('unesite broj bodova'))

//  if(brojBodova<=50){
//     console.log('ocena je 5')

//  }else if(brojBodova<=60){
//     console.log('ocena je 6')

//  }else if(brojBodova<=70){
//     console.log('ocena je 7')

// }else if(brojBodova<=80){
//     console.log('ocena je 8')

//  } else if(brojBodova<=90){
//     console.log('ocena je 9')

//  }else{
//     console.log('ocena je 10')
//  }

//3.9

// let x = parseInt(prompt('Unesite x'))
// let y = parseInt(prompt('Unesite y'))

// if(x>y){
//   console.log(x-y);
// }else{
//   console.log(y-x);
// }


// let a = parseInt(prompt('Unesite a'))
// let b = parseInt(prompt('Unesite b'))
// let c = parseInt(prompt('Unesite c'))
// if(a+b>c && a+c>b && b+c>a){
// let s = (a+b+c)/2
// let p =Math.sqrt(s*(s-a)(s-b)(s-c))
// console.log(`stranice formiraju trougao ${p}`);
// }else{
//   console.log('ne formiraju');
// }

//4.37
/*
let n = parseInt(prompt('unesite neparan broj'))
let rowOutput = '+'
for( let i=0; i<n-2;i++){
  rowOutput += "-"
}
rowOutput += "+"
console.log(rowOutput);
for(let j = 0; j < n-2; j++){
      rowOutput = ""
      for(let i = 1; i <= n; i++){
          if(i === 1 || i === n){
              rowOutput += "|"
          }
          else if (i === j + 2){
              rowOutput += "\\"
          }
          else{
              rowOutput += " "
          }
      }
      console.log("");
      console.log(rowOutput);
  }
  
  
  rowOutput = "+";
  
  for(let i = 0; i < n-2; i++){
      rowOutput += "-"
  }
  
  rowOutput += "+"
  console.log(rowOutput);
  */

  //........................WHILE.................................

//  let i=1;
//  while(i<=5){
//   console.log('pozdrav');
//   console.log('/n');
//   i++
//  }
////////////////////////////////////////////
// let i=1;
// while(i<=10){
//   console.log(i);
//   i++
// }
//////////////////////////////////////////
// let i=2;
// while(i<=10){
//   console.log(i);
//   i+=1
//   i++
// }
/////////////////////////
// let i=10;
// while(i>=1){
//   console.log(i);
//   i--
// }
//////////////////////
//5.3

// let n= parseInt(prompt('unesite n'))
// let i=1;
// suma=0;
// while(i<=n){
//   suma+=i
//   i++
// }
// console.log(suma);
////////////////////////////////////
//................................................................................................\\\\\\\\
