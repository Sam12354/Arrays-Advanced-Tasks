// Write a function that keeps track of guests that are going to a house party.

// You will be given an array of strings. Each string will be one of the following:

// - "{name} is going!"

// - "{name} is not going!"

// If you receive the first type of input, you have to add the person if he/she is not in the list (If he/she is in the list print: "{name} is already in the list!").

// If you receive the second type of input, you have to remove the person if he/she is in the list (if not print: "{name} is not in the list!").

// At the end print all the guests each on a separate line.

function houseParty(array) {
    let list = [];
    
    for(let person of array){
        let commands = person.split(' ');
        
        if(!list.includes(commands[0]) && person.includes('is going!')){
            let commands = person.split(' ');
            let name = commands[0];
            list.push(name);

        }else if(list.includes(commands[0]) && person.includes('is going!')){
            let commands = person.split(' ');
            let name = commands[0];
            console.log(`${name} is already in the list!`);

        }else if(list.includes(commands[0]) && person.includes('is not going!')){
            let commands = person.split(' ');
            let name = commands[0];
            let idx = list.indexOf(name);
            list.splice(idx, 1);

        }else{
            let commands = person.split(' ');
            let name = commands[0];
            console.log(`${name} is not in the list!`);
        }
        
    }
    for(let name of list){
        console.log(name);
    }
}
houseParty
(['Allie is going!',

'George is going!',

'John is not going!',

'George is not going!'])
// (['Tom is going!',

// 'Annie is going!',

// 'Tom is going!',

// 'Garry is going!',

// 'Jerry is going!'])
