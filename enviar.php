<?php
$destino="elianabenitezvaldez@gmail.com";
$nombre= $_post["nombre"];
$E-mail= $_post["E-mail"];
$Telefono= $_post["Telefono"];
$mensaje= $_post["mensaje"];
$contenido="Nombre: " .$nombre ."\nE-mail: " .$E-mail . "\nTelefono:".$telefono. "\nMensaje:" .$mensaje; 
mail($destino,"Contacto", $contenido);
header("Location:gracias.html");


?>