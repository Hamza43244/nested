// object
let human = {

human1:{
    name:'ali',
    age: 27,
},
human2:{
    name:'asim',
    age: 28,
},
human3:{
    name:'anwar',
    age: 29,
},

}

let otherHuman = {...human.human3,};
console.log(otherHuman);

// Array
let arr = [
    ["salman", "irshad"],
    ["haroon", "basit"],
    ["mustafa", "saleem"]
    ["waqar", "abbas"],
]

let otherarr = [...arr[1]]
console.log(otherarr);