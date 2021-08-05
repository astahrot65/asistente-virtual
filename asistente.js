/*
Programa creado por youtube.com/ElTallerDeTD
20/2/20
https://github.com/imTDB
*/

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
            utter.voice = voices[4];
            window.speechSynthesis.speak(utter);
        },
        'a': function () {
            utter.text = 'Hola usuario';
            //Setea la voz que queremos usar en base a nuestra lista.
            utter.voice = voices[4];
            window.speechSynthesis.speak(utter);
        },
        'reproducir':reproducirVideo,
        'pausar':pausarVideo,
   
        'como estas': function () {
            utter.text = 'muy bien';
            utter.voice = voices[4];
            window.speechSynthesis.speak(utter);
            utter.text = 'y tu como estas ';
            window.speechSynthesis.speak(utter);
        },
        'chao': function () {
            utter.text = 'chao anthony';
            utter.voice = voices[4];
            window.speechSynthesis.speak(utter);
     
        },
        'hola': function () {
            utter.text = 'hola, cual es tu nombre?';
            utter.voice = voices[4];
            window.speechSynthesis.speak(utter);
            //Guarda el nombre que le decimos por voz.
            annyang.addCallback('result', function (phrases) {
                //Imprime el nombre por consola.
                console.log("Nombre: ", phrases[0]);
                //Para el evento result.
                annyang.removeCallback('result');
                //Nos dice hola + el nombre que le digamos por voz.
                utter.text = 'Hola, ' + phrases[0];
                window.speechSynthesis.speak(utter);
            });
        },
        'cuentame un chiste': function () {
            chistes = ['Por qué las focas del circo miran siempre hacia arriba?   Porque es donde están los focos.',
                'Estas obsesionado con la comida!   No se a que te refieres croquetamente.',
                'Por que estás hablando con esas zapatillas?   Porque pone "converse"',
                'Buenos dias, me gustaria alquilar "Batman Forever".   No es posible, tiene que devolverla tomorrow.'
            ];
            utter.text = chistes[Math.floor(Math.random() * chistes.length)]
            utter.voice = voices[4];
            window.speechSynthesis.speak(utter);
        }
        };

            //Sumamos todos los comandos a annyang.
    annyang.addCommands(commands);
    annyang.setLanguage("es");
    annyang.start();
    }
    const video=document.getElementById("mivideo");
function reproducirVideo(){

    video.play();
    }
    function pausarVideo(){
        video.pause();
    }
