function coordenadas(grafo, cx, cy){
	var angActual=0;
	var angInc = 2*Math.PI / grafo.size;
	var radio = 150;

	var posiciones=new Map();
	grafo.forEach(
			function(valor, key){
				var xx = Math.cos(angActual) * radio+ cx;
				var yy = Math.sin(angActual) * radio+ cy;
				
				angActual += angInc; //incremento para el sig

				posiciones.set(key, {x: parseInt(xx), y: parseInt(yy) });
			}
		);
	return posiciones;
}

function dibujar(grafo){
	var pizarron = document.getElementById("pizarra");
	var lapiz= pizarron.getContext("2d");

	var cx= pizarron.width / 2;
	var cy= pizarron.height >> 1;

	console.log(cx + " " + cy);
	//calcular las posiciones dentro del canvas
	var posiciones = coordenadas(grafo, cx, cy);


    grafo.forEach( function(value, key) {
    	//value es un vector que va a ser recorrido
    	//key es el número del nodo en el grafo
        value.forEach(function(vecino){
            lapiz.beginPath();
            
            lapiz.moveTo(posiciones.get(key).x,
            			 posiciones.get(key).y);
            lapiz.lineTo(posiciones.get(vecino).x,
            			 posiciones.get(vecino).y
            				);
            lapiz.stroke();
            });

        });

	posiciones.forEach(
		function(valor, llave){
			console.log("x" + valor.x + " y " +valor.y);

 				lapiz.beginPath();
                lapiz.arc(valor.x, valor.y  , 15, 0, Math.PI*2 );
                lapiz.fillStyle="silver";
                lapiz.fill();
                lapiz.stroke();
			}
		);

	lapiz.fillStyle="black";
	posiciones.forEach(
		function(valor, llave){			
             lapiz.fillText(
             		llave.toString(),
             		valor.x-5,
             		valor.y+3
             	);
  		}
  	);




}

function bfs(grafo, nodo, ttl){

	var visitas= new Map();
	grafo.forEach(function(value, key){
	    visitas.set(key, 0);
    });
	visitas.set(nodo, 1); //nodo ya visitado

	dibujar(grafo );

	var cola=[{nodo: nodo, ttl: 0}];

	while(cola.length>0){
		//obtener el elemento en el frente 
		var actual = cola.shift();

		//console.log( "actual " + actual.nodo );
		//console.log( grafo.get(actual.nodo) );
		grafo.get(actual.nodo)
		.forEach(
				function(value, index){
					//si  no ha sido visitado
					if(visitas.get(value)==0){
						visitas.set(value, 1);
						cola.push({
							nodo: value,
							ttl: actual.ttl + 1
						});

						console.log("q: " + value + " ttl "+ (actual.ttl+1));
					}
				}
					
			);


	}




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
	console.log(datos);

	var num=datos[0]; //numero de parejas
	var grafo= new Map();
	
	for(var i=1, j=1; i<=num; i++, j+=2){
		
		if(grafo.get(datos[j])==undefined)
			grafo.set(datos[j],   [datos[j+1]]);
		else
			grafo.set(datos[j],   
				grafo.get(datos[j]).concat(datos[j+1])
				);

		if(grafo.get(datos[j+1])==undefined)
			grafo.set(datos[j+1], [ datos[j]]);	
		else
			grafo.set(datos[j+1], 
				grafo.get(datos[j+1]).concat(datos[j])
				);

		console.log(grafo.get(datos[j]));
		console.log(grafo.get(datos[j+1]));
		//console.log(datos[j] +"->"+ datos[j+1]);
		//console.log(datos[j+1] +"->"+ datos[j]);
	}

 	grafo.forEach(function(value, key){
        console.log(key + ' => ' + value);
    });

    bfs(grafo, datos[2*num+1], datos[2*num+2] );
}
//http://10.10.1.244/ProgramacionWeb/08JSInventos/amplitud.html






