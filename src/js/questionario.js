$(document).ready(function(){
  $("#awnser").submit(function(e){
      e.preventDefault();


      const resultado = {
        selecionado : $("input:checked")[0],
        certo : $("[data-resultado='true")[0],

      }

      if(resultado.selecionado == resultado.certo){
        $(resultado.selecionado).parent().addClass("resultado_certo");
      }else{
        $(resultado.selecionado).parent().addClass("resultado_errado");
        $(resultado.certo).parent().addClass("resultado_certo");
      }

      $("input[type=submit").prop("disabled",true);
  })
});