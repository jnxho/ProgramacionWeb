<?php
	require_once('biblioteca.php');	
	if (!isset($_POST['save'])) {	
		date_default_timezone_set('America/Mexico_City');  
		$autor=$_POST['autor'];
		$coment=$_POST['coment'];
		$id = $_POST['news'];
		//$image=$_POST['nimage'];
		$date=date("Y-m-d");
		$time=date("H:i:s");
		
		if ($autor!="") {
			$consulta="INSERT  INTO comment (nameAutor,description,ndate,ntime,idNew) values('$autor','$coment','$date','$time',$id)";	
		}
		else {
			$consulta="INSERT  INTO comment (description,ndate,ntime,idNew) values('$coment','$date','$time',$id)";
		}
		
		$result = $db->query($consulta);
		
		if (!$result) {
		    print "<p>Error en la consulta.</p>";
			header('refresh:1; url=viewNote.php?news='.$id);
		} else {
		    echo "<p>Los datos se han guardado.</p>";
		    header('refresh:1; url=viewNote.php?news='.$id);
		}
	}
	$db=null;
?>
