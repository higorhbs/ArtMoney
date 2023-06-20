
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginBtn');

loginButton.addEventListener("click", function (event) {
  event.preventDefault();

  var usersJSON = localStorage.getItem('users');
  var users = JSON.parse(usersJSON);

  // Check if a user with the given email exists in the list of users
  var emailToCheck = emailInput.value.toLowerCase();
  var passwordToCheck = passwordInput.value;
  isMatchFound = false;

  var index = 0;
  for (index = 0; index < users.length; index++) {
    if (users[index].email === emailToCheck && users[index].password === passwordToCheck) {
      isMatchFound = true;
      break;
    }
  }
  if (isMatchFound) {
    alert(`Login realizado com sucesso!\nNome: ${users[index].name}\nE-mail: ${users[index].email}`);
    var sessionUser = {
      name: users[index].name,
      password: users[index].password,
      email: users[index].email,
      type: users[index].type
    };

    // Convert the user object to a string using JSON.stringify()
    var userJSON = JSON.stringify(sessionUser);

    // Save the user object in sessionStorage using setItem()
    sessionStorage.setItem('user', userJSON);

    window.location.href = './index.html';
  } else {
    alert('Usuario ou senha incorreto.');
  }

});

//Cancela Tela
document.getElementById('cancelBtn').addEventListener('click', function () {
  document.getElementById('email').removeAttribute('required');
  document.getElementById('password').removeAttribute('required');
  window.location.href = './index.html';
});

document.getElementById('cadastroTelaBtn').addEventListener('click', function () {
  document.getElementById('email').removeAttribute('required');
  document.getElementById('password').removeAttribute('required');
  window.location.href = './cadastro.html';
});



