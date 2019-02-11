<?php
	include_once 'menuAdmin.html';

	session_start();
	//print_r($_SESSION);
	if (!isset($_SESSION) && $_SESSION['autentic']!='true'){
		header("refresh=1; src=index.html");
	}
?>
<div style="height: 400px">
	Bienvenido a la pagina administrativa de <strong>Fake News</strong>, es esta seccion de nuestro sitio web podras dar de alta una nueva noticia, modificar noticias y eliminar noticias de la base de datos.
</div>
<?php
	include_once 'footer.html';
?>