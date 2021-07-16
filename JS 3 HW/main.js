let strepsils=[
    [1,2,3,4,5,6,7,8,9],
    [11,22,33,44,55,66,77,88,99],
    [111,222,333,444,555,666,777,888,999]
];
for (const strepsil of strepsils) {
    console.log(strepsil);
    for (const number of strepsil) {
        console.log(number);
    }
}
function minValue(x,y,z) {
    if (x < y < z) {
        return x;
    } else if (y < x < z) {
        return y;
    } else if (z < x < y) {
        return z;
    }

}
console.log(minValue(12,45,32))

function maxValue(x,y,z) {
    if (x > y > z) {
        return x;
    } else if (y > x > z) {
        return y;
    } else if (z > x > y) {
        return z;
    }

}
console.log(maxValue(56,36,99))


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



let arr = [111,222,333,444,555,666,777,888,999];
let min = arr[0];

arr.forEach(function (elem, index) {

    if(index > 0 ){
        if(min > elem){
            min = elem;
        }

    }
});



console.log(min);


let matrix = [234,676,987,856,46,97,5234,5423];







