
$(function () {
    //Inicio da conversa no carregamento da página


    function inicioConversa() {
        //debugger;
        var mensagem = $("#mensagem").val();
        var stringUrl = "/RespostaChats/Chat";

        //debugger;
        $.ajax({
            type: "POST",
            url: stringUrl,
            async: false,
            data: { mensagem: "inicioChat" },
            success: function (data) {
                //$("#displaymensagem").append(" >> EU : " + mensagem + "\n");
                $("#displaymensagem").append("<div class='col-md-9' style=''><div class='card-login' style='text-align: justify;background-color:#b2dfdb!important;height:18%;box-shadow:none;'><div style='margin:10px;'>" + data.resposta + "</div></div></div><br><br><br><br>");
                $("#mensagem").val("");
                // debugger;
            }
        });
        //  debugger;
    }


  

    var stringUrlGit = "https://api.github.com/users/4z1mut3/repos";
    $.get(stringUrlGit, function (data) {
        inicioConversa();
        $(".result").html(data);
        var dados = data;
        console.log(dados);

        var input = dados[0].name + "\n" + dados[0].url + "\n" + dados[0].owner.login + "\n";
        // alert(input);
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
                    $("#displaymensagem").append("<br> <div class='badge badge-secondary'><b>  Eu :</b> " + mensagem + "</div>");
                    $("#displaymensagem").append("<br> <b>  Lora :</b> " + data.resposta + "");
                    $("#mensagem").val("");
                    // debugger;
                }
            });
            //  debugger;
        }
    );

});
