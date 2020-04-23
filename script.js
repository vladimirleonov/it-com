// let firstNameId = 'first-name';
// let firstNameEl = document.getElementById(firstNameId);
// console.log(firstNameEl.value);
// let lastNameId = 'last-name';
// let lastNameEl = document.getElementById(lastNameId);
// console.log(lastNameEl.value);
// let addressId = 'address';
// let addressEl = document.getElementById(addressId);
// console.logEl(addressEl.value)

function getEl(param) {
   let id = param;
   let el = document.getElementById(id);
   return el;
}

let firstNameId = 'first-name';
let lastNameId = 'last-name';
let addressId = 'address';

let firstNameEl = getEl(firstNameId);
getEl(lastNameId);
getEl(addressId);

console.log(firstNameEl.value);


