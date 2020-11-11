function getRandomElement(arr)
{
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomNumber(min, max) {  
    return Math.random() * (max - min) + min; 
}  

function getRandomKeyFromWeightedObject(obj)
{
    let entries = Object.entries(obj);
    var maxWeight = 0;
    entries.forEach(elem => {
        maxWeight += elem[1];
        elem[1] = maxWeight;
    })
    
    let randNum = randomNumber(0, maxWeight);
    let randEntry = entries.find(e => e[1] > randNum);
    return randEntry[0];
}