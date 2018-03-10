function Mostrar()
{
  var importe = parseInt(prompt("Ingrese el importe"));
  var iva = importe * .21;
  var precioFinal = importe + iva;
  document.getElementById("importeFinal").value = precioFinal;



}
