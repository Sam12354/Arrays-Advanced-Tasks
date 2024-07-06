function magicSum(arr, num){
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            let first = Number(arr[i])
            let second = Number(arr[j])
            if(first + second === num){
                console.log(`${first} ${second}`);
            }
        }
    }
}
magicSum
([1, 7, 6, 2, 19, 23], 8)
// ([14, 20, 60, 13, 7, 19, 8], 27)
// ([1, 2, 3, 4, 5, 6], 6)