<?php
	require_once('biblioteca.php');
	$likes=0;
	if (!isset($_POST['save'])) {
		$id=$_POST['news'];


		$consulta="SELECT likes FROM news where id=$id";
		$result = $db->query($consulta);
		if ($result) {
			foreach ($result as $key) {
				$likes=(int)$key['likes']++;
				$likes=$likes+1;    	
			}	    
		}


		$consulta="UPDATE news SET likes=$likes where id=$id";
		$result = $db->query($consulta);
		if (!$result) {
		    print "<p>Error en la consulta.</p>";
		} else {
		   header('refresh:0.5;url=viewNote.php?news='.$id);
		}		  
	}

	$db=null;
?>
