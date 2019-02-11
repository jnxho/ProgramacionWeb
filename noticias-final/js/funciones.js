//AÑO	INVENTO	INVENTOR
//	{anyo:1804,	invento: 'LOCOMOTORA',	nombre:	'RICHARD TREVITHICK'},
var inventores =[
	{anyo:1804,	invento: 'LOCOMOTORA',	nombre:	'RICHARD, TREVITHICK'},
	{anyo:1826,	invento: 'FOTOGRAFÍA',	nombre:	'NICÉPHORE, NIEPCE'},
	{anyo:1846,	invento: 'ANESTESIA',	nombre:	'WILLIAM, MORTON'},
	{anyo:1846,	invento: 'MÁQUINA DE COSER',	nombre:	'ELÍAS, HOWE'},
	{anyo:1851,	invento: 'ASCENSOR',	nombre:	'ELISHA, OTIS GRAVE'},
	{anyo:1854,	invento: 'LÁMPARA INCANDESCENTE'  ,	nombre:	'HEINRICH, GÖBEL'},
	{anyo:1854,	invento: 'TELÉFONO',	nombre:	'ANTONIO, MEUCCI'},
	{anyo:1859,	invento: 'SUBMARINO',	nombre:	'NARCISO, MONTURIOL'},
	{anyo:1861,	invento: 'BICICLETA',	nombre:	'PIERRE, MICHAUX'},
	{anyo:1863,	invento: 'DIRIGIBLE',	nombre: 'SOLOMON, ANDREWS'},
	{anyo:1866,	invento: 'TERMÓMETRO CLÍNICO',	nombre:	'THOMAS, CLIFFORD ALLBUTT'},
	{anyo:1872,	invento: 'MÁQUINA DE ESCRIBIR',	nombre:	'CHRISTOPHER, SHOLES'},
	{anyo:1878,	invento: 'FONÓGRAFO',	nombre: 'THOMAS, ALVA EDISON'},
	{anyo:1884,	invento: 'PASTILLA DE JABÓN',	nombre:	'WILLIAM, HESKETH LEVER'},
	{anyo:1885,	invento: 'AUTOMÓVIL',	nombre:	'KARL, BENZ'},
	{anyo:1886,	invento: 'COCA-COLA',	nombre:	'JOHN, PENBERTON'},
	{anyo:1888,	invento: 'GRAMÓFONO',	nombre:	'EMILE, BERLINER'},
	{anyo:1890,	invento: 'AVIÓN',	nombre:	'CLÉMENT, ADER'},
	{anyo:1894,	invento: 'CINEMATÓGRAFO'  ,	nombre:	'HERMANOS, LUMIÈRE'},
	{anyo:1899,	invento: 'ASPIRINA',	nombre:	'FÉLIX, HOFFMAN'}
];

var personas=[
	'RICHARD, TREVITHICK',
	'NICÉPHORE, NIEPCE',
	'WILLIAM, MORTON',
	'ELÍAS, HOWE',
	'ELISHA, OTIS GRAVE',
	'HEINRICH, GÖBEL',
	'ANTONIO, MEUCCI',
	'NARCISO, MONTURIOL',
	'PIERRE, MICHAUX',
	'SOLOMON, ANDREWS',
	'THOMAS, CLIFFORD ALLBUTT',
	'CHRISTOPHER, SHOLES',
	'THOMAS, ALVA EDISON',
	'WILLIAM, HESKETH LEVER',
	'KARL, BENZ',
	'JOHN, PENBERTON',
	'EMILE, BERLINER',
	'CLÉMENT, ADER',
	'HERMANOS, LUMIÈRE',
	'FÉLIX, HOFFMAN'
];


//console.table(inventores);

var r = inventores.filter( function(valor){
	if(valor.anyo >=1850 && valor.anyo<1860)
		return true;

} );


var r = inventores.filter(
		function(k){
			if(k.nombre>="H" && k.nombre<="P")
				return true;
		}
	);


var r = inventores.filter( k => (k.nombre>="H" && k.nombre<="P"));


console.table(r);




var r = inventores.map(
	function(a){
		return {
			inicio: a.anyo+100,  
			descripcion: a.invento  + " - " + a.nombre};
});
console.table(r);



var r = inventores.reduce(
		function(suma , a){
			return suma + a.anyo%10;
		},
		0
	);
console.log(r);

var r = inventores.filter(
		function(a){
			if(a.anyo>=1850 && a.anyo<=1860)
				return true;
		}
	).reduce(
		function(suma , a){
			return suma + a.anyo%10;
		},
		0
	);
console.log(r);


var tabla = inventores.filter(
		function(a){
			if(a.anyo>=1850 && a.anyo<=1860)
				return true;
		}
	).reduce(
		function(suma , a){
			return suma + "<tr><td>" + a.anyo +  "</td><tr>";
		},
		""
	);

console.log(tabla);

document.getElementById('tabla').innerHTML = tabla;

//http://10.10.1.244/ProgramacionWeb/08JSInventos/

var u = personas.sort();
//console.log(u);
//

var x = "JUAN, PEREZ";
console.log(x.search(', '));
console.log( x.slice(x.search(', ')+2) );

var u = personas.sort(
		function(a, b){
			var ap= a.search(", ")+2;
			var bp= b.search(", ")+2;

			if(a.slice(ap)>b.slice(bp))
				return 1;
			else 
				return -1;
		}
	);

console.log(u);

console.log("document.querySelector('li.datos')")
var x = document.querySelector('.datos');
console.log(x);

console.log("document.querySelectorAll('li.datos')")
var x = document.querySelectorAll('li');
console.log(x);

var x = Array.from(document.querySelectorAll('li.datos'));
console.log(x);

console.table(x);

var w = x.map(
			function(a){
				return a.innerHTML;
			}
		).sort(
			function(a,b){
				return a<b? 1: -1;
			}
		);

console.log(w);




var w = x.map(
			function(a){
				return {ciudad: a.innerHTML, id: a.id};
			}
		).sort(
			function(a,b){
				return a.ciudad <b.ciudad? 1: -1;
			}
		);

console.table(w);
console.log(w);


var w = x.map(
			function(a){
				return {ciudad: a.innerHTML, id: a.id};
			}
		).sort(
			function(a,b){
				return a.ciudad <b.ciudad? 1: -1;
			}
		).reduce(
			function(suma, a){
				return suma + "<li>" + a.ciudad + "</li>"; 
			},
			""
		);
console.log(w);

var lista = document.getElementById("nuevo");
console.log(lista);

lista.innerHTML = w;


var w = x.map(
			function(a){
				return {ciudad: a.innerHTML, id: a.id};
			}
		).sort(
			function(a,b){
				return a.ciudad <b.ciudad? 1: -1;
			}
		).reduce(
			//indice es una variable que mantiene el índice dentro de las llamadas.
			function(suma, a, indice){

				if(indice >2)
					return suma+ "<li id='"+ indice+ "'>" + a.ciudad + "</li>"; 
				else 
					return suma+ "<li id='"+ indice+ "' style='color:red'>" + a.ciudad + "</li>"; 
			},
			""
		);
console.log(w);

lista.innerHTML = w;
