
const cadastrarNoticiaBtn = document.getElementById('cadastrarNoticiaBtn');
// Logica para adicionar noticias ao localStorage:
document.getElementById('cadastrarNoticiaBtn').addEventListener("click", function (event) {
  event.preventDefault();

  const tituloNoticiaInput = document.getElementById('tituloNoticia');
  const linkNoticiaInput = document.getElementById('linkNoticia');
  const linkImgInput = document.getElementById('imgNoticia');

  const newNoticia = {
    tituloNoticia: tituloNoticiaInput.value,
    linkNoticia: linkNoticiaInput.value,
    linkImg: linkImgInput.value,
  };
  // Check if a user with the given tituloNoticia exists in the list of noticias
  var noticiasJSON = localStorage.getItem('noticias');
  var noticias = JSON.parse(noticiasJSON);
  if (Array.isArray(noticias)) {
    // Se noticias for um array, push o novo objeto
    noticias.push(newNoticia);
    alert(`noticia cadastrada: \nTitulo da noticia: ${newNoticia.tituloNoticia} \nLink da noticia: ${newNoticia.linkNoticia}\nLink da Imagem: ${newNoticia.linkImg}`);
  } else {
    // Se noticias não for um array, Cria um array com o novo objeto dentro
    alert(`noticia cadastrada: \nTitulo da noticia: ${newNoticia.tituloNoticia} \nLink da noticia: ${newNoticia.linkNoticia}\nLink da Imagem: ${newNoticia.linkImg}`);
    noticias = [newNoticia];
  }
  // Armazene a lista de objetos no localStorage
  localStorage.setItem('noticias', JSON.stringify(noticias));
  window.location.href='noticias.html';

});


// Botão cancelar:
document.getElementById('cancelBtn').addEventListener('click', function () {
  document.getElementById('tituloNoticia').removeAttribute('required');
  document.getElementById('linkNoticia').removeAttribute('required');
  window.history.back();
});
