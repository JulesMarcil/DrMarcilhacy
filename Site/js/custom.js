$('#mydiv0').share({
    networks: ['twitter','facebook','googleplus'],
    orientation: 'vertical',
    urlToShare: 'http://www.docteurmarcilhacy.fr',
    affix: 'right center'
});

$('#mydiv1').share({
    networks: ['twitter','facebook','googleplus'],
    orientation: 'vertical',
    urlToShare: 'http://www.docteurmarcilhacy.fr/articles/vitamine-D-pour-l-hiver.html',
    affix: 'right center'
});

$('#mydiv2').share({
    networks: ['twitter','facebook','googleplus'],
    orientation: 'vertical',
    urlToShare: 'http://www.docteurmarcilhacy.fr/articles/apres-les-fetes.html',
    affix: 'right center'
});

$('#mydiv3').share({
    networks: ['twitter','facebook','googleplus'],
    orientation: 'vertical',
    urlToShare: 'http://www.docteurmarcilhacy.fr/articles/pendant-la-grossesse.html',
    affix: 'right center'
});

$('#mydiv4').share({
    networks: ['twitter','facebook','googleplus'],
    orientation: 'vertical',
    urlToShare: 'http://www.docteurmarcilhacy.fr/articles/intolerance-lactose.html',
    affix: 'right center'
});

$(document).ready(function(){
    function calcul() {
        var a = $('#taille').val();
        var b = $('#poids').val();
        var aa = parseInt(a);
        var bb = parseInt(b);
        var cc = Math.round(100000 * bb / (aa*aa)) / 10;
        if (!isNaN(cc)) {
            $('#result').html('<p><strong>Votre IMC est de ' + cc + '</strong></p>');    
        } else {
            $('#result').html('<p></p>');   
        };
    }
    $('#taille').keyup(function(){
        calcul();
    });
    $('#poids').keyup(function(){
        calcul();
    });
});
