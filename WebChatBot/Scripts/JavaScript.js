
function takebe() {
    //debugger;
    var mensagem = $("#mensagem").val();
    var stringUrl = "/RespostaChats/Chat";

    //debugger;
    $.ajax({
        type: "POST",
        url: stringUrl,
        async: false,
        data: { mensagem: 'take.be' },
        success: function (data) {
            $("#displaymensagem").append("<br> <div class='badge badge-secondary'><b>  Eu :</b> " + mensagem + "</div>");
            $("#displaymensagem").append("<br> <div class='card-login' style='text-align: justify;background-color:#b2dfdb!important;height:12%;box-shadow:none;margin:10px;'><div style='margin:10px;'><b> Lora :</b> " + data.resposta + "</div></div>");
            $("#mensagem").val("");
            // debugger;
        }
    });
    //  debugger;
    $('#takebe').click(function () {
        $('#displaymensagem').animate({ scrollTop: $('#displaymensagem')[0].scrollHeight }, 500);
    })
}
function taketeam() {
    //debugger;
    var mensagem = $("#mensagem").val();
    var stringUrl = "/RespostaChats/Chat";

    //debugger;
    $.ajax({
        type: "POST",
        url: stringUrl,
        async: false,
        data: { mensagem: 'take.team' },
        success: function (data) {
            $("#displaymensagem").append("<br> <div class='badge badge-secondary'><b>  Eu :</b> " + mensagem + "</div>");
            $("#displaymensagem").append("<br> <div class='card-login' style='text-align: justify;background-color:#b2dfdb!important;height:12%;box-shadow:none;margin:10px;'><div style='margin:10px;'><b> Lora :</b> " + data.resposta + "</div></div>");
            $("#mensagem").val("");
            // debugger;
        }
    });
    //  debugger;
    $('#taketeam').click(function () {
        $('#displaymensagem').animate({ scrollTop: $('#displaymensagem')[0].scrollHeight }, 500);
    })
}

function takeexc() {
    //debugger;
    var mensagem = $("#mensagem").val();
    var stringUrl = "/RespostaChats/Chat";

    //debugger;
    $.ajax({
        type: "POST",
        url: stringUrl,
        async: false,
        data: { mensagem: 'Take.Execellence' },
        success: function (data) {
            $("#displaymensagem").append("<br> <div class='badge badge-secondary'><b>  Eu :</b> " + mensagem + "</div>");
            $("#displaymensagem").append("<br> <div class='card-login' style='text-align: justify;background-color:#b2dfdb!important;height:12%;box-shadow:none;margin:10px;'><div style='margin:10px;'><b> Lora :</b> " + data.resposta + "</div></div>");
            $("#mensagem").val("");
            // debugger;
        }
    });
    //  debugger;
    $('#takeexc').click(function () {
        $('#displaymensagem').animate({ scrollTop: $('#displaymensagem')[0].scrollHeight }, 500);
    })
}

function takechange() {
    //debugger;
    var mensagem = $("#mensagem").val();
    var stringUrl = "/RespostaChats/Chat";

    //debugger;
    $.ajax({
        type: "POST",
        url: stringUrl,
        async: false,
        data: { mensagem: 'Take.Charge' },
        success: function (data) {
            $("#displaymensagem").append("<br> <div class='badge badge-secondary'><b>  Eu :</b> " + mensagem + "</div>");
            $("#displaymensagem").append("<br> <div class='card-login' style='text-align: justify;background-color:#b2dfdb!important;height:12%;box-shadow:none;margin:10px;'><div style='margin:10px;'><b> Lora :</b> " + data.resposta + "</div></div>");
            $("#mensagem").val("");
            // debugger;
        }
    });
    //  debugger;
    $('#takechange').click(function () {
        $('#displaymensagem').animate({ scrollTop: $('#displaymensagem')[0].scrollHeight }, 500);
    })
}

