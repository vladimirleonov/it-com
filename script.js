let firstNameId = 'first-name';
let lastNameId = 'last-name';
let addressId = 'address';
let buttonId = 'btn';
let buttonEl = document.getElementById(buttonId);
let firstNameEl = document.getElementById(firstNameId);

function addClassError(param) {
   var el = document.getElementById(param);
   el.className = 'error-input';
}

// function onFirstNameKeyUp() {
//    var firstNameEl = document.getElementById(firstNameId);
//    firstNameEl.className = 'error-input';
// }

buttonEl.addEventListener('click', function () {
   addClassError(firstNameId);
   addClassError(lastNameId);
   addClassError(addressId);
})

firstNameEl.addEventListener('keyup', function () {
   var firstNameEl = document.getElementById(firstNameId);
   firstNameEl.className = 'error-input';
});

// onButtonClick
// onFirstNameKeyup
