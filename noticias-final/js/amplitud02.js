function drawArc(coords, orig, dest){
    var piza = document.getElementById("pizarra");
    var lapiz= piza.getContext("2d");

    lapiz.strokeStyle="#0000FF";
    lapiz.lineWidth=4;

    lapiz.beginPath();
        lapiz.moveTo(coords.get(orig).x, coords.get(orig).y);
        lapiz.lineTo(coords.get(dest).x, coords.get(dest).y);
    lapiz.stroke();

    lapiz.strokeStyle="#000000";
    lapiz.lineWidth=1;

    lapiz.beginPath();
    lapiz.arc( coords.get(orig).x, coords.get(orig).y, 15, 0, Math.PI*2 );
    lapiz.fillStyle="silver";
    lapiz.fill();
    lapiz.stroke();



    lapiz.beginPath();
    lapiz.arc( coords.get(dest).x, coords.get(dest).y, 15, 0, Math.PI*2 );
    lapiz.fillStyle="silver";
    lapiz.fill();
    lapiz.stroke();

    lapiz.fillStyle="black";
    lapiz.fillText(orig.toString() ,coords.get(orig).x-7, coords.get(orig).y+3);
    lapiz.fillText(dest.toString() ,coords.get(dest).x-7, coords.get(dest).y+3);

}

function drawGraph(grafo){
    var piza = document.getElementById("pizarra");
    var lapiz= piza.getContext("2d");

    //console.log(lapiz);
    var ancho=piza.width;
    var alto=piza.height;

    lapiz.rect(0,0, ancho, alto);
    lapiz.fillStyle="white";
    lapiz.fill();

    var cx = ancho/2;
    var cy = alto/2;

    console.log(" long " + grafo.size);
    if(grafo.size>0){
        var angInc = Math.PI * 2 / grafo.size;
        var angActual=0;
        var radioGrafo = 180;
        lapiz.font="15px Arial";

        var coords = new Map();

        grafo.forEach( function(value, key){

            coords.set(key, {x: parseInt( cx+ Math.cos(angActual)*radioGrafo),
                             y: parseInt(cy+Math.sin(angActual)*radioGrafo)
                            });
            angActual += angInc;
        });



        //dibujando arcos
        grafo.forEach( function(value, key) {
            console.log("arco "  + key);
            value.forEach(function(vecino){
                lapiz.beginPath();
                console.log(" -- > "+ vecino);
                lapiz.moveTo(coords.get(key).x, coords.get(key).y);
                lapiz.lineTo(coords.get(vecino).x, coords.get(vecino).y);
                lapiz.stroke();
            });

        });

            //dibujando nodos
        grafo.forEach( function(value, key){
                lapiz.beginPath();
                lapiz.arc( coords.get(key).x, coords.get(key).y, 20, 0, Math.PI*2 );
                lapiz.fillStyle="silver";
                lapiz.fill();
                lapiz.stroke();


                lapiz.fillStyle="black";
                lapiz.fillText(key.toString() ,coords.get(key).x-7, coords.get(key).y+3);

                //console.log( parseInt(cx+ Math.cos(angActual)*radioGrafo) + " " +  parseInt(cy+Math.sin(angActual)*radioGrafo) + " ");

            }
        );
    }
    return coords;
}


function drawNodes(grafo){
	var piza = document.getElementById("pizarra");
	var lapiz= piza.getContext("2d");

	console.log(lapiz);
	var ancho=piza.width;
    var alto=piza.height;

    var cx = ancho/2;
    var cy = alto/2;

    console.log(" long " + grafo.size);
    if(grafo.size>0){
		var angInc = Math.PI * 2 / grafo.size;
        var angActual=0;
        var radioGrafo = 180;
        lapiz.font="15px Arial";

        //dibujando nodos
        grafo.forEach( function(value, key){
                lapiz.beginPath();
                lapiz.arc( parseInt( cx+ Math.cos(angActual)*radioGrafo), parseInt(cy+Math.sin(angActual)*radioGrafo), 20, 0, Math.PI*2 );
                lapiz.fillStyle="silver";
                lapiz.fill();
                lapiz.stroke();


                lapiz.fillStyle="black";
                lapiz.fillText(key.toString() ,parseInt( cx+ Math.cos(angActual)*radioGrafo -7), parseInt(cy+Math.sin(angActual)*radioGrafo));

            //console.log( parseInt(cx+ Math.cos(angActual)*radioGrafo) + " " +  parseInt(cy+Math.sin(angActual)*radioGrafo) + " ");
                angActual += angInc;
            }
        );
	}
}

function bfs(grafo, origen, ttl){
	console.log("bfs");
	//console.log(arguments);

    //drawNodes(grafo);

    var coords = drawGraph(grafo);

	var visitas= new Map();

	grafo.forEach(function(value, key){
	    visitas.set(key, 0);
    });

	/*for( var [key, value] of grafo){
		visitas.set(key, 0); //0 no visitado, 1 = visitado
		//console.log("clave: " +key + " -> 0");
	}*/
	visitas.set(origen, 1);

	var cola= new Array();
	cola.push({nodo: origen, ttl: 0});

	//console.table(cola);
	var termino=0;

	//var t = setInterval( function(){

		while(cola.length>0 && termino==0){
			var actual = cola.shift();
			var adj = grafo.get(actual.nodo); //lista de adyacentes a actual.nodo

			adj.forEach(
				function(item, index){
					if(visitas.get(item)==0){

						if(actual.ttl+1>ttl)
							termino=1;

						if(termino==0){
							console.log("a visitar " + item );
							visitas.set(item, 1);
							cola.push({nodo: item, ttl: actual.ttl+1});
							drawArc(coords, actual.nodo, item );
						}
					}		
				});
			console.table(cola);		
		}
	} ,1000);
}


function ejecutar(){
/*	var datos= document.getElementById("datos").value;
	console.log(datos);

	console.log(datos.split(/[\s,]/));
*/
	var datos= document.getElementById("datos")
			.value
			.split(/[\s,]/)
			.map(function(a){
				return parseInt(a)
			});
	//console.log(datos);

	var num=datos[0]; //numero de parejas
	var grafo= new Map();
	
	for(var i=1, j=1; i<=num; i++, j+=2){
		
		if(grafo.get(datos[j])==undefined)
			grafo.set(datos[j],   [datos[j+1]]);
		else
			grafo.set(datos[j],   grafo.get(datos[j]).concat(datos[j+1]));

		if(grafo.get(datos[j+1])==undefined)
			grafo.set(datos[j+1], [ datos[j]]);	
		else
			grafo.set(datos[j+1], grafo.get(datos[j+1]).concat(datos[j]));

		//console.log(datos[j] +"->"+ datos[j+1]);
		//console.log(datos[j+1] +"->"+ datos[j]);
	}

    grafo.forEach(function(value, key){
        console.log(key + ' => ' + value);
    });


	for(var j= num*2+1; j< datos.length-2; j+=2){
		bfs(grafo, datos[j], datos[j+1] );
	}




}