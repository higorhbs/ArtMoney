//Cria Usuario

const cadastroBtn = document.getElementById('cadastroBtn');
cadastroBtn.addEventListener('click', function createUser(event) {
	event.preventDefault();

	const nameInput = document.getElementById('name');
	const emailInput = document.getElementById('email');
	const passwordInput = document.getElementById('password');
	const confirmPassword = document.getElementById('confirmPassword');
	const typeInput = document.getElementById('type');

	let str = emailInput.value.toLowerCase();


	if (passwordInput.value !== confirmPassword.value) {
		alert('As senhas não coincidem!');
	} else {
		
		const newUser = {
			name: nameInput.value,
			email: str,
			type: typeInput.value,
			password: passwordInput.value,
		};
		var usersJSON = localStorage.getItem('users');
		var users = JSON.parse(usersJSON);
		if (Array.isArray(users)) {
			// Se users for um array, push o novo objeto user
			users.push(newUser);
		  } else {
			// Se users não for um array, Cria um array com o novo objeto dentro
			users = [newUser];
		  }
		  // Armazene a lista de objetos no localStorage
		  localStorage.setItem('users', JSON.stringify(users));

		  alert(`Cadastro realizado com sucesso!\nNome: ${nameInput.value}\nE-mail: ${str}`);
		  
		window.location.href = './login.html';

	}
});

//Deleta Usuario
function deleteUser(index) {
	usersList.splice(index, 1);
	renderUsers();
}

//Cancela Tela
document.getElementById('cancelBtn').addEventListener('click', function () {
	document.getElementById('name').removeAttribute('required');
	document.getElementById('email').removeAttribute('required');
	document.getElementById('password').removeAttribute('required');
	document.getElementById('confirmPassword').removeAttribute('required');
	window.location.href = './index.html';
});





