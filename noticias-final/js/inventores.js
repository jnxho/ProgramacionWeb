var datos=[
	{nombre: "" }
];

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


/* obtener un vector con los inventos hechos en un rango */

var r = inventores.filter(  function(a) {
	if(a.anyo >= 1840 && a.anyo<=1880 )
		return true;

} );

console.log(r);
console.table(r);

var r = inventores.filter( a => (a.anyo >= 1840 && a.anyo<=1880));
console.table(r);



/* Uso de la función map The map() method creates a new array with the results
of calling a function for every array element. The map() method calls the
provided function once for each element in an array, in order. Note: map()
does not execute the function for array elements without values. Note: map()
does not change the original array.  */

var r = inventores.map(function(a){
	return {any:a.anyo,  descripcion: a.invento  + " - " + a.nombre};
});
console.table(r);

var r = inventores.map(function(a){
	return a.invento  + " - " + a.nombre;
});

console.table(r);

document.getElementById("0").innerHTML = r;

var r = inventores.map(function(a){
	return "<tr><td>" + a.invento  + "</td><td>" + a.nombre + "</td></tr>";
});

var r2=r;


document.getElementById("1").innerHTML = r;
console.log(r);


var r = inventores.map(function(a){
	var coma =a.nombre.indexOf(',');

	return a.nombre.slice(coma+1);
});

console.table(r);


var r = inventores.sort( function(a,b){
	return b.anyo - a.anyo;

});

console.table(r);

var r = inventores.sort( function(a,b){
	return a.nombre > b.nombre? 1 : -1;
});

console.table(r);

/*La suma de los años de los inventos El método reduce() aplica una función a
un acumulador y a cada valor de un array (de izquierda a derecha) para
reducirlo a un único valor. */

var r = inventores.reduce(function(total, a ){
	return total + a.anyo; 
}, 0);

console.log(r);

var r = r2.reduce(function(txt, a){
	return txt + " "+  a;
	}, 
	""
);

document.getElementById("2").innerHTML = r;
//console.log(r);

console.log("document.querySelector('li.dato')")
var r= document.querySelector('li.dato');
console.log(r);

console.log("Array.from(document.querySelectorAll('li.dato'))")
var r= Array.from(document.querySelectorAll('li.dato'));

console.table(r);
console.log("Array.from = ");
console.log(r);


console.log("[document.querySelectorAll('li.dato')]");
console.log([document.querySelectorAll('li.dato')]);

var rr = r.map( a => a.innerHTML);
console.log(rr);

