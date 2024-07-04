import { tns } from "./node_modules/tiny-slider/src/tiny-slider"

$(document).ready(function() {

    $('.noticia-container').hover(function() {
        $(this).find('img').removeClass('blanco-y-negro'); 
        $(this).find('.text-news').css('text-decoration', 'underline white'); 
    }, function() {
        $(this).find('img').addClass('blanco-y-negro');
        $(this).find('.text-news').css('text-decoration', 'none'); 
    });


    $('.image-link').hover(function() {
        $(this).find('img').addClass('iluminar'); 
    }, function() {
        $(this).find('img').removeClass('iluminar'); 
    });

    
    let video = document.getElementById('miVideo');
    video.addEventListener('loadedmetadata', function() {
        video.muted = false; 
        let startTimeInSeconds = 22;
        video.currentTime = startTimeInSeconds;
    });

    $.getJSON({
        url: 'songss.json',
        success: function(data) {
            let listaCanciones1 = $('#listaCanciones1');
            let listaCanciones2 = $('#listaCanciones2');
    
            data.forEach(function(cancion, index) {
                let itemLista = `<li data-bs-toggle="modal" data-bs-target="#cancionModal" data-title="${cancion.title}" data-duracion="${cancion.duration}" data-imagen="${cancion.image}">${cancion.title}</li>`;
                
                if (cancion.id <= 8) {
                    listaCanciones1.append(itemLista);
                } else {
                    listaCanciones2.append(itemLista);
                }
            });
        },
        error: function() {
            console.log('Error al cargar el archivo JSON');
        }
    });
    


    $('#cancionModal').on('show.bs.modal', function(event) {
        let button = $(event.relatedTarget);
        let title = button.data('title');
        let duracion = button.data('duracion');
        let imagen = button.data('imagen');

        let modal = $(this);
        modal.find('.modal-title').text(title);
        modal.find('#cancionDuracion').text(`Duration: ${duracion}`);
        modal.find('#cancionImagen').attr('src', imagen);
    });
});



// PARA EL TOAST 


const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}


//para el vid

const videoInsertado = document.getElementById('videoAll');

let alertTimeout;

videoInsertado.addEventListener('mouseover', function () {

    alertTimeout = setTimeout(function () {
        alert('Sabías que Swift citó las obras de Barbara Stanwyck, John Cassavetes y Noah Baumbach como influencias artísticas para el video de all too well (10 minute version) ¡Revísalo cuando quieras en youtube!');
    }, 3000);  
});







let slider = tns({
    container: '.my-slider',
    axis: horizontal,
    items: 1,
    arrowKeys: true,
    speed: 400,
    autoplay: true,
    
    responsive: {
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 2
      },
      700: {
        gutter: 20
      },
      900: {
        items: 3
      }
    }
  });

