let lOGINUSER = JSON.parse(localStorage.getItem('lOGINUSER'))
var h1 = document.querySelector('.h1')

if(!lOGINUSER){
    alert("Please Login in first")
    window.location.href = "../index.html"
}

else{
    console.log(lOGINUSER);
    h1.innerHTML = `Hello ${lOGINUSER.iFirstName} ${lOGINUSER.iSurnameName} `
}

function logout(){
    var con = confirm("Are you sure you want to logout");
    if(con === true){
        lOGINUSER = '';
        window.location.reload();
        window.location.href = "../index.html"
    }
}