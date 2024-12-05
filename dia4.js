function sumArray(numbers) {
    let sum = 0;
    numbers.forEach(el => { sum += el });
    return sum;
}

console.log(sumArray([1,2,3,4,5]));