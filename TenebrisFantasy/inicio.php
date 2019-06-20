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
    <link rel="stylesheet" href="CSS/style_inicio.css">
    <link rel="stylesheet" href="TOOLTIPSTER/tooltipster.bundle.min.css">
    <link rel="stylesheet" href="TOOLTIPSTER/tooltipster-sideTip-borderless.min.css">
    <script type="text/javascript" src="JS/jquery.js"></script>
    <script type="text/javascript" src="JS/jsinicio.js"></script>
    <script type="text/javascript" src="TOOLTIPSTER/tooltipster.bundle.min.js"></script>
    <title>Tenebris Fantasy</title>
</head>
<body>
    <img src="" alt="" id="brillo">

    <div id="cuadro_texto">
    Todo está negro…  Escuchas varias voces, pero no las entiendes, son muy suaves,
    distantes y distorsionadas, no hablan al unísono y parece que cada una quiere sobreponerse a la otra,
    todo enmudece, estas solo, en la nada cayendo, pero notas que una fuerza te sujeta poco a poco,
    como si te hundieras en agua, tienes los ojos cerrados, pero aunque no sabes cómo, puedes ver,
    simplemente te dejas llevar, te frenas de golpe, no te asustas, estás  tranquilo, calmado, casi,
    como en casa, delante de ti aparece un símbolo morado, una espiral deforme con dos rayas cruzándola
    y perfectamente encajada en un rombo negro brillante, alzas la mano e intentas tocarlo…
    </div>

    <div id="enter">
        <p>Pulsa ENTER para continuar</p>
    </div>

    <div id="enter2">
        <p>Pulsa ENTER para continuar</p>
    </div>

    <div id="recuadro_dialogo">
        <img src="MULTIMEDIA/SPRITES/bolsa.png" alt="bolsa" id="bolsa" class="tooltip" title="Inventario">
        <p id="typer">Un rayo de luz te da justo en la cara, parpadeas te frotas los ojos y después de un largo
            bostezo, te levantas de tu cama con aire somnoliento, tus pies descalzos tocan el frío suelo de
            madera vieja de tu casa, el tacto gélido en las plantas de tus pies viene de perlas para
            despertarte, *toc toc toc* alguien aporrea tu puerta.</p>
    </div>

    <audio hidden id="sueño">
        <source src="MULMEDIA/AUDIOS/DREAM.ogg" type="audio/ogg">
        <source src="MULMEDIA/AUDIOS/DREAM.mp3" type="audio/mpeg">
        <source src="MULMEDIA/AUDIOS/DREAM.wav" type="audio/wav">
    </audio>

    <audio hidden id="casa">
        <source src="MULMEDIA/AUDIOS/HOUSE.mp3" type="audio/mpeg">
    </audio>

</body>
</html>
