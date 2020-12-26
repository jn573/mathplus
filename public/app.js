/* array functions
FILTER */
items = [
    {name: 'Bike', model: 'Avalanche', price: 1000},
    {name: 'Shorts', model: 'Summit', rice: 50},
    {name: 'Bike', model: 'Bianchi', price: 14000},
    {name: 'Bike', model: 'Avalanche', price: 400}
]


names = [
    {name: 'Evan', age: 10, occupation: 'Superhero'},
    {name: 'Angus', age: 13, occupation: 'Secret Agent'},
    {name: 'Chester', age: 12, occupation: 'Guardian'}
]

function addElement(val1, val2, instance) {
    let ul = document.getElementsByTagName('ul')[instance];
    // console.log(ul);
    let newElem = document.createElement('li');
    newElem.className = getBgColour();
    newElem.className += " list-group-item";

    // console.log(newLi);
    newElem.textContent = val1 + ' is a ' + val2;
    ul.append(newElem);
}


function getBgColour() {
    let i = getRandom(3);
    colors = ["bg-info", "bg-primary", "bg-warning"]
    return colors[i];
}

function getRandom(limit) {
    n = Math.floor(Math.random() * limit);;
    return n;
}

function addNewListItem() {
    // console.log('function triggered!');
    let lstNames = names.map((x) => {
        return x.name;
    })
    let lstOccupation = names.map((y) => {
        return y.occupation;
    })
    let occupation = lstNames[getRandom(3)];
    let theirName = lstOccupation[getRandom(3)];
    addElement(occupation,theirName, 0);
}



let filter2 = items.filter((item) => {
    return item.price > 100;
});

console.log(filter2);


// map
const filter3 = items.map((item) => {
    return [item.model, item.price];
})

console.log(filter3);

const findItems = items.find((item) => {
    return item.name === 'Bike';
})


console.log(findItems);

items.forEach((item) => {
    console.log(item.model);
})

// console.log(forEachItem);

// check if array contains a specific value, always resolves to true/false

const hasExpensiveItems = items.some((item) => {
        return item.price > 1000;
    }
)

if (hasExpensiveItems) {
    console.log('I found some expensive items!')
}