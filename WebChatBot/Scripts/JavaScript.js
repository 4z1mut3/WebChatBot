
$(function () {
    var stringUrlGit = "https://api.github.com/users/4z1mut3/repos";
    $.get(stringUrlGit, function (data) {
        $(".result").html(data);
        var dados = data;
        console.log(dados);
        
        var input = dados[0].name + "\n" + dados[0].url + "\n" + dados[0].owner.login + "\n" ;
        alert(input);
        document.getElementById("posicao-1").value = input;
        
        //seta_valores(data.bairro, data.logradouro, data.complemento, data.localidade, data.uf);
        //dump(data);

    });
    $("#Enviar").click(
        function () {
            //debugger;
            var mensagem = $("#mensagem").val();

            var stringUrl = "/RespostaChats/Chat";
            
            //debugger;
            $.ajax({
                
                type: "POST",
                url: stringUrl,
                async: false,
                data: { mensagem: mensagem },

                success: function (data) {

                    $("#displaymensagem").append(" >> EU : " + mensagem + "\n");
                    $("#displaymensagem").append(data.resposta + "\n");

                    $("#mensagem").val("");
                   

                   // debugger;
                }
            });

            
          //  debugger;

        }
    );

});
