function addCard(item,hBefore, hAfter, index, bBefore ){
    item.innerHTML +=hBefore + "Pregunta " + (index+1).toString() +  hAfter + bBefore + hAfter;
}


var examen = document.getElementById("contenido");
examen.innerHTML = "";

var data=new Array();

data.push(
    {
        question:  "El error en el siguiente código: <pre class='prettyprint'>printf( \"The value is %d\\n\", &number ); </pre>",
        options: [
            "El especificador de tipo es incorrecto",
            "El ampersand no debe usarse para imprimir el valor de la variable",
            "Deben usarse comillas simples, no dobles para el printf"
        ],
        answer: 1
    },
    {
        question:  "El error en el siguiente código: <pre class='prettyprint'>scanf( \"d\", valor ); </pre>",
        options: [
            "El especificador de tipo es incorrecto",
            "El ampersand no debe usarse para leer el valor de la variable",
            "Deben usarse comillas simples, no dobles para el <b>scanf</b>"
        ],
        answer: 0
    },
    {
        question:  "El error en el siguiente código: <pre class='prettyprint'>printf( \"El producto de %d y %d es %d\\n\", x, y ); </pre>",
        options: [
            "La cantidad de variables no corresponde con la cantidad de  los especificadores de tipo",
            "Le falta ampersand a cada una de las variables",
            "La palabra correcta es <b>print</b>"
        ],
        answer: 0
    },
    {
        question:  "El error en el siguiente código: <pre class='prettyprint'>printf( \"El residuo de %d entre %d es\\n\", x, y, x % y ); </pre>",
        options: [
            "La cantidad de variables no corresponde con la cantidad de  los especificadores de tipo",
            "Le falta ampersand a cada una de las variables",
            "El módulo se calcula usando  <b>div</b>"
        ],
        answer: 0
    },
    {
        question:  "Suponga que <b>a=4, b=5, c=6;</b>, y se realiza la siguiente operación: <pre class='prettyprint'> a+b = c; </pre> <br/> el resultado de la asignación es:",
        options: [
            "c=6",
            "c=9",
            "No puede llevarse a cabo la operación"
        ],
        answer: 2
    },
    {
        question:  "Suponga el siguiente código: <pre class='prettyprint'>int a=5, b=9;\nif(a=>b){\n  printf(\"%d es mayor o igual a %d\\n\" a, b);\n}else\n  printf(\"%d es mayor a %d\", a, b); </pre> <br/> El error es:",
        options: [
            "El especificador de tipo es incorrecto",
            "El ampersand es necesario para imprimir valores usando printf",
            "Deben usarse comillas simples, no dobles para el printf",
            "Ninguno de los anteriores"
        ],
        answer: 3
    },
    {
        question:  "Suponga el siguiente código: <pre class='prettyprint'>int x = 2, y = 3;\nprintf( \"%d \", x + x );\nprintf( \"%d = %d\", x + y, y + x ); </pre> <br/>La salida en pantalla es:",
        options: [
            "4<br/>5",
            "4 5 = 5",
            "4 <br>5 = 5"
        ],
        answer: 1
    },
    {
        question:  "Suponga el siguiente código: <pre class='prettyprint'>x = 7 + 3 * 6 / 2 - 1;</pre> <br/>¿Qué operación se realiza primero?",
        options: [
            "suma",
            "multiplicación",
            "resta",
            "división",
            "asignación"
        ],
        answer: 1
    },
    {
        question:  "Suponga el siguiente código: <pre class='prettyprint'>x = 7 + 3 * 6 / 2 - 1;</pre> <br/>¿Qué operación se realiza al último?",
        options: [
            "suma",
            "multiplicación",
            "resta",
            "división",
            "asignación"
        ],
        answer: 4
    },
    {
        question:  "Suponga el siguiente código: <pre class='prettyprint'>int a=9, b=8;if( a>>1 > b  )printf(\"%d\\n\", ++a);</pre> <br/>¿Qué operación se realiza primero dentro de la condición del if?",
        options: [
            "asignación",
            "mayor que",
            "corrimiento a nivel de bits",
            "ninguno de los anteriores"
        ],
        answer: 2
    },
    {
        question:  "Suponga el siguiente código: <pre class='prettyprint'>int a=16, b=8;if( a>>1 > b  )printf(\"%d\\n\", ++a);</pre> <br/>¿Qué valores se comparan en la condición del if?",
        options: [
            "9 y 8",
            "16 y 8",
            "8 y 8",
            "1 y 8",
            "ninguno de los anteriores"
        ],
        answer: 2
    },
    {
        question:  "Suponga el siguiente código: <pre class='prettyprint'>int a=16, b=8;if( a>>1 > b  )printf(\"%d\\n\", ++a);</pre> <br/>¿Qué valor se imprime?",
        options: [
            "16",
            "8",
            "9",
            "17",
            "ninguno de los anteriores"
        ],
        answer: 4
    },
    {
        question:  "Suponga el siguiente código: "
        +"<pre class='prettyprint'>int x=9, y=11;\nif ( x < 10 )\nif ( y > 10 )\nprintf( \"*****\\n\");\nelse\nprintf( \"#####\\n\");\nprintf( \"$$$$$\\n\");\n</pre>"
        +"¿Qué se imprime?",
        options: [
            "*****<br>" + "$$$$$",
            "*****<br>" +"#####<br>" + "$$$$$",
            "*****<br>" + "#####",
            "*****",
            "#####",
            "$$$$$",
            "ninguno de los anteriores"
        ],
        answer: 0
    },
    {
        question:  "Suponga el siguiente código: "
        +"<pre class='prettyprint'>int x=11, y=9;\nif ( x < 10 )\nif ( y > 10 )\nprintf( \"*****\\n\");\nelse\nprintf( \"#####\\n\");\nprintf( \"$$$$$\\n\");\n</pre>"
        +"¿Qué se imprime?",
        options: [
            "*****<br>" + "$$$$$",
            "*****<br>" +"#####<br>" + "$$$$$",
            "*****<br>" + "#####",
            "*****",
            "#####",
            "$$$$$",
            "ninguno de los anteriores"
        ],
        answer: 5
    },
    {
        question:  "Suponga el siguiente código: "
        +"<pre class='prettyprint'>int x = 1, total;\nwhile ( x <= 10 ){\n total += x;\n ++x; \n}\n printf(\"%d %d\\n\",x, total );</pre>"
        +"¿Que valor debe imprimir para la variable <b>x</b>?",
        options: [
            "9",
            "10",
            "11",
            "ninguno de los anteriores"
        ],
        answer: 2
    },
    {
        question:  "Suponga el siguiente código: "
        +"<pre class='prettyprint'>int x = 1, total;\nwhile ( x <= 10 ){\n total += x;\n ++x; \n}\n printf(\"%d %d\\n\",x, total );</pre>"
        +"¿Qué error existe en el código?",
        options: [
            "La condicion es infinita en el <b>while</b> ",
            "Los especificadores de tipo son incorrectos ",
            "Debe ser <b>x++</b> en vez de <b>++x</b>",
            "Hay un error, pero no está listado entre los anteriores",
            "No hay ningún error"
        ],
        answer: 3
    },
    {   question:  "Suponga el siguiente código: "
        +"<pre class='prettyprint'>int x = 1, total = 0, y;\n" +
        "while ( x <= 3 ) {\n" +
        "\ty = x * x;\n" +
        "\ttotal += y;\n" +
        "\t++x;\n" +
        "}\n" +
        "printf( \"El total es: %d\\n\", total );</pre>"
        +"La salida es:",
        options: [
            "El total es: 5",
            "El total es: 14",
            "El total es: 9",
            "El total es: 19"
        ],
        answer: 1
    },
    {
        question:  "Suponga el siguiente código: "
        +"<pre class='prettyprint'>int i=19, c=0;\n" +
        "for( ; i>0; i/=3, c++);\n" +
        "printf(\"%d\\n\",c );\n</pre>"
        +"¿Qué valor imprime?",
        options: [
            "0",
            "1",
            "2",
            "3",
            "4",
            "No imprime nada, el ciclo es infinito"
        ],
        answer: 3
    },
    {
        question:  "Suponga el siguiente código: "
        +"<pre class='prettyprint'>char g='r';\n" +
                "printf(\"%c\", g-33);\n</pre>"
        +"¿Qué valor se imprime?",
        options: [
            "R",
            "P",
            "Q",
            "S",
            "T"
        ],
        answer: 2
    },
    {
        question:  "Suponga el siguiente código: "
        +"<pre class='prettyprint'>int fff(int n, int m){\n" +
        "\tint i, r=0;\n" +
        "\tfor(i=0; i< n; i++)\n" +
        "\t\tr+=m;\n" +
        "\treturn r;\n" +
        "}\n" +
        "int main(){\n" +
        "\tprintf(\"%d\\n\", fff(3,2));\n" +
        "\treturn 0;\n" +
        "}\n</pre>"
        +"¿Qué imprime el código?",
        options: [
            "0",
            "32",
            "6",
            "23",
            "5"
        ],
        answer: 2
    },
    {
        question:  "Suponga el siguiente código: "
        +"<pre class='prettyprint'>int fff(int n, int m){\n" +
        "\tint i, r=0;\n" +
        "\tfor(i=0; i&lt; n; i++)\n" +
        "\t\tr+=m;\n" +
        "\treturn r;\n" +
        "}\n" +
        "int main(){\n" +
        "\tprintf(\"%d\\n\", fff(4,8));\n" +
        "\treturn 0;\n" +
        "}\n</pre>"
        +"¿Qué imprime el código?",
        options: [
            "0",
            "32",
            "6",
            "48",
            "12"
        ],
        answer: 1
    },
    {
        question:  "Suponga el siguiente código: "
        +"<pre class='prettyprint'>int fff(int w, char p){\n" +
        "\tint i;\n" +
        "\tfor( i=0; i&lt;w; i++ ){\n" +
        "\t\tprintf(\"%c\", p);\n" +
        "\t}\t\n" +
        "}</pre>"
        +"¿Qué imprime la llamada <b>fff(5, '*');</b>",
        options: [
            "*",
            "<br>*<br/>*<br/>*<br/>*<br/>*",
            "*****",
            "Ninguna de las anteriores"
        ],
        answer: 2
    },{
        question:  "Suponga el siguiente código: "
        +"<pre class='prettyprint'>char t[]=\"vainilla\";</pre>"
        +"¿Cuántos elementos tiene el arreglo <b>t</b>",
        options: [
            "7",
            "8",
            "9",
            "10"
        ],
        answer: 2
    },
    {
        question:  "Suponga el siguiente código: "
        +"<pre class='prettyprint'>char t[]=\"vainilla\";</pre>"
        +"Qué caracter hay en la posición 5",
        options: [
            "'i'",
            "'l'",
            "'a'",
            "97"
        ],
        answer: 1
    },
    {
        question:  "Suponga el siguiente código: "
        +"<pre class='prettyprint'>int fff(char p[]){\n" +
        "\tint i=0, j=strlen(p)-1;\n" +
        "\tfor( ; i &lt; j; i++, j-- ){\n" +
        "\t\tchar t =p[i];\n" +
        "\t\tp[i]=p[j];\n" +
        "\t\tp[j] = t;\n" +
        "\t}\t\n" +
        "}\n" +
        "int main(){\n" +
        "\tchar t[]=\"vainilla\";\n" +
        "\tfff(t);\n" +
        "\tputs(t);\n" +
        "\treturn 0;\n" +
        "}</pre>"
        +"¿Cuál es la salida del programa?",
        options: [
            "vainilla",
            "aiia",
            "VAINILLA",
            "alliniav"
        ],
        answer: 3
    }






);


