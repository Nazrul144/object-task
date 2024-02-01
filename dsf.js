let person = {
    name:'Nazrul Islam',
    age: 30,
    student: true,
    married: false,
    address: 'Barisal'
}

//Using for in loop
for( let prop in person){
    let typeOfData = (prop, person[prop]);
    console.log(typeof typeOfData);
}

