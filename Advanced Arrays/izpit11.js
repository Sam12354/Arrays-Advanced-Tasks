// Write a function that receives two parameters: sequence of numbers and special bomb number with a certain power.

// Your task is to detonate every occurrence of the special bomb number and according to its power his neighbors from left and right. Detonations are performed from left to right and all detonated numbers disappear.

// The input contains two arrays of numbers. The first contains the initial sequence and the second contains the special bomb number and its power.

// The output is the sum of the remaining elements in the sequence.

function bombNumbers(arr1, arr2) {
 
    let bomb = arr2[0];
    let power = arr2[1];
    let sum = 0;
 
    while (arr1.includes(bomb)) {
        let idx = arr1.indexOf(bomb);
        arr1.splice(Math.max(0, idx - power), Math.min(arr1.length - 1, 2 * power) + 1);
    }
 
    for (let num of arr1) {
        sum += num;
    }
 
    console.log(sum);
    
}
bombNumbers
([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]); //-  The special number is 4 with power 2. After detonation, we are left with the sequence [1, 2, 9] with sum 12. 
// ([1, 4, 4, 2, 8, 9, 1], [9, 3]);
// ([1, 7, 7, 1, 2, 3], [7, 1]);
// ([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);