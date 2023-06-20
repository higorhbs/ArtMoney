function UpdateNoticias() {

    const targetElement = document.querySelector('.reference-element');
    var noticiasJSON = localStorage.getItem('noticias');
    var noticias = JSON.parse(noticiasJSON);

    if (noticias) {
        for (var index = 0; index < noticias.length; index++) {
            //Cria nova Div
            var newDiv = document.createElement('div');
            newDiv.classList.add('noticia');

            newDiv.innerHTML = `
                <a href="${noticias[index].linkNoticia}"><img
                        src="${noticias[index].linkImg}">
                    <h2>${noticias[index].tituloNoticia}</h2>
                </a>
                <button onClick="ComentarioBtn()">Comentários</button>
                `;

            // Insert the new div element after the reference element
            targetElement.appendChild(newDiv);
        };
    }

}

function ComentarioBtn(){
    window.location.href="comentarios.html";
}


var userJSON = sessionStorage.getItem('user');
var user = JSON.parse(userJSON);
if (user) {
    if (user.type === "Editor de Conteudo") {
        AddCrudBtnEditordeConteudo();
        console.log("Tipo de usuario: Editor de Conteudo");
    } else if(user.type === "ADM"){
        AddCrudBtnADM();
        console.log("Tipo de usuario: ADM");
    }
}


function AddCrudBtnEditordeConteudo() {
    const targetElement = document.querySelector('.titulo');
    var newBtn = document.createElement('div');
    newBtn.innerHTML = `
        <a href="cadastroNoticia.html"><button>Cadastrar Noticia</button></a>
        <a href="editarRemoverNoticia.html"><button>Editar/Remover Noticia</button></a>
    `;
    targetElement.appendChild(newBtn);
}
function AddCrudBtnADM() {
    const targetElement = document.querySelector('.titulo');
    var newBtn = document.createElement('div');
    newBtn.innerHTML = `
        <a href="cadastroNoticia.html"><button>Cadastrar Noticia</button></a>
        <a href="editarRemoverNoticia.html"><button>Editar/Remover Noticia</button></a>
        <button onclick="Reset()">Reset Noticias Default</button>
        <button onclick="ResetLocalStorage()">Reset Local Storage</button>
    `;
    targetElement.appendChild(newBtn);
}

function Reset() {
    //#region NoticiasDefault
    myArray = [];
    var newNoticia1 = {
        tituloNoticia: "Como a crise financeira impulsiona o bitcoin e o sistema descentralizado",
        linkNoticia: "https://einvestidor.estadao.com.br/colunas/fabricio-tota/crise-financeira-impulsiona-bitcoin/",
        linkImg: "img/noticia01.jpg",
    };
    var newNoticia2 = {
        tituloNoticia: "O futuro dos pagamentose o universo cripto em ascensão",
        linkNoticia: "https://einvestidor.estadao.com.br/colunas/fabricio-tota/futuro-dos-pagamentos-pix-real-digital-stablecoins/",
        linkImg: "img/noticia02.png",
    };
    var newNoticia3 = {
        tituloNoticia: "Educação Financeira: Por que iniciar essa jornada?",
        linkNoticia: "https://exame.com/bussola/educacao-financeira-por-que-iniciar-essa-jornada/",
        linkImg: "img/noticia03.png",
    };
    var newNoticia4 = {
        tituloNoticia: "FTX consegue US$ 50 milhões com venda da LedgerX para bolsa de Miami",
        linkNoticia: "https://valor.globo.com/financas/criptomoedas/noticia/2023/04/26/ftx-consegue-us-50-milhoes-com-venda-da-ledgerx-para-bolsa-de-miami.ghtml",
        linkImg: "img/noticia04.png",
    };
    var newNoticia5 = {
        tituloNoticia: "Educação Financeira: por que iniciar essa jornada?",
        linkNoticia: "https://exame.com/bussola/educacao-financeira-por-que-iniciar-essa-jornada/",
        linkImg: "img/noticia05.png",
    };
    var newNoticia6 = {
        tituloNoticia: "Escolha um ativo para investir e passar a seu filho em 20 anos. Qual seria?",
        linkNoticia: "https://einvestidor.estadao.com.br/investimentos/investimento-filhos-20-anos/",
        linkImg: "img/noticia07.png",
    };
    var newNoticia7 = {
        tituloNoticia: "Bernardo Bonjean: Ainda vale a pena investir em cripto?",
        linkNoticia: "https://einvestidor.estadao.com.br/colunas/fabricio-tota/crise-financeira-impulsiona-bitcoin/",
        linkImg: "img/noticia06.png",
    };
    var newNoticia8 = {
        tituloNoticia: "Planejamento estratégico vaialém de cálculos, números e planilhas",
        linkNoticia: "https://exame.com/bussola/planejamento-estrategico-vai-alem-de-calculos-numeros-e-planilhas/",
        linkImg: "img/noticia08.png",
    };
    var noticias = [];
    myArray.push(newNoticia1);
    myArray.push(newNoticia2);
    myArray.push(newNoticia3);
    myArray.push(newNoticia4);
    myArray.push(newNoticia5);
    myArray.push(newNoticia6);
    myArray.push(newNoticia7);
    myArray.push(newNoticia8);
    myArray.forEach(element => {
        noticias.push(element);
    });
    localStorage.setItem('noticias', JSON.stringify(noticias));
    //#endregion NoticiasDefault
    window.location.href = 'noticias.html';
};

function ResetLocalStorage(){
    localStorage.removeItem('noticias');
    window.location.href = 'noticias.html';
}


UpdateNoticias();


