<?php
	session_start();
	if ($_SESSION['autentic']!='true'){
		header("Location: index.html");
	}
	require_once("biblioteca.php");
	$id = $_GET['news'] ;

	$consulta="DELETE FROM news where id=$id";
	$result = $db->query($consulta);
	if (!$result) {
	    print "<p>Error en la consulta.</p>";
	}else{
		echo "<p>Noticia eliminada de la base de datos.</p>";
		header("refresh:1; url=eliminar.php");
	}
	$db=null;
?>