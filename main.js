// let arr = new Array(36);
// var arrLength = arr.length;
// for(let i = 0; i < arrLength; i++){
//     let number = Math.round(Math.random()*100);
//     arr[i] = number;
// }
// console.log(arr);
// var arr1 = arr.slice(0,1);
// var arr2 = arr.slice(1,3);
// var arr3 = arr.slice(3,6);
// var arr4 = arr.slice(7,1);
// var arr5 = arr.slice(0,1);
// var arr6 = arr.slice(0,1);
// var arr7 = arr.slice(0,1);
// var arr8 = arr.slice(0,1);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);
// console.log(arr5);
// console.log(arr6);
// console.log(arr7);
// console.log(arr8);


let arr = [];
 
do {
  let num = Math.floor(Math.random() * 10 + 1);
  arr.push(num);
  arr = arr.filter((item, index) => {
    return arr.indexOf(item) === index
  });
} while (arr.length < 36);
 
console.log(arr);


// let arr1 = [];
// let arr2 = [];
// let arr3 = [];
// let arr4 = [];
// let arr5 = [];
// let arr6 = [];
// let arr7 = [];
// let arr8 = [];



// // Tạo mảng random
// for (let i = 0; i<=7; i++){
//     let number = Math.round(Math.random()*100);
//     arr1.push(number);
// }
// console.log(arr1);

// for (let i = 0; i<=6; i++){
//     let number = Math.round(Math.random()*100);
//     arr2.push(number);
// }
// console.log(arr2);
// for (let i = 0; i<=5; i++){
//     let number = Math.round(Math.random()*100);
//     arr3.push(number);
// }
// console.log(arr3);
// for (let i = 0; i<=4; i++){
//     let number = Math.round(Math.random()*100);
//     arr4.push(number);
// }
// console.log(arr4);
// for (let i = 0; i<=3; i++){
//     let number = Math.round(Math.random()*100);
//     arr5.push(number);
// }
// console.log(arr5);
// for (let i = 0; i<=2; i++){
//     let number = Math.round(Math.random()*100);
//     arr6.push(number);
// }
// console.log(arr6);
// for (let i = 0; i<=1; i++){
//     let number = Math.round(Math.random()*100);
//     arr7.push(number);
// }
// console.log(arr7);
// // let number = Math.round(Math.random()*100);
// arr8.push(number);
// console.log(arr8);


// function check(){
//     var userCheck = document.getElementById('number').value;
//     var arrLength = a.length;
//     for(let i = 0; i < arrLength; i++){
//         if(userCheck == a[i]){
//             alert('You win!');
//         }
//     }
// }