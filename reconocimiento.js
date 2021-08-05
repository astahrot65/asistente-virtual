var voices;

//Inicializamos utter.

var utter = new SpeechSynthesisUtterance();

utter.volume=1;
utter.rate=1;
utter.pitch=1;
utter.lang = 'es-MX';
utter.continuous=true;
utter.interimResults=false;
//Cargamos las voces que tenemos en nuestro sistema y las mostarmos en un arreglo por consola.
window.speechSynthesis.onvoiceschanged = function () {
    voices = window.speechSynthesis.getVoices();
    console.log(voices);
};
try {
    
} catch (error) {
    
}

    if (annyang){
        var commands={
            'Buscar en google *valor':function(valor){
                $("#parametro").val(valor);
                window.open('https://www.google.com/search?q='+valor+'','_blank');

            },
            'Buscar en youtube *valor':function(valor){
                $("#parametro").val(valor);
                window.open('https://www.youtube.com/results?search_query='+valor+'','_blank');

            },
            'monitor dolar':function(){
                window.open('https://www.instagram.com/monitordolar/','_blank');

            },
            'hello': function () {
        /*   utter.text = 'Hola usuario';
            //Setea la voz que queremos usar en base a nuestra lista.
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
            */
           alert('hello word');
        },
        'hola maria': function () {
            utter.text = 'Hola usuario';
            //Setea la voz que queremos usar en base a nuestra lista.
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'a': function () {
            utter.text = 'Hola usuario';
            //Setea la voz que queremos usar en base a nuestra lista.
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'escribir en nombre *valor':function(valor){
            utter.text = valor;
            document.getElementById('escribir').innerHTML=valor;
            utter.voice = voices[21];
            console.log("escribir");
 
            window.speechSynthesis.speak(utter);
      
        },
        
        'cambiar el color':function(valor){
            utter.text = "se  cambio el texto en naranja";

           document.getElementById('colocar').style.color ="orange";
           document.getElementById('escribir').style.color ="orange";
           document.body.style.backgroundColor='#0D7690';
           utter.voice = voices[21];
           console.log("escribir");

           window.speechSynthesis.speak(utter);
        },
        'quitar el color':function(valor){
            utter.text = "se  cambio el texto en negro";

           document.getElementById('colocar').style.color ="black";
           document.getElementById('escribir').style.color ="black";
           document.body.style.backgroundColor='white';
           utter.voice = voices[21];
           console.log("escribir");

           window.speechSynthesis.speak(utter);
        },
        'escribir en apellido *valor':function(valor){
            utter.text = valor;
           document.getElementById('colocar').innerHTML=valor;
           utter.voice = voices[21];
           console.log("escribir");

           window.speechSynthesis.speak(utter);
        },
        'reproducir':reproducirVideo,
        'pausar':pausarVideo,
        ' chiste': function () {
            chistes = ['Por qué las focas del circo miran siempre hacia arriba?   Porque es donde están los focos.',
                'Estas obsesionado con la comida!   No se a que te refieres croquetamente.',
                'Por que estás hablando con esas zapatillas?   Porque pone "converse"',
                'Buenos dias, me gustaria alquilar "Batman Forever".   No es posible, tiene que devolverla tomorrow.'
            ];
            utter.text = chistes[Math.floor(Math.random() * chistes.length)]
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
        },
        'como estas': function () {
            utter.text = 'muy bien';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
            utter.text = 'y tu como estas ';
            window.speechSynthesis.speak(utter);
            utter.text = 'me alegro';
            window.speechSynthesis.speak(utter);
          
        },
        'chao': function () {
            utter.text = 'chao anthony';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
     
        },
        'dime la hora': function () {
            horasa();
     
        },
        'mostrar hora': function () {
            horasa();
            $("#mostrarHora").show("slow");
        },
        'ocultar hora': function () {
           
                $("#mostrarHora").hide(1500);
            
        },
        'ocultar video': function () {
           
            $("#mivideo").hide(1500);
        
    },
    'abrir facebook': function () {
           
        window.open('https://es-la.facebook.com/','_blank');
    
},
'abrir instagram': function () {
           
    window.open('https://www.instagram.com/','_blank');

},
'abrir twitter': function () {
           
    window.open('https://twitter.com/?lang=es','_blank');

},
'abrir portafolio': function () {
           
    window.open('https://socialmultidesign.com.ve/','_blank');

},
    'mostrar video': function () {
           
        $("#mivideo").show("slow");
    
},
'colocar en a *valor': function (valor) {
           
    utter.text = valor;
    document.getElementById('numero1').value=valor;
    utter.voice = voices[21];
    console.log("numero1");

    window.speechSynthesis.speak(utter);

},
'colocar en b *valor': function (valor) {
           
    utter.text = valor;
    document.getElementById('numero2').value=valor;
    utter.voice = voices[21];
    console.log("numero2");

    window.speechSynthesis.speak(utter);

},
'sumar': function () {
 sumar();

},
'restar': function () {
           
  resta();

},
'multiplicar': function () {
           
multiplicador();

},
'dividir': function () {
           
  dividir();

},
        'hola': function () {
            utter.text = 'hola, cual es tu nombre?';
            utter.voice = voices[21];
            window.speechSynthesis.speak(utter);
            //Guarda el nombre que le decimos por voz.
            annyang.addCallback('result', function (phrases) {
                //Imprime el nombre por consola.
                console.log("Nombre: ", phrases[0]);
                //Para el evento result.
                annyang.removeCallback('result');
                //Nos dice hola + el nombre que le digamos por voz.
                utter.text = 'Hola,como estas ' + phrases[0];
                window.speechSynthesis.speak(utter);
            });
        }
        };

            //Sumamos todos los comandos a annyang.
    annyang.addCommands(commands);
    annyang.setLanguage("es");
    annyang.start();
    }
    const video=document.getElementById("mivideo");
function reproducirVideo(){
   
    try {
   video.play();
    } catch (error) {
      console.log("nada");
  
    }finally{

       video.play();
    }

    }
   // video.play();
    
    function pausarVideo(){
        video.pause();
    }
    const mostrar=document.getElementById('mostrarHora');
    const horas=document.getElementById('hora');

 
    function mostrarHora(){
        var fechaHora = new Date();
        var horas = fechaHora.getHours();
        var minutos = fechaHora.getMinutes();
        var segundos = fechaHora.getSeconds();
    var sufijo = ' am';
    if(horas > 12) {
      horas = horas - 12;
      sufijo = ' pm';
    }
    
    if(horas < 10) { horas = '0' + horas; }
    if(minutos < 10) { minutos = '0' + minutos; }
    if(segundos < 10) { segundos = '0' + segundos; }
    hora=document.getElementById("mostrarHora").innerHTML = horas+':'+minutos+':'+segundos+sufijo;
    
    }
    const btnhora=document.getElementById('btnhora');
    btnhora.addEventListener('click',()=>{
     horasa();
        
        
    });
    function horasa(){
        utter.text = hora;
        utter.voice = voices[21];
        window.speechSynthesis.speak(utter);
    }
    window.onload = function() {
        setInterval(mostrarHora, 1000);
        document.getElementById('mostrarHora').style.display = 'none';
        document.getElementById('mivideo').style.display = 'none';
      }
      $("#btnhora").click(function() {
   
        $("#mostrarHora").show("slow");
        });
        $("#btnvideo").click(function() {
   
            $("#mivideo").show("slow");
            });
            function sumar(){
                var numero1=Number(document.getElementById("numero1").value);
                var numero2=Number(document.getElementById("numero2").value);
           
       
                 var resultado;
                 resultado=numero1+numero2;

                 utter.text = (resultado);
                 utter.voice = voices[21];
                 window.speechSynthesis.speak(utter);
   
         document.getElementById("calculo").textContent=resultado;
            }
          
            function dividir(){
                var numero1=Number(document.getElementById("numero1").value);
                var numero2=Number(document.getElementById("numero2").value);
           
       
                 var resultado;
                 resultado=numero1/numero2;

                 utter.text = (resultado);
                 utter.voice = voices[21];
                 window.speechSynthesis.speak(utter);
   
         document.getElementById("calculo").textContent=resultado;
            }
            function resta(){
                var numero1=Number(document.getElementById("numero1").value);
                var numero2=Number(document.getElementById("numero2").value);
           
       
                 var resultado;
                 resultado=numero1-numero2;

                 utter.text = (resultado);
                 utter.voice = voices[21];
                 window.speechSynthesis.speak(utter);
   
         document.getElementById("calculo").textContent=resultado;
            }
            function multiplicador(){
                var numero1=Number(document.getElementById("numero1").value);
                var numero2=Number(document.getElementById("numero2").value);
           
       
                 var resultado;
                 resultado=numero1*numero2;

                 utter.text = (resultado);
                 utter.voice = voices[21];
                 window.speechSynthesis.speak(utter);
   
         document.getElementById("calculo").textContent=resultado;
            }
                