function takesimple() {
    //debugger;
    var mensagem = $("#mensagem").val();
    var stringUrl = "/RespostaChats/Chat";

    //debugger;
    $.ajax({
        type: "POST",
        url: stringUrl,
        async: false,
        data: { mensagem: 'Take.Simple' },
        success: function (data) {
            $("#displaymensagem").append("<br> <div class='badge badge-secondary'><b>  Eu :</b> " + mensagem + "</div>");
            $("#displaymensagem").append("<br> <div class='card-login' style='text-align: justify;background-color:#b2dfdb!important;height:12%;box-shadow:none;margin:10px;'><div style='margin:10px;'><b> Lora :</b> " + data.resposta + "</div></div>");
            $("#mensagem").val("");
            // debugger;
        }
    });
    //  debugger;
    $('#takesimple').click(function () {
        $('#displaymensagem').animate({ scrollTop: $('#displaymensagem')[0].scrollHeight }, 500);
    })
}

function takehigh() {
    //debugger;
    var mensagem = $("#mensagem").val();
    var stringUrl = "/RespostaChats/Chat";

    //debugger;
    $.ajax({
        type: "POST",
        url: stringUrl,
        async: false,
        data: { mensagem: 'Take.Higher' },
        success: function (data) {
            $("#displaymensagem").append("<br> <div class='badge badge-secondary'><b>  Eu :</b> " + mensagem + "</div>");
            $("#displaymensagem").append("<br> <div class='card-login' style='text-align: justify;background-color:#b2dfdb!important;height:12%;box-shadow:none;margin:10px;'><div style='margin:10px;'><b> Lora :</b> " + data.resposta + "</div></div>");
            $("#mensagem").val("");
            // debugger;
        }
    });
    //  debugger;
    $('#takehigh').click(function () {
        $('#displaymensagem').animate({ scrollTop: $('#displaymensagem')[0].scrollHeight }, 500);
    })
}
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
                $("#displaymensagem").append("<div class='col-md-12' style=''><div class='card-login' style='text-align: justify;background-color:#b2dfdb!important;height:15%;box-shadow:none;'><div style='margin:10px;'>" + data.resposta + "</div></div></div><br><br><br><br>");
                $("#displaymensagem").append("<div class='container'>");
                $("#displaymensagem").append("<div class='col-md-4' ><a onclick='takebe()' id='takebe'><img style='width:60%;' src='../Content/images/img_00.png'></a></div>");
                $("#displaymensagem").append("<div class='col-md-4' ><a onclick='taketeam()' id='taketeam'><img style='width:60%;' src='../Content/images/img_01.png'></a></div>");
                $("#displaymensagem").append("<div class='col-md-4' ><a onclick='takeexc()' id='takeexc'><img style='width:60%;' src='../Content/images/img_02.png'></a></div>");
                $("#displaymensagem").append("<div class='col-md-4' ><a onclick='takechange()' id='takechange'><img style='width:60%;' src='../Content/images/img_03.png'></a></div>");
                $("#displaymensagem").append("<div class='col-md-4' ><a onclick='takesimple()' id='takesimple'><img style='width:60%;' src='../Content/images/img_04.png'></a></div>");
                $("#displaymensagem").append("<div class='col-md-4' ><a onclick='takehigh()' id='takehigh'><img style='width:60%;' src='../Content/images/img_05.png'></a></div></div>");
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
                    $("#displaymensagem").append("<br> <div class='card-login' style='text-align: justify;background-color:#b2dfdb!important;height:12%;box-shadow:none;margin:10px;'><div style='margin:10px;'><b> Lora :</b> " + data.resposta + "</div></div>");
                    $("#mensagem").val("");
                    // debugger;
                }
            });
            //  debugger;
            $('#Enviar').click(function () {
                $('#displaymensagem').animate({ scrollTop: $('#displaymensagem')[0].scrollHeight }, 500);
            })
        }
    );

});
