var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

socket.on('estadoActual', function(datos) {
    $('#lblNuevoTicket').text(datos.actual);
});


$('button').on('click', function() {
    socket.emit('siguienteTicket', {}, function(resp) {
        console.log('respuesta server: ', resp);

        $('#lblNuevoTicket').text(resp);
    });
});