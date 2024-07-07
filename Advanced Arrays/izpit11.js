function sortTwoCriteria(array) {
    let sortedArray = array.sort((a, b) => a.length - b.length || a.localeCompare(b))
    console.log(sortedArray.join('\n'));
}
sortTwoCriteria
(['alpha', 'beta', 'gamma'])
// (['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])