function revisar(boton){
	console.log(boton);
	console.log(boton.id);
	console.log(boton.innerHTML);
	console.log(boton.classList);

	if(boton.classList.contains("btn-outline-success")){
		console.log("esta btn-outline-success");
		//eliminar la clase
		boton.classList.remove("btn-outline-success");
		//agrego la clase
		boton.classList.add("btn-outline-warning");
	}


	if(boton.innerHTML == '<i class="fa fa-microchip fa-4x" aria-hidden="true"></i>')
		boton.innerHTML = "<i class='fa fa-cog fa-4x' aria-hidden='true'></i>";

	

}

Navegador:
sftp://merg@mixteco.utm.mx
sftp://merg@mixteco.utm.mx/home/usuarios/merg/public_html

comando 
copiar seguro
scp -r * merg@mixteco.utm.mx:/home/usuarios/merg/public_html/prueba/

cambiar permisos
chmod -R 755 *


/etc/apt/sources.list

Ruta para el mirror
10.10.0.9:9999

apt-get update 

apt-get install apache2 mysql-server phpmyadmin ssh-server













