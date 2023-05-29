var dateofbirthdate = document.querySelector('#dateofbirthdate');
var dateofbirthmonth = document.querySelector('#dateofbirthmonth');
var dateofbirthyear = document.querySelector('#dateofbirthyear');

let divfordateofbirthdate = "";
let divfordateofbirthmonth = "";
let divfordateofbirthyear = "";

const monthS = ["Jan", "Feb", "Mar", "Apr", "May","Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]


// this code is for date of birth date in signup form i don't want to write hard code date in date of birth in sign up form 
for (let i = 1; i <= 31; i++) {
    let divofbirth = `<option>${i}</option>`;
    divfordateofbirthdate += divofbirth;
}

dateofbirthdate.innerHTML = divfordateofbirthdate;


// this code is for date of birth month in signup form i don't want to write hard code month in date of birth in sign up form 
for(let i = 0; i <= (monthS.length - 1); i++) {
    let divofmonth = `<option>${monthS[i]}</option>`;
    divfordateofbirthmonth += divofmonth;
}

dateofbirthmonth.innerHTML = divfordateofbirthmonth;


// this code is for date of birth year in signup form i don't want to write hard code year in date of birth in sign up form 
for(let i = 2023; i >= 1905; i--) {
    let divofyear = `<option>${i}</option>`;
    divfordateofbirthyear += divofyear;
}

dateofbirthyear.innerHTML = divfordateofbirthyear;