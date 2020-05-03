var socket = io();

socket.on('estadoActual', function(data) {
    actualizaHtml(data);
});

socket.on('ultimos4', function(data) {
    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();



    actualizaHtml(data);
});

function actualizaHtml(data) {
    var i = 0;
    while (i < data.ultimos4.length) {
        $('#lblEscritorio' + (i + 1)).text("Escritorio " + data.ultimos4[i].escritorio);
        $('#lblTicket' + (i + 1)).text("Ticket " + data.ultimos4[i].numero);
        i++;
    }
}