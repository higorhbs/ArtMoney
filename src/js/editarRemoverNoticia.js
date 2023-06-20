// Array to hold noticias objects
var noticiasJSON = localStorage.getItem('noticias');
var noticiasArray = JSON.parse(noticiasJSON);
if (!Array.isArray(noticiasArray)) {
    var noticiasArray = [];
}

// Function to remove a noticia
function removeNoticia(index) {
    // Remove noticia at the specified index from noticiasArray
    noticiasArray.splice(index, 1);

    // Display the updated noticias list
    displayNoticias();
}

// Function to save the edited object
function Salvar() {
    // Get input values
    var titulo = document.getElementById("tituloInput").value;
    var link = document.getElementById("linkInput").value;
    var imgLink = document.getElementById("imgLinkInput").value;

    // Create noticia object
    var temporario = {
        tituloNoticia: titulo,
        linkNoticia: link,
        linkImg: imgLink
    };

    // Add noticia object to noticiasArray
    noticiasArray.push(temporario);
    localStorage.setItem('noticias', JSON.stringify(noticiasArray))

    // Display the updated noticias list
    displayNoticias();

    // Clear input fields
    clearInputFields();

    window.location.href="noticias.html";
}

function Cancelar() {
    var divNoticia = document.getElementById('noticiaSelecionada');
    var divForm = document.getElementById('formNoticiaSelecionada');
    divForm.style.display = 'none';
    divNoticia.style.display = 'none';
    divForm.remove();
    divNoticia.remove();

}

// Função para editar
function editNoticia(index) {

    var noticiaEdita = document.getElementById("noticiaEmEdicao");
    var newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'noticiaSelecionada');
    newDiv.classList.add('noticia');
    newDiv.innerHTML = `
            <h1>Noticia em Selecionada</h1>
            <a href="${noticiasArray[index].linkNoticia}"><img
                    src="${noticiasArray[index].linkImg}">
                <h2>${noticiasArray[index].tituloNoticia}</h2>
            </a>
        `;
    noticiaEdita.appendChild(newDiv);

    var divForm = document.getElementById("editForm");
    var newDivForm = document.createElement('div');
    newDivForm.setAttribute('id', 'formNoticiaSelecionada');
    newDivForm.classList.add('editForm');
    newDivForm.innerHTML = `
    <label for="tituloInput">Titulo da Noticia:</label>
    <input type="text" id="tituloInput">
    <label for="linkInput">Link da Noticia:</label>
    <input type="text" id="linkInput">
    <label for="imgLinkInput">Link da imagem:</label>
    <input type="text" id="imgLinkInput">
    <button onclick="Salvar()">Salvar</button>
    <button onclick="Cancelar()">Cancelar</button>
        `;
    divForm.appendChild(newDivForm);

    // Populate input fields with the noticia data
    document.getElementById("tituloInput").value = noticiasArray[index].tituloNoticia;
    document.getElementById("linkInput").value = noticiasArray[index].linkNoticia;
    document.getElementById("imgLinkInput").value = noticiasArray[index].linkImg;

    // Remove the noticia from noticiasArray
    noticiasArray.splice(index, 1);

    // Display the updated noticias list
    displayNoticias();
}

// Function to save the edited noticia
function saveNoticia() {
    // Retrieve input values
    var titulo = document.getElementById("tituloInput").value;
    var link = document.getElementById("linkInput").value;
    var imgLink = document.getElementById("imgLinkInput").value;

    // Create noticia object
    var noticia = {
        tituloNoticia: titulo,
        linkNoticia: link,
        linkImg: imgLink
    };

    // Add noticia object back to noticiasArray
    noticias.push(noticia);

    // Display the updated noticias list
    displayNoticias();

    // Clear input fields
    clearInputFields();
}

// Function to clear input fields
function clearInputFields() {
    document.getElementById("tituloInput").value = "";
    document.getElementById("linkInput").value = "";
    document.getElementById("imgLinkInput").value = "";
}

// Function to display noticias on the page
function displayNoticias() {
    // Clear the noticias container
    var noticiasContainer = document.getElementById("noticiasContainer");
    noticiasContainer.innerHTML = "";

    // Iterate over noticiasArray and create HTML elements for each noticia
    for (var i = 0; i < noticiasArray.length; i++) {
        // Create HTML elements for noticia
        var newDiv = document.createElement('div');
        newDiv.classList.add('noticia');

        newDiv.innerHTML = `
            <a href="${noticiasArray[i].linkNoticia}"><img
                    src="${noticiasArray[i].linkImg}">
                <h2>${noticiasArray[i].tituloNoticia}</h2>
            </a>
            <div class="Btn">
            <button onclick="editNoticia('${i}')">Editar</button>
            <button onclick="removeNoticia('${i}')">Remover</button>
            </div>
            `;
        var test = noticiasArray[i];
        console.log("noticia " + i + " " + test.tituloNoticia);
        // Insert the new div element after the reference element
        noticiasContainer.appendChild(newDiv);
    };
}


displayNoticias()