function AddBtnRightBar() {
  if (sessionStorage.user) {
    let btnEntrar = document.getElementById('button--login');
    btnEntrar.style.display = "none";

    //Seleciona classe Pai
    const targetElement = document.querySelector('.right-content');

    //Cria div com elementos
    var newBtn = document.createElement('div');
    newBtn.classList.add('btnRightBar');
    newBtn.innerHTML = `
        <button id="btnSair" onclick="Sair()">Sair</button>
    `;
    targetElement.appendChild(newBtn);

    //Acessa o Session storage
    var userJSON = sessionStorage.getItem('user');
    var user = JSON.parse(userJSON);

    //altera HTML do RightBar
    var tituloRightBar = document.getElementById('tituloRightBar');
    tituloRightBar.textContent = "Bem Vindo! ";
    var nomeUsuarioRightBar = document.getElementById('nomeUsuario');
    nomeUsuarioRightBar.textContent = user.name;

    
  } else {

    //Seleciona classe Pai
    const targetElement = document.querySelector('.right-content');

    //Cria div com elementos
    var newBtn = document.createElement('div');
    newBtn.innerHTML = `
        <a href="login.html"><button class="btnRightBar">Logar</button></a>
        <a href="cadastroUsuario.html"><button class="btnRightBar">Cadastrar</button>
    `;
    targetElement.appendChild(newBtn);
  }
};

const rightButton = document.querySelector(".right-button");
rightButton.addEventListener("click", function () {

  const rightBar = document.querySelector(".right-bar");
  const currentBar = parseInt(getComputedStyle(rightBar).right);
  if (currentBar === 0) {
    rightBar.style.right = '-400px';;
  } else {
    rightBar.style.right = "0px";
  }
});

//Muda imagem de Perfil ao clicar nela
const image = document.querySelector('.imgPerfil');
const buttonImgPerfil = document.querySelector('.imgPerfil');

buttonImgPerfil.addEventListener('click', function () {
  var userJSON = sessionStorage.getItem('user');
  var user = JSON.parse(userJSON);
  var userName = document.getElementById('userName');
  if (image.src.endsWith('perfil-de-usuario.png')) {
    image.src = './img/cardapio.png';
    image.style.borderRadius = '5px';
    userName.style.display = 'none';
  } else {
    if(user){
      let words = user.name.split(" ");
      let firstWord = words[0];
      image.style.borderRadius = '20px';
      userName.style.display = 'block';
      userName.textContent = firstWord;
    }   
    image.src = './img/perfil-de-usuario.png';

  }
});

AddBtnRightBar();


function Sair() {
  console.log("você saiu.")
  sessionStorage.removeItem('user');
  window.location.href = 'index.html';
}
