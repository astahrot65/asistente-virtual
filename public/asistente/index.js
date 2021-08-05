const btnStartRecord=document.getElementById('btnStartRecord');
const btnStopRecord=document.getElementById('btnStopRecord');
const texto=document.getElementById('texto');
const btnPlayText=document.getElementById('playText');
const btnclear=document.getElementById('btnclear');
let recognition= new webkitSpeechRecognition();

function limpiar (elemento){
    elemento.value="";
}
function verifica(elemento)
{
    if(elemento.value=="")
    elemento.value="valor por defecto"
}
btnclear.addEventListener('click',()=>{
    texto.value="";
});
recognition.lang='es-VE';
recognition.continuous=true;
recognition.interimResults=false;

recognition.onresult = (event) =>{
    const results =event.results;
    const frase=results[results.length - 1][0].transcript;
    texto.value += frase;
}

recognition.onend=(event)=>{
    console.log('El micrófono deja de  escuchar');
}
recognition.onerror=(event)=>{
console.log(event.error);
}
btnStartRecord.addEventListener('click',()=>{
    recognition.start();
});
btnStopRecord.addEventListener('click',()=>{
recognition.abort();
});
btnPlayText.addEventListener('click',()=>{
    leertexto(texto.value);
});
function leertexto(texto){
    const speech=new SpeechSynthesisUtterance();
    speech.text=texto;
    speech.volume=1;
    speech.rate=1;
    speech.pitch=1;
    window.speechSynthesis.speak(speech);
}

if (annyang) {

    //Variable para almacenar las voces de nuestro sistema.
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

    //Definimos los comandos a utilizar.
    var commands = {
        'quiero Buscar *valor':function(valor){
            $("#parametro").val(valor);
            window.open('https://www.google.com/search?q='+valor+'','_blank');

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
        'cuentame un chiste': function () {
            utter.text = 'Por qué las focas del circo miran siempre hacia arriba?   Porque es donde están los focos.',
            'Estas obsesionado con la comida!   No se a que te refieres croquetamente.',
            'Por que estás hablando con esas zapatillas?   Porque pone "converse"',
            'Buenos dias, me gustaria alquilar "Batman Forever".   No es posible, tiene que devolverla tomorrow.';
            //Setea la voz que queremos usar en base a nuestra lista.
            utter.voice = voices[4];
            window.speechSynthesis.speak(utter);
        },
        'como estas': function () {
            utter.text = 'muy bien';
            utter.voice = voices[4];
            window.speechSynthesis.speak(utter);
            utter.text = 'y tu como estas ';
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
        //Array que devuelve aleatoriamente un elemento del array, en este caso un chiste.
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


    //Esto nos sirve para ver que escucha el programa en tiempo real.
    /*
    annyang.addCallback('result', function(phrases) {
      console.log("I think the user said: ", phrases[0]);
      console.log("But then again, it could be any of the following: ", phrases);
       });
       */


    //Sumamos todos los comandos a annyang.
    annyang.addCommands(commands);

    //Annyang comienza a escuchar.
    annyang.start({ autoRestart: false, continuous: true });
 
}
