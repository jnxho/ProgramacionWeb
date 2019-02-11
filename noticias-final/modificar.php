<?php
	session_start();
	if ($_SESSION['autentic']!='true'){
		header("Location: index.html");
	}
	include("menuAdmin.html");
	require_once("biblioteca.php");
?>	
	<div style="width: 100%;display: flex; align-items: center;flex-direction: column;">
		<h2>Modificar Noticia</h2>
		<table class="table sortable table-striped table-hover table-responsive">
			<tr>
				<th>Titulo</th>
				<th>Tipo</th>
				<th>Autor</th>
				<th>Descripción</th>
				<th>Likes</th>
				<th>Fecha</th>
				<th>Hora</th>
				<th>Opción</th>
			</tr>
<?php
	$query="SELECT * FROM news";
	$result = $db->query($query);
	if (!$result) {
	    print "<p>Error en la consulta.</p>";
	} else {
	   	foreach ($result as $value) {
	   		echo "<tr>\n
				<td>".$value['title']."</td>\n
				<td>".$value['type']."</td>\n
				<td>".$value['autor']."</td>\n
				<td>".$value['description']."</td>\n
				<td>".$value['likes']."</td>\n
				<td>".$value['ndate']."</td>\n
				<td>".$value['ntime']."</td>\n
				<td><a href=\"modData.php?id=".$value['id']."\">Modificar</a></td>
			</tr>\n";
	   	}
	}
	$db=null;
?>

		</table>
	</div>
<?php
	include 'footer.html';
?>