var scrollBar = document.getElementById('progreso');


/*Barra animada en medio arco*/
// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

        var bar = new ProgressBar.SemiCircle(results, {
            strokeWidth: 6,
            color: '#F00',
            trailColor: '#eee',
            trailWidth: 1,
            easing: 'easeInOut',
            duration: 1400,
            svgStyle: null,
            text: {
                value: '',
                alignToBottom: false
            },
            from: {color: '#F00'},
            to: {color: '#11ff11'},
            // Set default step function for all animate calls
            step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
        var value = Math.round(bar.value() * 100);
        if (value === 0) {
            bar.setText('');
        } else {
            bar.setText(value);
        }

        bar.text.style.color = state.color;
        }
        });
        bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
        bar.text.style.fontSize = '2rem';
/*Barra animada en medio arco*/


var answers = new Map();

function showScore() {

    var totalR=0;

    console.log("tamaño de answers " +answers.size);
    data.forEach(
        function (value, index) {
            //respuesta usando el indice de la pregunta.

            var an = answers.get((index).toString());
            //console.log(an);

            if(an != undefined){

                an  = parseInt(an.substr( an.search('i')+1));

                if(value.answer == an)
                    totalR++;



            }
        }
    );




    bar.animate(totalR /  data.length);  // Number from 0.0 to 1.0

}


