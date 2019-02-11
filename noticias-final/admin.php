<?php
	include_once 'menuAdmin.html';
    include_once 'biblioteca.php';
	session_start();
	//print_r($_SESSION);
	if (!isset($_SESSION) && $_SESSION['autentic']!='true'){
		header("refresh=1; src=index.html");
	}
?>
<div>
	Bienvenido a la pagina administrativa de <strong>Fake News</strong>, es esta seccion de nuestro sitio web podras dar de alta una nueva noticia, modificar noticias y eliminar noticias de la base de datos.
</div>
<div class="container">
	<div class="row">
	<div class="wrapper col-md-8">
	<h2 class="section-title"><strong>Agregadas recientemente</strong></h2>
	<div class="row">

<?php
	$query="SELECT * FROM news  ORDER BY ndate DESC,ntime DESC";
	$result = $db->query($query);
	if (!$result) {
	    print "<p>Error en la consulta.</p>";
	}else{
		$count=0;
		foreach($result as $key) {
			echo "<a class=\"col-md-4 news-cont\" type=\"button\" href=\"viewNote.php?news=".$key['id']."\">
			<div class=\"service\">
				<img class=\"index-news\" src=\"images/noticias/".$key['image']."\"><br>
				 <strong>".$key['title']."</strong>
		</div></a>";
			$count++;
		}
	}
?>
</div>
</div>
</div>
</div>
<?php
	include_once 'footer.html';
?>
