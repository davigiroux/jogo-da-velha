var rodada = 1;
var matriz_jogo = Array(3);

$(document).ready( function(){
    $('#btn_inciar_jogo').click(function(){
        if($('#jogador_1').val() == ''){
            alert("Digite o nome do jogador 1");
            return false;
        } else if ($('#jogador_2').val() == '') {
            alert("Digite o nome do jogador 2");
            return false;
        }

        $('#jog_1').html($('#jogador_1').val());
        $('#jog_2').html($('#jogador_2').val());

        $('#pagina_inicial').hide();
        $('#palco_jogo').show();
    });

    $('.jogada').click(function(){
        jogada(this.id);
    });

    function jogada(id){
        var icone = '';
        var ponto = 0;

        if((rodada % 2) == 1){
            icone = 'url("imagens/marcacao_1.png")';
            ponto = -1;
        } else {
            icone = 'url("imagens/marcacao_2.png")';
            ponto = 1;
        }
        rodada++;

        $('#'+id).css('background-image', icone);
    }
});