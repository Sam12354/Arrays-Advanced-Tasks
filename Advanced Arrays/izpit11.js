// You will receive two arrays of integers. The second array is containing exactly three numbers.

// The first number represents the number of elements you have to take from the first array (starting from the first one).

// The second number represents the number of elements you have to delete from the numbers you took (starting from the first one).

// The third number is the number we search in our collection after the manipulations.

// As output print how many times that number occurs in our array in the following format:

// "Number {number} occurs {count} times."
function searchForNumber(array, nums) {
    let firstNum = nums[0];
    let secondNum = nums[1];
    let thirdNum = nums[2];

    array = array.slice(0, firstNum);

    for(let i = 0; i < secondNum; i++){
        array.shift()
    }
    
    let counter = 0;
    if(array.includes(thirdNum)){
        for(let num of array){

            if(num === thirdNum){
                counter++
            }
        }
    }
    console.log(`Number ${thirdNum} occurs ${counter} times.`);
    
}
searchForNumber
([5, 2, 3, 4, 1, 6], [5, 2, 3]);
//([7, 1, 5, 8, 2, 7], [3, 1, 5]);