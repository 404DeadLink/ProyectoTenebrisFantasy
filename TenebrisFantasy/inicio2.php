<?php
    session_start();

    if(isset($_POST["nombre"]) && $_POST["nombre"] != ""){
        $_SESSION["nombre"] = $_POST["nombre"];
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="CSS/style_inicio2.css">
    <link rel="stylesheet" href="TOOLTIPSTER/tooltipster.bundle.min.css">
    <link rel="stylesheet" href="TOOLTIPSTER/tooltipster-sideTip-borderless.min.css">
    <script type="text/javascript" src="JS/jquery.js"></script>
    <script type="text/javascript" src="JS/jsinicio2.js"></script>
    <script type="text/javascript" src="TOOLTIPSTER/tooltipster.bundle.min.js"></script>
    <title>Tenebris Fantasy</title>
</head>
<body>

<div id="fondo">
    <img src="MULTIMEDIA/IMAGENES/dormitorio.jpg" alt="" id="img_fondo">
</div>

    <div id="recuadro_dialogo">
        <img src="MULTIMEDIA/SPRITES/bolsa.png" alt="bolsa" id="bolsa" class="tooltip" title="Inventario">
        <p id="typer">Estas de pie delante de tu cama, tu cuarto es pequeño (como toda la casa, familia humilde,
            pero oye, al menos eres guapo, o eso te dices a ti mismo por las mañanas…), la cama esta
            desecha, encima de ella se asoma una ventana por la cual entra la luz y el aire del campo. El
            resto del cuarto está lleno de tu ropa, hay una estantería grande a la derecha, en el este de la
            habitación. Detrás de ti al sur, está la puerta que da al salón principal.</p>
        <input type="text" id="comando">
    </div>

</body>
</html>
