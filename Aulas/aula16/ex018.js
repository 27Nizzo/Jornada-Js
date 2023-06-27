//fatorial: 5! = 5 * 4 * 3 * 2 * 1
function factorial(n){
let fat = 1
for(let i = n; i > 1; i--){
    fat *= i
}
return fat
}
console.log(factorial(5));