// WAP to check if a numeric value is fibonacci or not

//  Fibbonacci series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// F(2) = F(1) + F(0) = 1 + 0 = 1
// F(3) = F(2) + F(1) = 1 + 1 = 2

var fib = function(n) {
    const arr = [0, 1];
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
};
console.log(fib(6)); 