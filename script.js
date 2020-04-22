let firstNameId = 'first-name';
let lastNameId = 'last-name';
let addressId = 'address';
let citiesId = 'cities';
let hobiesId = 'hobies';
let wrapperId = 'wrapper';
let imgId = 'img';
let listId = 'list';

let firstNameEl = document.getElementById(firstNameId);
let lastNameEl = document.getElementById(lastNameId);
let addressEl = document.getElementById(addressId);
let citiesEl = document.getElementById(citiesId);
let hobiesEl = document.getElementById(hobiesId);
let wrapperEl = document.getElementById(wrapperId);
let imgEl = document.getElementById(imgId);
let listEl = document.getElementById(listId);

// firstNameEl.value = 'Misha';
firstNameEl.setAttribute('value', 'Dany');
firstNameEl.className = 'firstName error-input';
imgEl.title = 'I am img';
citiesEl.value = 'Moskcow';
hobiesEl.value = 'I have not interest';
wrapperEl.innerHTML = '<ul id=\'list\'><li>1</li><li>2</li><li>3</li></ul>';

//error becouse пытается обратится через переменную до изменения .wrapper
listEl.className = 'list';

//innerHTML!=value
// window.alert(firstNameEl.value);
// window.alert(lastNameEl.value);
// window.alert(addressEl.value);

//innerHTML!=value
// window.alert(citiesEl.value);

//innerHTML=value
// window.alert(hobiesEl.value);
// window.alert(wrapperEl.value);
// window.alert(imgEl.alt);

// window.alert(firstNameEl.className);
