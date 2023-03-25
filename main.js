$(document).ready(function () {
    $('form').submit(function (e) {
        e.preventDefault();
        let nomeTarefa = $('#nomeTarefa').val();
        if (nomeTarefa !== "") {
            let novaTarefa = $('<li>').text(nomeTarefa);
            $('#novaTarefa').append(novaTarefa);
        
            $("li").click(function () {
                $(this).css("text-decoration", "line-through");
            })
            
            $('#nomeTarefa').val("");
        }
    });


});






