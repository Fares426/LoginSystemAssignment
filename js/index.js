// ========================================SIGNUP=============================================
var upName = document.querySelector("#upName");
var upEmail = document.querySelector("#upEmail");
var upPassword = document.querySelector("#upPassword");
var upBtn = document.querySelector("#upBtn");
var toSignin = document.querySelector("#toSignin");

var userList = [];


if (localStorage.getItem("users") != null) {
  userList = JSON.parse(localStorage.getItem("users"));
}

function signUp() {
  var user = {
    fName: upName.value,
    email: upEmail.value,
    password: upPassword.value,
  };

  
  if (upName.value === "" || upEmail.value === "" || upPassword.value === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill all fields",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
    return;
  }

  
  if (!isValidEmail(upEmail.value)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Email incorrect. Please enter a valid email address.",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
    return; 
  }

  
  if (!isNewEmail(upEmail.value)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "This email is already registered. Please use a different email.",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
    return; 
  }

  
  if (!isValidName(upName.value)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Name must be between 3 and 16 letters and contain only letters.",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
    return; 
  }

  
  if (!isValidPassword(upPassword.value)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Password must be at least 8 characters and include uppercase, lowercase, a number, and a special character.",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
    return; 
  }


  userList.push(user);
  localStorage.setItem("users", JSON.stringify(userList));
  clearInputs();

  Swal.fire({
    icon: "success",
    title: "All done!",
    text: "Signup successful",
  });
}

upBtn.addEventListener("click", function () {
  signUp();
});


function isValidEmail(email) {
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function isValidName(name) {
  var nameRegex = /^[a-zA-Z]{3,16}$/;
  return nameRegex.test(name);
}

function isValidPassword(password) {
  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

function isNewEmail(email) {
  for (var i = 0; i < userList.length; i++) {
    if (userList[i].email === email) {
      return false;
    }
  }
  return true;
}

function clearInputs() {
  upName.value = null;
  upEmail.value = null;
  upPassword.value = null;
}

toSignin.addEventListener("click", function (e) {
  e.preventDefault(); 
  window.open("signin.html", "_self");
});


// ==========================================================================================



