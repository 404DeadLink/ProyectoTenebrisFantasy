$(document).ready(inicial);

function inicial(){
    $("#cuadro_texto").hide();
    $("#enter").hide();
    $("#recuadro_dialogo").hide();
    $("#bolsa").hide();
    $("#typer").hide();
    $("#brillo").hide();
    $("#enter2").hide();
    $("#fondo").hide();
    setTimeout(segundo, 1500);

    $('.tooltip').tooltipster({
        theme: 'tooltipster-borderless'
    });
}

function segundo(){
    document.getElementById("sueño").play();
    $("#cuadro_texto").fadeIn("slow");
    setTimeout(tercero, 2000);
}

function tercero(){
    $("#enter").fadeIn("slow");
    setTimeout(cambio_color, 2000);
}

function cambio_color(){
    $("#enter").css("color","red");
    setTimeout(cambio_color_2,500);
}

function cambio_color_2(){
    $("#enter").css("color","yellow");
    setTimeout(cambio_color,500);
}

setTimeout(cuarto,3000);

function cuarto(){
    $(document).keydown(function(event){
        if(event.keyCode == 13){
            $("#cuadro_texto").fadeOut("slow");
            $("#enter").fadeOut("slow");
            setTimeout(cuarto_2,2000);
        }
    });
}

function cuarto_2(){
    document.getElementById("musica").volume-=0;
    $("#brillo").fadeIn("slow");
    $("#brillo").attr("src","MULTIMEDIA/SPRITES/brillo.png");
    $("#brillo").fadeOut("slow");
    setTimeout(cuarto_3,1500);

}

function cuarto_3(){
    $("#brillo").remove();
    setTimeout(quinto,500);
}

function quinto(){
    $("#recuadro_dialogo").fadeIn("slow");
    $("#bolsa").fadeIn("slow");
    $("#typer").show();
    setTimeout(sexto,2000);
}

function sexto(){
    $("#enter2").fadeIn("slow");

    $(document).keydown(function(event){
        if(event.keyCode == 13){
            $("#enter2").fadeOut("slow");
            $("#typer").text("-??? – Eoohhh, ¿Por qué está cerrada tu puerta? ¡No puedo entrar, parece que está atascada, te espero fuera, no tardes!-");
            setTimeout(septimo,2000);
        }
    });
}

function septimo(){
    $("#enter2").fadeIn("slow");
    $(document).keydown(function(event){
        if(event.keyCode == 13){
            window.open("inicio2.php", "_self");
        }
    });
}
