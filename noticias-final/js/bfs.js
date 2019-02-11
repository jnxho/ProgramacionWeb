function ejecutar(){
	var datos = document.getElementById("datos");

	console.log(datos);
	console.log(datos.value.split(/[\s,]/));


	datos = datos.value.split(/[\s,]/);
	console.log("datos");
	console.log(datos);
	var n = parseInt(datos[0]);

	var grafo = new Map();
	//n parejas
	for (var i=0, j=1; i<n; i++){
		var ori = parseInt(datos[j++]);
		var dest = parseInt(datos[j++]);
		console.log(ori+ " " +dest);
		if(grafo.get(ori)==undefined)
				grafo.set(ori,  [dest]);
			else
				grafo.set(ori,  [grafo.get(ori), dest]);

		if(grafo.get(dest)==undefined)			
			grafo.set(dest, [ori]);
		else 
			grafo.set(dest, [grafo.get(dest), ori]);

		
		//console.log(typeof grafo.get(ori));
		console.log(String(grafo.get(ori)).split(","));
	}


	console.log("claves");
	for (var [key, value] of grafo) {
	  console.log(key + ' -> ' + value);
	}



}

