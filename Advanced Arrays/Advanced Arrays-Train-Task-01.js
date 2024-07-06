function train(array) {
    let wagons = array.shift().split(' ').map(Number);
    let maxCapacity = Number(array.shift())
    

    for(let command of array){

        if(command.includes('Add')){
            let commands = command.split(' ');
            let passengers = Number(commands[1]) 

            wagons.push(passengers);
        }else{
            let commands = command.split(' ');
            let passengers = Number(commands);

            for(let i = 0; i < wagons.length; i++){

                if((wagons[i] + passengers) <= maxCapacity){
                    wagons[i] += passengers
                    break;
                } 
            }
        }
    }
    console.log(wagons.join(' '));
}
train
(['32 54 21 12 4 0 23',

'75',

'Add 10',

'Add 0',

'30',

'10',

'75'])
