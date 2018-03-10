function Mostrar()
{
var largoTerreno = parseInt(document.getElementById("largo").value);
var anchoTerreno = parseInt(document.getElementById("ancho").value);
var perimetro = largoTerreno * 2 + anchoTerreno * 2;
var alambre = perimetro * 3;
alert ("Se necesitan " + alambre + "mtrs de alambre");



}
