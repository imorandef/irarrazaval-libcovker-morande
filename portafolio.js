var trabajos = [{
    figure: "media/trabajo-01-desfile.jpg",
    alt: "Descripción de la imagen",
    title: "Campaña free de nipple",
    about: "Workshop liberación femenina",
    url: "https://pousta.com/freethenipple/"
}, {
    figure: "media/trabajo-02-app.jpg",
    alt: "Descripción de la imagen",
    title: "Grita",
    about: "Gráfica para ONG feminista",
    url: "https://www.instagram.com/grita_grlpwr/"
}, {
    figure: "media/trabajo-03-homy.jpg",
    alt: "Descripción de la imagen",
    title: "África",
    about: "Eva",
    url: "https://eacnur.org/es/actualidad/imagenes/mujeres-africanas-50-fotografias-retratan-la-vida-en-africa"
}, {
    figure: "media/trabajo-04-editorial.jpg",
    alt: "",
    title: "Revista Femme",
    about: "Diseño de revista;textil como producto",
    url: "http://revistafemmecolombia.com/"
}, {
    figure: "media/trabajo-05-artesania.jpg",
    alt: "Descripción de la imagen",
    title: "Marcha",
    about: "Producción fotográfica marcha 8 de marzo",
    url: "https://www.youtube.com/watch?v=LabXibbtP2g"
}, {
    figure: "media/trabajo-06-textil.jpg",
    alt: "Descripción de la imagen",
    title: "8M",
    about: "Ilustración para el día de la mujer",
    url: "https://redfeminismo.wordpress.com/2016/02/29/10-ilustradoras-feministas-que-no-debes-perderte/"
}, {
    figure: "media/trabajo-07-materiales.jpg",
    alt: "Descripción de la imagen",
    title: "Ponte color",
    about: "Clases de auto maquillaje",
    url: "https://www.instagram.com/maquillaje_aileighton/"
}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    var cuatro = '<p><a href= "' + trabajos[i].url + '">Ver más</a><p>'
    $('#portafolio').append('<div class="item">' + uno + dos + tres + cuatro + '</div>')
});
