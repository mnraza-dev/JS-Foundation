// WAP to check if a numeric value is palindrome or not

function palindrome(num) {
    return num == + num.toString().split("").reverse().join("");

}

const res = palindrome(1221);
console.log(res);