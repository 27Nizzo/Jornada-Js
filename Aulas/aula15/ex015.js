let num = [5, 8, 2]
num[3] = 4
num.push(7) //adiciona 7 ao array
num.length //tamanho do array
num.sort() //organiza os elementos dentro do array 

for(let i = 0; i < num.length; i++) {
    console.log(num[i]);
}


let valores = [1, 3, 9, 7]
for(let p = 0; p < valores.length; p++){
    console.log(`A posição ${p} tem valor ${valores[p]}`);
}


let nums = [3, 6, 2, 4]
for(let pos in nums) {
    console.log(nums[pos])
}