function Mostrar()
{
   var num1 = (prompt("Ingrese un numero"));
   var num2 = (prompt ("Ingrese otro numero"));
   var mensaje;

   if ( num1 == num2)
    {
        mensaje = num1 * num2;

    }
    else 
    {
        if (num1 > num2)
        mensaje = num1 - num2;
        
    }
}