function showResults(){

/*
    answers.forEach(function (value, key) {
        console.log(key + " -> " + value);
        console.log(key + " -> " + value.substr( value.search('i')+1 ));

    });
*/
    scrollBar.style.width= (answers.size*100/data.length).toString()+"%";

}

data.forEach(
    function (value, index) {
        var card = document.createElement("div");
        card.classList.add("card");
            var cardHeader= document.createElement("div");
            cardHeader.classList.add("card-header");
            cardHeader.setAttribute("role", "tab");
            cardHeader.setAttribute("id", "h"+index.toString());

                var link= document.createElement("a");
                link.setAttribute("data-toggle", "collapse");
                link.setAttribute("href","#c"+index.toString() );
                link.setAttribute("aria-expanded","true" );
                link.setAttribute("aria-controls","c"+index.toString());
                link.innerHTML = "Pregunta " + (index+1).toString();
                cardHeader.appendChild(link);

                //console.log(link);
            card.appendChild(cardHeader);


            var cardRef=document.createElement("div");
                cardRef.classList.add("collapse");
                //cardRef.classList.add("show");
                cardRef.setAttribute("id", "c"+index.toString() );

                cardRef.setAttribute("role", "tabpanel");
                cardRef.setAttribute("aria-labelledby", "h"+index.toString());
                cardRef.setAttribute("data-parent","#accordion");


                var cardBody=document.createElement("div");
                    cardBody.classList.add("card-body");

                    var text = document.createElement("p");
                    text.innerHTML= value.question;

                    cardBody.appendChild(text);

                    var questions = document.createElement("div");
                        questions.classList.add("btn-group");
                        questions.setAttribute("data-toggle", "buttons");

                        var uList = document.createElement("ul");

                        //Itera sobre todos los elementos de las posibles respuestas
                        value.options.forEach(
                            function (q, indx) {
                                var li = document.createElement("li");
                                li.style.listStyle="none";

                                var label= document.createElement("label");
                                label.classList.add("btn");
                                label.classList.add("btn-outline-secondary");
                                label.setAttribute("id",  "q"+index+"i"+indx);
                                label.setAttribute("numQ", index.toString());

                                    var button = document.createElement("input");
                                    button.type="radio";
                                    //button.setAttribute("name", "options");
                                    //button.setAttribute("id", "i"+index+"i"+indx);
                                    button.setAttribute("name", "i"+index);


                                label.appendChild(button);

                                label.innerHTML = label.innerHTML + " "+  q;


                                label.addEventListener("click", function () {
//                                    console.log(this);
//                                    console.log(this.classList);
//                                    console.log(this.id);

                                    answers.set(this.getAttribute("numQ"), this.id );
                                    showResults();
                                });

                                //console.log(label);

                                li.appendChild(label);
                                uList.appendChild(li);
                            }
                        );


                        questions.appendChild(uList);
                    cardBody.appendChild(questions);


                //console.log(cardBody);

                cardRef.appendChild(cardBody);

            card.appendChild(cardRef);
        examen.appendChild(card);


        //console.log(examen );
    }
);

//console.log(examen.innerHTML);

