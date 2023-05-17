const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
    {
    name: {
    common: "John",
    fullName: ["John", "Doe"]
    },
    age: 32,
    isMale: false,
    address: {
    street: "13/A St Joseph",
    house: 10,
    },
    },
    {
    name: {
    common: "Humayoun",
    fullName: ["Humayoun", "Kabir"]
    },
    age: 33,
    isMale: false,
    address: {
    street: "13/A St Lucia",
    house: 11,
    },
    },
    ]
    };
console.log(person.result[1].age)

document.getElementById('ReplacenJon').innerText=person.result[0].name.common
document.getElementById('agehoymaon').innerText=person.result[0].age
document.getElementById('streethoymaon').innerText=person.result[0].address.street
document.getElementById('housenamberhoymaon').innerText=person.result[0].address.house

// frist complete

document.getElementById('Replacenhoymaon').innerText=person.result[1].name.common
document.getElementById('ageJon').innerText=person.result[1].age
document.getElementById('streetjon').innerText=person.result[1].address.street
document.getElementById('HouseNumber').innerText=person.result[1].address.house
