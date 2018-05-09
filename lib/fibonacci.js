function fibonacci(n) {  
    if (n === 1 || n === 2) {  
        return 1;  
    }  
    var n1 = 1;  
    var n2 = 1;  
    var fib;  
    for (var i = 3; i <= n; i++) {  
        fib = n1 + n2;  
        n1 = n2;  
        n2 = fib;  
    }  
    return fib;  
}  
module.exports = fibonacci