$(document).ready (function () {

    // salvo in una variabile la struttura del mio template
    var source = $("#disk-template").html();

    // dico ad Hendlebars qual è il mio template
    var template = Handlebars.compile (source);

    // chiamo ajax per avere l'elenco dei dischi
    $.ajax ({
            "url": "https://flynn.boolean.careers/exercises/api/array/music",
            "method": "GET",
            "success": function (data) {
                var dischi = data.response;
                // ciclo tutti i dischi
                for (var i = 0; i < dischi.length; i++) {
                    var cover = dischi[i].poster;
                    var title = dischi[i].title;
                    var author = dischi[i].author;
                    var release = dischi[i].year;

                    // salvo in un oggetto le proprietà che costituiscono il template
                    var context = {
                        cover: cover,
                        title: title,
                        author: author,
                        release: release
                    };

                    // utilizzare la funzione "template" con le proprietà assegnate nell'oggetto "context"
                    var html = template(context);
                    // appendo al mio html
                    $("#discs").append (html);
                }
            },
            "error": function () {
                alert ("Error");
            }
        });
})
