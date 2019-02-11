<?php
    session_start();
    $valid="true";
 	include("biblioteca.php");
 	if(isset($_POST['login']))
	{
		if(!empty($_POST['user']) && !empty($_POST['pass'])) 
		{	
			date_default_timezone_set('America/Mexico_City');
			$date=date("Y-m-d-H-i-s");
	  		$correo=$_POST["user"];
	  		$password=$_POST["pass"];
	  	
	  		$query = "SELECT * FROM usuario WHERE user = '$correo' AND pass = '$password'";
	  		$result = $db->query($query);
			if(!$result || count($result)==0){
			    print "<p>Usuario o contrase&ntilde;a es inv&aacute;lido</p>";
			}else{
				foreach ($result as $key) {
					$row=$key;
				}
				$_SESSION['autentic']=$valid;
				$_SESSION[ 'autor' ]=$_POST["user"];
				header("Location: admin.php");
			}
		}else{
			echo "Tu usuario o contrase&ntilde;a es inv&aacute;lido";
		}
	}
?>