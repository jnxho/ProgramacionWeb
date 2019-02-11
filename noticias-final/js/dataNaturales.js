

var data=new Array();

data.push(
    {
        question:   "El trabajo que se realiza en  " ,
        text: " es importante porque, por ejemplo, se cultivan plantas o se crían animales que nos sirven de alimento"+ 
                "<p align='center' class='my-3'><img src='imgs/campoCiudad.png' width='350'></p>",
        options: [
            "el campo",
            "la ciudad",
            "las fabricas",
            "el mar"
        ],
        answer: 0
    },
    {
        question:   "En " ,
        text:   " hay una gran cantidad de población. En ocasiones hay más viviendas que zonas verdes, y se generan " + 
                "grandes cantidades de desechos y contaminación." + 
                "<p align='center' class='my-3'><img src='imgs/campoCiudad.png' width='350'></p>"            ,
        options: [
            "el campo",
            "la ciudad",
            "el mar",
            "la escuela"
        ],
        answer: 1
    },
    {
        question:   "  " ,
        text: " se caracteriza por tener pocos medios de transporte, hospitales y escuelas."+ 
                "<p align='center' class='my-3'><img src='imgs/campoCiudad.png' width='350'></p>",
        options: [
            "El campo",
            "La ciudad",
            "El mar",
            "La tiendita"
        ],
        answer: 0
    },
    {
        question:   "En " ,
        text: " la mayoría de las viviendas son de madera, barro o ladrillo; también hay mucho espacio entre una casa y otra." + 
                "<p align='center' class='my-3'><img src='imgs/campoCiudad.png' width='350'></p>"            ,
        options: [
            "el campo",
            "la ciudad",
            "la playa",
            "el cine"
        ],
        answer: 0
    },
    {
        question:   "En " ,
        text:   " hay servicios de transporte, hospitales, escuelas, viviendas, edificios, grandes construcciones." + 
                "<p align='center' class='my-3'><img src='imgs/campoCiudad.png' width='350'></p>"            ,
        options: [
            "el campo",
            "la ciudad",
            "el mar",
            "las fábricas"
        ],
        answer: 1
    },
    {
        question:   "En " ,
        text:   " hay servicios de transporte, hospitales, escuelas, viviendas, edificios, grandes construcciones." + 
                "<p align='center' class='my-3'><img src='imgs/campoCiudad.png' width='350'></p>"            ,
        options: [
            "<img src='imgs/campoCiudad.png' width='350'>",
            "la ciudad",
            "el mar",
            "las fábricas"
        ],
        answer: 1
    }
);



var resps = new Map();

function showResults(){

    var suma=0;

    resps.forEach(
            function(valor){ suma+=valor;}
        );
    console.log(suma);

    scrollBar.style.width= (resps.size*100/data.length).toString()+"%";
    scrollBarCalifica.style.width= (suma*100/data.length).toString()+"%";
}

function pillTab(id){

    var activo =  "";
    if(id==0)
        activo =  " active ";

    return "<a class='nav-item nav-link "+activo+"' id='navtab-"+id+"' data-toggle='tab' "+
            "href='#nav-"+id+"' role='tab' aria-controls='nav-"+id+"' aria-selected='true'>"+(1+id)+"</a>";
}

function revisar(idPreg){
    var tmp  = document.getElementById('pp'+idPreg).value.toUpperCase();
    var tmp2 = data[idPreg].options[data[idPreg].answer].toUpperCase();
    console.log(tmp + " " + tmp2);

    if(tmp == tmp2)
        resps.set(idPreg, 1);
    else
        resps.set(idPreg, 0);

    console.table(resps);

    showResults();
}

function pillContent(id, preg){
    var activo =  "";
    if(id==0)
        activo =  "  show active ";

    var txt = preg.question + "<input list='ll"+id+"' name='p"+id+"' id='pp"+id+"'  onchange='revisar("+id+")'>" + preg.text+
    "<datalist id='ll"+id+"'>";

    preg.options.forEach(
            function(valor){
                txt +=  "<option value='" +valor +"'>";
            }
        );
    txt += "</datalist>";

    return "<div class='tab-pane fade"+activo+"' id='nav-"+id+"' role='tabpanel' aria-labelledby='navtab-"+id+"'>"+txt+"</div>";
}

var navegacion = document.getElementById("navegacion");
console.log(navegacion);
navegacion.innerHTML = "";

var preguntas = document.getElementById("preguntas");
preguntas.innerHTML = "";

data.forEach(
    function (value, index) {

        //navegacion
        console.table(value);
        navegacion.innerHTML += pillTab(index);

        //preguntas
        preguntas.innerHTML += pillContent(index, value);
        
        
    }
);



var scrollBar = document.getElementById('progreso');
var scrollBarCalifica = document.getElementById('calificacion');