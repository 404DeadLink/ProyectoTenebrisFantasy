$(document).ready(inicial);
        
        function inicial(){
            
            $("#primero").fadeIn(3000);
            setTimeout(quitar_primero,3000);
            
        }
        
        function quitar_primero(){
            
             $("#primero").fadeOut(3000);
             setTimeout(poner_segundo,3500);
            
        }
        
        function poner_segundo(){
            
            document.getElementById("musica").play();
            $("#fondo").fadeIn(3000);
            setTimeout(poner_tercero,3500);
        }
        
        function poner_tercero(){
            
            $("#titulo").fadeIn(3000);
            setTimeout(antorcha_show,1500);
            setTimeout(enter,3000);
        }
        
        function antorcha_show(){
            
            $("#antorcha").fadeIn(1500);
            $("#antorcha_2").fadeIn(1500);
        }
        
        function enter(){
            
            $("#continuar").fadeIn(1000);
            setTimeout(cambio_color,500);
            $(document).keydown(function(event){
                
                if(event.keyCode == 13){
                    
                    $("#titulo").animate({
                        
                        top: "-25%"
                        
                    },2500);
                    $("#antorcha").animate({
                        
                        top: "-25%"
                        
                    },2500);
                    $("#antorcha_2").animate({
                        
                        top: "-25%"
                        
                    },2500);
                    
                    $("#continuar").fadeOut("fast");
                    document.getElementById("musica").volume = 0.4;
                    $("#menu").fadeIn(3000);
                    setTimeout(mostrar_focus,3000);
                    
                }
                
            });
            
            function mostrar_focus(){
                $("#arriba").focus();
            }

            $(document).keydown(function(event){
                
                if(event.keyCode == 38){
                    
                    document.getElementById("musica_menu").play();
                    $("#arriba").focus();
                    
                    
                }else if(event.keyCode == 40){
                    
                    document.getElementById("musica_menu").play();
                    $("#abajo").focus();
                    
                }
                
            });
        }
        
        function cambio_color(){
            
            $("#continuar").css("color","white");
            setTimeout(cambio_color_2,500);
        }
       
        function cambio_color_2(){
            
            $("#continuar").css("color","yellow");
            setTimeout(cambio_color,500);
        }

