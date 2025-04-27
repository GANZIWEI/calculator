// history.back();
// history.forward();
// let a ='haha ha ni mama';
// let b = 'DEF';

// let c = 3;
// let d = 4;

// let g = 45;
// let e = g ?? d;

// let mix_array = [23,'nono'];
// mix_array[0] = 2;
// mix_array.push('lolo')

// let ganziwei ={
//     id: '24PMR00809',
//     name: 'ganziwei',
//     age: 18,
// }

//Control Structures 

// let c_a = 4;
// let c_b = 5;
// let c_c = 6;

// let c_d = c_a == 4 ? c_b : c_c;

//alert(c_d);
//alert(`${e}, ${a} \n ${mix_array} \n ID: ${ganziwei.id} \n AGE: ${ganziwei.age} \n Name: ${ganziwei.name}`);

// let fruits = {
//     'lal1':'apple',
//     'lal2':'banana',
//     'lal3':'orange',
//     'lal4':'grape',
//     'lal5':'kiwi'
// };

// for (let i = 0; i < fruits.length; i++) {
//     alert(fruits[i]);
// }

// for ( let z in fruits){
//     alert(fruits[z]);
// }

// function sum(a,b){
//     return a + b;
// }

// function div(a,b){
//     return a/ b;
// }


// alert (div(2,3));

// function sum(...numbers){
//     let total = 0;
//     for (let i = 0; i < numbers.length; i++){
//         total += numbers[i];
//     }
//     return total;
// }

// let sum1 = [1,2,3,4,5,6,7,8,9,10];
// alert(sum(...sum1));
// let number1 = prompt('Please Enter your fist number1' , '2')
// let ok = confirm('Are you sure?');
// if(ok== true){
//     window.alert('Nothing');
// }
// else{
//     window.alert('Why not OK');
// }
// let haha = (a,b) => a+b;
// alert(haha(20,345));

// let arr =[1,2,3,4];
// arr = arr.map(v => v/2);
// alert(arr);

// document.writeln('<p style="color:rgb(71, 158, 216);"> This line of word is came from the js file</p>');



let a = '0'; // Global variable
const input = document.querySelector('#input');
input.value = a;

// Undo button functionality
const btnUndo = document.querySelector('#Undo');
btnUndo.addEventListener('click', e => {
    // If the length is greater than 1, remove the last character; otherwise, reset to '0'
    a = a.length > 1 ? a.slice(0, -1) : '0';
    input.value = a; // Update the input field value
});

// Number buttons functionality
const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', e => {
    a = a === '0' ? '1' : a + '1';
    input.value = a;
});

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', e => {
    a = a === '0' ? '2' : a + '2';
    input.value = a;
});

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', e => {
    a = a === '0' ? '3' : a + '3';
    input.value = a;
});

const btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', e => {
    a = a === '0' ? '4' : a + '4';
    input.value = a;
});

const btn5 = document.querySelector('#btn5');
btn5.addEventListener('click', e => {
    a = a === '0' ? '5' : a + '5';
    input.value = a;
});

const btn6 = document.querySelector('#btn6');
btn6.addEventListener('click', e => {
    a = a === '0' ? '6' : a + '6';
    input.value = a;
});

const btn7 = document.querySelector('#btn7');
btn7.addEventListener('click', e => {
    a = a === '0' ? '7' : a + '7';
    input.value = a;
});

const btn8 = document.querySelector('#btn8');
btn8.addEventListener('click', e => {
    a = a === '0' ? '8' : a + '8';
    input.value = a;
});

const btn9 = document.querySelector('#btn9');
btn9.addEventListener('click', e => {
    a = a === '0' ? '9' : a + '9';
    input.value = a;
});

const btn0 = document.querySelector('#btn0');
btn0.addEventListener('click', e => {
    a = a === '0' ? '0' : a + '0';
    input.value = a;
});

// Division button functionality
const btndiv = document.querySelector('#btndiv');
btndiv.addEventListener('click', e => {
    a = a === '0' ? '0' : a + '/'; // 添加除号
    input.value = a;
});

// Multiplication button functionality
const btnmul = document.querySelector('#btnmul');
btnmul.addEventListener('click', e => {
    a = a === '0' ? '0' : a + '*'; // 添加乘号
    input.value = a;
});

const btnsum = document.querySelector('#btnsum');
btnsum.addEventListener('click', e => {
    a = a === '0' ? '0' : a + '+'; // 添加乘号
    input.value = a;
});

const btnsub = document.querySelector('#btnsub');
btnsub.addEventListener('click', e => {
    a = a === '0' ? '0' : a + '-'; // 添加乘号
    input.value = a;
});

// Equals button functionality
const btnEquals = document.querySelector('#btnequals');
btnEquals.addEventListener('click', e => {
    try {
        // Use eval to calculate the result of the expression
        const result = eval(a);
        a = result.toString(); // Update 'a' with the result
        input.value = a; // Display the result in the input field
    } catch (error) {
        input.value = 'Error'; // Display error if the expression is invalid
        a = '0'; // Reset 'a' to '0'
    }
});





