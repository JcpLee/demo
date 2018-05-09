
 // console.log(fibonacci(1));
// console.log('hello world!');
// function getFib(n) {  
//     if (n === 1 || n === 2) {  
//         return 1;  
//     }  
//     var n1 = 1;  
//     var n2 = 1;  
//     var fib;  
//     for (var i = 3; i <= n; i++) {  
//         fib = n1 + n2;  
//         n1 = n2;  
//         n2 = fib;  
//     }  
//     return fib;  
// }  

function isLeapYear (Year) {
    if (((Year % 4)==0) && ((Year % 100)!=0) || ((Year % 400)==0)) {
    return (true);
    } else { return (false); }
    }
console.log(isLeapYear(2004));

const fibonacci = require('./lib/fibonacci');
for (var i = 1; i <= 12; i++) {  
    console.log(fibonacci(i));  
}  