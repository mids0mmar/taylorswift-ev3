let contenidoTraducido = document.getElementById('contenidoTraduccion')
let boton = document.getElementById('traductor')
let html

$(document).ready(function(){

    $.ajax({
        url: 'espanol.html',
        type: 'get',
        success: function(respuesta){
            contenidoTraducido.innerHTML = respuesta;
        },
        error: function(){
            console.log('No carga el archivo');
        }
    });

    $('#traductor').click(function(){
        $(this).toggleClass('idioma');

        if(boton.classList.contains('idioma')){
            $.get('ingles.html', function(respuesta){
                contenidoTraducido.innerHTML = respuesta;
            
            });
        } else {
            $.get('espanol.html', function(respuesta){
                contenidoTraducido.innerHTML = respuesta;
                
            });
        }
    });
});
