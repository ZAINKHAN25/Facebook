var body = document.querySelector("body");
var dateofbirthdate = document.querySelector('#dateofbirthdate');
var dateofbirthmonth = document.querySelector('#dateofbirthmonth');
var dateofbirthyear = document.querySelector('#dateofbirthyear');
var createaccount = document.querySelector(".createaccount");
var modalbody = document.querySelector(".modalbody");
var existsign = document.querySelector(".existsign");
var signupbtn = document.querySelector(".signupbtn");
var iFirstName = document.querySelector(".iFirstName");
var iSurnameName = document.querySelector(".iSurnameName");
var newpasswordsignup = document.querySelector(".newpasswordsignup");
var mobilenumsignup = document.querySelector(".mobilenumsignup");
var femaleradio = document.querySelector("#femaleradio");
var maleradio = document.querySelector("#maleradio");

// console.log(femaleradio);

let divfordateofbirthdate = "";
let divfordateofbirthmonth = "";
let divfordateofbirthyear = "";
let dateofbirthdatevalue;
let dateofbirthmonthvalue;
let dateofbirthyearvalue;
let gender = "";

const monthS = ["Jan", "Feb", "Mar", "Apr", "May","Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const users = JSON.parse(localStorage.getItem('users')) || []


dateofbirthyear.addEventListener('change', function() {
    countdateofbirthyearvalue(this.value);
});

function removecheckfromfemale() {
    maleradio.checked = true;
    femaleradio.checked = false;
    gender = "Male";
}

function removecheckfrommale() {
    femaleradio.checked = true;
    maleradio.checked = false;
    gender = "Female";
  }

function countdateofbirthyearvalue(n) {
    dateofbirthyearvalue = n;
}

dateofbirthdate.addEventListener('change', function() {
    countdateofbirthdatevalue(this.value);
});

function countdateofbirthdatevalue(n) {
    dateofbirthdatevalue = n;
}

dateofbirthmonth.addEventListener('change', function() {
    countdateofbirthmonthvalue(this.value);
});

function countdateofbirthmonthvalue(n) {
    dateofbirthmonthvalue = n;
}

// This code is for date of birth date in the signup form.
for (let i = 1; i <= 31; i++) {
    let divofbirth = `<option>${i}</option>`;
    divfordateofbirthdate += divofbirth;
}

dateofbirthdate.innerHTML = divfordateofbirthdate;

// This code is for date of birth month in the signup form.
for(let i = 0; i <= (monthS.length - 1); i++) {
    let divofmonth = `<option>${monthS[i]}</option>`;
    divfordateofbirthmonth += divofmonth;
}

dateofbirthmonth.innerHTML = divfordateofbirthmonth;

// This code is for date of birth year in the signup form.
for(let i = 2023; i >= 1905; i--) {
    let divofyear = `<option>${i}</option>`;
    divfordateofbirthyear += divofyear;
}

dateofbirthyear.innerHTML = divfordateofbirthyear;

createaccount.addEventListener('click',()=>{
    modalbody.classList.remove('none');
    body.classList.add('removeoverflow');
});

existsign.addEventListener('click',()=>{
    modalbody.classList.add('none');
});


signupbtn.addEventListener('click',()=>{
    var user = [{
        iFirstName: iFirstName.value,
        iSurnameName: iSurnameName.value,
        newpasswordsignup: newpasswordsignup.value, 
        mobilenumsignup :mobilenumsignup.value,
        dateofbirthdatevalue :dateofbirthdatevalue,
        dateofbirthmonthvalue: dateofbirthmonthvalue,
        dateofbirthyearvalue :dateofbirthyearvalue,
        gender: gender
    }]

    users.push(user)


    localStorage.setItem('isLoggedInUser', JSON.stringify(users))
})
