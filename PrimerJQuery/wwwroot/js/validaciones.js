$(document).ready(function () {

    alert('validaciones.js al cargar');

    $('#contactForm').submit(function (event) {

        alert('validaciones.js al enviar el formulario');

        event.preventDefault();

        var name = $('#name').val().trim();
        if(name===''){
            $('#nameError').text('El nombre es obligatorio');
        } else {
            $('#nameError').text('');
        }
       
        var name = $('#email').val().trim();
        if(name===''){
            $('#emailError').text('El email es obligatorio');
        } else {
            $('#emailError').text('');
        }
    });
});