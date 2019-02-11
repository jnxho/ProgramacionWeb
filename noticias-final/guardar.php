<?php
	session_start();
	if ($_SESSION['autentic']!='true'){
		header("Location: index.html");
	}
	//print_r($_SESSION);
	if(isset($_SESSION)){
	$autor=$_SESSION[ 'autor' ];
	//echo $autor;
	require_once('biblioteca.php');
	if (!isset($_POST['save'])) {	
		date_default_timezone_set('America/Mexico_City');  
		$title=$_POST['title'];
		$type=$_POST['ntype'];
		$description=$_POST['description'];
		//$image=$_POST['nimage'];
		$date=date("Y-m-d");
		$time=date("H:i:s");
		$id = date("YmdHis");
		//echo $date."\n".$time;
		$fSize = $_FILES['nimage']['size'];
	   	$fType = $_FILES['nimage']['type'];
	   	$fName = $_FILES['nimage']['name'];	
	   	
	   	//echo $fType;

		
		//echo $autor.">>>>>>";
		//$autor=1;//Quitar comentario al subir al host

		if(strcmp($fType,"image/png")!=0){
			if(strcmp($fType,"image/jpeg")!=0){
				if(strcmp($fType,"image/jpg")!=0){
						echo "<h3>No se guardará la imagen el formato no es el adecuado.</h3>";
				}
			}
		}
		if($fSize>2097152)
		{
	    	header('refresh:1; url=crear.php');
			echo "<h3>No se guardará la imagen excede el tamaño máximo.</h3>";
		}
		else{
			if (strcmp($fType,"image/png")==0) {
				$destino =  "images/noticias/".$id.".png";	
				$image=$id.".png";
			}else if(strcmp($fType,"image/jpeg")==0){
				$destino =  "images/noticias/".$id.".jpeg";
				$image=$id.".jpeg";
			}else{
				$destino =  "images/noticias/".$id.".jpg";
				$image=$id.".jpg";
			}
			
			if (copy($_FILES['nimage']['tmp_name'],$destino)) 
			{
				//echo "$image";
				
				$consulta="INSERT  INTO news (title,type,ndate,ntime,image,autor,description) values('$title','$type','$date','$time','$image','$autor','$description')";

				$result = $db->query($consulta);
				
				if (!$result) {
				    print "<p>Error en la consulta.</p>";
				} else {
				    echo "<p>Los datos se han guardado.</p>";
				    header('refresh:1; url=crear.php');
				}
			}
			else
			{
				echo "Error: No se guardaron los datos. No se pudo subir la imagen.";
			}
		}
	}}
	$db=null;
?>
