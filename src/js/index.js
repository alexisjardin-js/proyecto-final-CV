/////////////implementación de Dark-mode///////////////////////////////
const switchButton = document.getElementById('switch');
switchButton.addEventListener('click', function() {
    document.getElementById('form-c').classList.toggle('contact-form-dark');
    document.getElementById('nombre').classList.toggle('input-f-dark');
    document.getElementById('email').classList.toggle('input-f-dark');
    document.getElementById('mensaje').classList.toggle('textarea-f-dark');
    document.getElementById('footer').classList.toggle('footer-dark');
    document.body.classList.toggle('darkMode');
    switchButton.classList.toggle('active')
});
/////////////////interacción mostrar/ocultar formulario de contacto//////
let clic = 1;
function showHide() {
    if (clic == 1) {
        document.getElementById('form-c').style.display='block';
        window.scroll(0,1)
        clic = clic + 1;

    } else {
        document.getElementById('form-c').style.display = 'none';
        clic = 1;
    }

}
//////////////////envió de formulario a base de datos firebase///////////////////////
let nombre = document.getElementById('nombre');
let email = document.getElementById('email');
let mensaje = document.getElementById('mensaje');
let alertMessage = document.getElementById('alert');
let successMessage = document.getElementById('success');

function enviar() {
    if (nombre.value !== '' && email.value !== '' && mensaje.value !== '') {
        db.collection("contact-list").add({
            nombre: nombre.value,
            email: email.value,
            mensaje: mensaje.value,
        })
        successMessage.classList.remove('hidden');
        setTimeout(function()  {
            successMessage.classList.add('hidden');
        }, 3000)
        document.getElementById('form-c').style.display = 'none';
        nombre.value = ''
        email.value = ''
        mensaje.value = ''
    }
    else {
        alertMessage.classList.remove('hidden');
        setTimeout(function() {
            alertMessage.classList.add('hidden');
        }, 3000)
    }
}

