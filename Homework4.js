//1. Given an array of integers, find the pair of adjacent elements that has the largest product andreturn that product.

// let array = [2, 4, 8, 9, 5, 4]

// function largestPairProduct(array) {
//     let largestProduct = 0;
//     let product = 0;
//     for (let i = 0; i < array.length; i++) {
//         product = array[i] * array[i + 1]
//         if (product > largestProduct) {
//             largestProduct = product
//         }
//     } return largestProduct
// }
// console.log(largestPairProduct(array))

//2. Given an array of integers.All numbers are unique.Find the count of missing numbers between minimum and maximum elements to make integers sequence.

// let array = [5, 2, 7, 9, 1, 11]

// function missingNumber(array) {
//     let count = 0;
//     let sortedArray = array.sort((a, b) => a - b)
//     let min = sortedArray[0]
//     let max = sortedArray[sortedArray.length - 1]
//     for (i = min; i < max; i++) {
//         if (!array.includes(i)) {
//             count++
//         }
//     }
//     return count
// }

// console.log(missingNumber(array))

// 3. Implement built in array sort method using bubble sort algorithm.

//let array = [4, 8, 1, 3, 9, 2]

// function bubbleSorted(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if (array[j + 1] < array[j]) {
//                 let next = array[j + 1]
//                 array[j + 1] = array[j]
//                 array[j] = next
//             }
//         }
//     }
//     return array
// }

// console.log(bubbleSorted(array)) 



//4. Insert a n positive number.Print the n - st prime number. 

// function getPrimeNumber(n) {
//     let number = 2;
//     let count = 0;

//     while (count < n) {
//         if (isPrime(number)) {
//             count++;
//         }
//         number++;
//     }

//     return number - 1;
// }
// function isPrime(num) {
//     if (num < 2) {
//         return false;
//     }
//     if (num === 2) {
//         return true;
//     }
//     if (num % 2 === 0) {
//         return false;
//     }
//     for (let i = 3; i <= Math.sqrt(num); i += 2) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(getPrimeNumber(7))