// You will be given an array of integer numbers on the first line of the input.

// Remove all repeating elements from the array.

// Print the result elements separated by a single space.

function distinctArray(array) {
    let newArr = []

    for(let i = 0; i < array.length; i++){
        let curNum = array[i]

        if(!newArr.includes(curNum)){
            newArr.push(curNum)
        }
    }
    console.log(newArr.join(' '));
}
distinctArray
([1, 2, 3, 4])
// ([7, 8, 9, 7, 2, 3, 4, 1, 2])
// ([20, 8, 12, 13, 4, 4, 8, 5])