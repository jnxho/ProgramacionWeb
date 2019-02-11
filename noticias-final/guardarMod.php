<?php
	session_start();
	if ($_SESSION['autentic']!='true'){
		header("Location: index.html");
	}
	require_once('biblioteca.php');
	$id=$_POST['news'];
	$title=$_POST['title'];
	$type=$_POST['ntype'];
	$description=$_POST['description'];


	if (!isset($_POST['save'])) {
		$consulta="UPDATE news SET title='$title',type='$type',description='$description' where id=$id";
		$result = $db->query($consulta);
		if (!$result) {
		    print "<p>Error en la consulta.</p>";
		} else {
		    echo "<p>Los datos se han actualizado.</p>";
		   	header("refresh:1; url=modificar.php");
		}		  
	}

	$db=null;
?>
