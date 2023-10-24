// for(let i=1; i<10; i++){
//     if(i%2) continue;
//     console.log(i);
// }
//////////////////////

// for(let i=1; i<=20; i++){
//     if(i%3 ==0 ) continue;
//     console.log(i);
// }

//////////////////

// let suma=0;
//  while(true){
//     let n= parseInt(prompt('unesite broj'))
//     if(n<0) continue;
//     if(n===0) break; 
//    suma +=1./(n*n);
//  }
//    console.log(suma);

///////////// SWITCH CASE

// let n = parseInt(prompt('unesite broj'))

// switch (n){

//     case 1:
//         console.log('ponedeljak');
//         break;
//     case 2:
//         console.log('utorak');
//             break;
//     case 3:
//         console.log('sreda');
//         break;     
//     case 4:
//         console.log('cetvrtak');
//         break;
//     case 5:
//         console.log('petak');
//         break;
//     case 6:
//         console.log('subota');
//         break;
//     case 7:
//         console.log('nedelja');
//         break;
//     default:
//         console.log('greska');    
//         break;   

// }

////////////////////////////////////////////

// let n = (prompt('unesite broj'))

// switch(n){
//     case "a":
//         console.log('samoglasnik');
//         break;
//     case "e":   
//         console.log('samoglasnik'); 
//         break;
//     case "i":
//         console.log('samoglasnik');  
//         break; 
//     case "o":
//         console.log('samoglasnik');
//         break;
//     case "u":
//         console.log('samoglasnik');
//         break;
//     default:
//         console.log('suglasnik');
//         break;
// }
////////////////////////////////////////////

// let a = parseInt(prompt('unesite prvi broj: '))
// let b = parseInt(prompt('unesite drugi broj: '))
// let znak = (prompt('unesite znak:'))

// switch(znak){
//     case '+':
//         console.log(a+b);
//         break;

//     case '-':
//         console.log(a-b);
//         break;
//     case  '/':
//         console.log(a/b);
//         break;
//     case '*':
//         console.log(a*b);
//         break;
//      default:
// console.log('greska');
// break;
// }

////////////////////////////////////////////////

let mesec = parseInt(prompt('unesite redni broj'));
let godina = parseInt(prompt('unesite godinu'));
let brojDana
 
switch(mesec){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      console.log('31');
        break;
    
    case 4:
    case 6:
    case 9:
    case 11:
      console.log('30');
        break;

    case 2:
    (godina%4 ===0 && godina%100 !==0)|| godina%400 === 0
    ? console.log(29)
    : console.log(28)
    break;

}





