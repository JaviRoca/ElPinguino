
/*=====ALERTA COMENTARIOS=====*/

var alertPlaceholder = document.getElementById('alertaEnviado')
var alertTrigger = document.getElementById('alertaEnviadoBtn')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert('Gracias por transformar tu tiempo en una construcción colectiva!', 'success')
  })
}

/*=====CleanTxt=====*/

function validar() {

    console.log('Se envio la recomendacion')
    formularioRecomendaciones. reset();
    return false;
}