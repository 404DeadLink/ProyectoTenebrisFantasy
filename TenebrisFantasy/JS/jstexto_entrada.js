$(document).ready(inicial);

    function inicial(){

        $("#libro").hide();
        $("#enter").hide();
        $(".a1").hide();
        $(".a2").hide();
        $(".a3").hide();
        $(".a4").hide();
        $(".a5").hide();
        $("#texto1").hide();
        $("#galaxia").hide();
        $("#arbol").hide();
        $("#planeta").hide();
        $("#enano").hide();
        $("#humana").hide();
        $("#triton").hide();
        $("#raro").hide();
        $("#elfo").hide();
        $("#mago").hide();
        $("#crystal").hide();
        $("#ciudad").hide();
        $(".a6").hide();
        $("#silueta").hide();
        $("#libro").fadeIn("slow");
        document.getElementById("diosas").play();

        setTimeout(siguiente, 2000);

    function siguiente(){
        $("#texto1").fadeIn("slow");
        setTimeout(siguiente1, 2000);
    }

    function siguiente1(){
        $(".a1").fadeIn("slow");
        $("#galaxia").fadeIn("slow");
        setTimeout(siguiente2, 500);
    }

    function siguiente2(){
        $("#enter").fadeIn("slow");
        setTimeout(cambio_color,500);
    }

    function cambio_color(){
        $("#enter").css("color","black");
        setTimeout(cambio_color_2,500);
    }

    function cambio_color_2(){
        $("#enter").css("color","red");
        setTimeout(cambio_color,500);
    }

    setTimeout(segundo,4000);

    }

    function segundo(){
        $(document).keydown(function(event){
            if(event.keyCode == 13){
                $("#enter").hide();
                $(".a1").remove();
                $("#galaxia").hide();
                $(".a2").fadeIn("slow");
                $("#planeta").fadeIn("slow");
                $("#arbol").fadeIn("slow");
                setTimeout(tercero,4000);
            }
        });

    }

    function tercero(){
        $("#enter").fadeIn("slow");
        $(document).keydown(function(event){
            if(event.keyCode == 13){
                $("#enter").hide();
                $(".a2").remove();
                $("#planeta").hide();
                $("#arbol").hide();
                $(".a3").fadeIn("slow");
                $("#elfo").fadeIn("slow");
                $("#triton").fadeIn("slow");
                $("#enano").fadeIn("slow");
                $("#humana").fadeIn("slow");
                $("#raro").fadeIn("slow");
                setTimeout(cuarto,4000);
            }
        });
    }

    function cuarto(){
        $("#enter").fadeIn("slow");
        $(document).keydown(function(event){
            if(event.keyCode == 13){
                $("#enter").hide();
                $(".a3").remove();
                $(".a4").fadeIn("slow");
                $("#elfo").remove();
                $("#triton").remove();
                $("#enano").remove();
                $("#humana").remove();
                $("#raro").remove();
                $("#crystal").fadeIn("slow");
                $("#mago").fadeIn("slow");
                setTimeout(quinto,4000);
            }
        });
    }

    function quinto(){
        $("#enter").fadeIn("slow");
        $(document).keydown(function(event){
            if(event.keyCode == 13){
                $("#enter").hide();
                $("#crystal").remove();
                $("#mago").remove();
                $(".a4").remove();
                $(".a5").fadeIn("slow");
                $("#ciudad").fadeIn("slow");

                setTimeout(sexto,4000);
            }
        });
    }

    function sexto(){
        $("#enter").fadeIn("slow");
        $(document).keydown(function(event){
            if(event.keyCode == 13){
                $(".a5").remove();
                $("#ciudad").remove();
                $(".a6").fadeIn("slow");
                $("#silueta").fadeIn("slow");
                setTimeout(septimo,4000);
            }
        });
    }


    function septimo(){
        document.getElementById("diosas").volume-=0.3;
        $("#enter").fadeIn("slow");
        $(document).keydown(function(event){
            if(event.keyCode == 13){
                if($("#name").val() == ""){
                  alert("Debes introducir un nombre para continuar la historia.");
                }else{
                  window.open("localhost/JUEGO/entra_texto.html", "_self");
                }
            }
        });
    }
