// ========================================SIGNIN=============================================
var inEmail = document.getElementById("inEmail")
var inPassword = document.getElementById("inPassword")
var inBtn = document.querySelector("#inBtn")
var toSignup = document.querySelector("#toSignup")
var userList = localStorage.getItem("users")? JSON.parse(localStorage.getItem("users")) : [];

function signIn(){
    var loginEmail = inEmail.value
    var loginPassword = inPassword.value
    if (loginEmail == "" || loginPassword == "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill all fields",
            footer: '<a href="#">Why do I have this issue?</a>',
          });
    }

    else if (isCorrectEmailAndPassword(loginEmail,loginPassword)) {
        window.open("main.html" , "_self")
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Incorrect email or password",
            footer: '<a href="#">Why do I have this issue?</a>',
          });
    }
}

function isCorrectEmailAndPassword(email,password){
    for ( var i =0 ; i<userList.length ; i++ ) {
        if ( userList[i].email == email && userList[i].password == password ) {
            localStorage.setItem("userName" , userList[i].fName);
            return true;
    }
}
}

inBtn.addEventListener("click" , function(){
    signIn()
})

toSignup.addEventListener("click", function (e) {
    e.preventDefault(); 
    window.open("index.html", "_self");
  });
//============================================================================================