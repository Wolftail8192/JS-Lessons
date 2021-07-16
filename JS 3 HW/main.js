// let strepsils=[
//     [1,2,3,4,5,6,7,8,9],
//     [11,22,33,44,55,66,77,88,99],
//     [111,222,333,444,555,666,777,888,999]
// ];
// for (const strepsil of strepsils) {
//     console.log(strepsil);
//     for (const number of strepsil) {
//         console.log(number);
//     }
// }
// function minValue(x,y,z) {
//     if (x < y < z) {
//         return x;
//     } else if (y < x < z) {
//         return y;
//     } else if (z < x < y) {
//         return z;
//     }
//
// }
// console.log(minValue(12,45,32))
//
// function maxValue(x,y,z) {
//     if (x > y > z) {
//         return x;
//     } else if (y > x > z) {
//         return y;
//     } else if (z > x > y) {
//         return z;
//     }
//
// }
// console.log(maxValue(56,36,99))


// let arr = [111,222,333,444,555,666,777,888,999];
// let max = arr[0];
//
// arr.forEach(function (elem, index) {
//
//     if(index > 0 ){
//         if(max < elem){
//             max = elem;
//         }
//
//     }
// });
//
//
//
// console.log(max);



// let arr = [111,222,333,444,555,666,777,888,999];
// let min = arr[0];
//
// arr.forEach(function (elem, index) {
//
//     if(index > 0 ){
//         if(min > elem){
//             min = elem;
//         }
//
//     }
// });
//
//
//
// console.log(min);


let matrix = [234,676,987,856,46,97,5234,5423];


// let arr = (matrix);
// function arraySum(array){
//     let sum = 0;
//     for(let i = 0; i < array.length; i++){
//         sum += array[i];
//
//     }
//     console.log(sum);
// }
// arraySum(arr);




//
// index=(matrix)
// console.log(index)
//
// function square(a, b,) {
//     if (a*b)
//         return a*b;
// }
//
// console.log(square(50,50, ))


// index=(matrix)
// console.log(index)
//
// function square1(r) {
//     if ((r*r)*3.14)
//         return ((r*r)*3.14);
// }
//
// console.log(square1(130 ))



// function square1(r,h) {
//     if (r*h*3.14*2)
//         return (r*h*3.14*2);
// }
//
// console.log(square1(30,40 ))

//
// function createDiv(text) {
//     document.write(
//         `<div>
//             <p>${text}</p>
//         </div>`);
// }
//
// createDiv('refsdg');
// createDiv('rfger');
// createDiv('');
// createDiv('');




// let mies=['text','wetr','wetwet']
//
// document.write('<ul>')
// for (let mi of mies);
// {
//           document.write(`<li>${mi}</li>`)
//
//  }
// document.write('</ul>');
    
function  avg(matrix){
    let sum=0;
    for (let item of matrix){
        sum+=item
    }
}

document.write(matrix)
