$(document).ready(inicial);

function inicial(){

    $('.tooltip').tooltipster({
        theme: 'tooltipster-borderless'
    });

    setTimeout(primero, 1000);
}


function primero(){
    $("#comando").keydown(function(event){
        if(event.keyCode == 13){
            if($("#comando").val("ir salon") || $("#comando").val("ir sur") || $("#comando").val("ir salon principal")){
                $("#img_fondo").fadeOut("slow");
                $("#bolsa").fadeOut("slow");
                $("#recuadro_texto").fadeOut("slow");
                $("#img_fondo").attr("src", "MULTIMEDIA/IMAGENES/salon2.jpg");
                $("#comando").val("");
                setTimeout(segundo, 500);
            }
        }
    });
}

function segundo(){
    $("#img_fondo").fadeIn("slow");
    $("#recuadro_texto").fadeIn("slow");
    $("#bolsa").fadeIn("slow");
    $("#typer").html("hola");
}