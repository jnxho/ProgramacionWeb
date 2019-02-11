<?php
	session_start();
	if ($_SESSION['autentic']!='true'){
		header("Location: index.html");
	}
	include("menu.html");
	require_once("biblioteca.php");
?>	
		<div class="regreso">
			<h2>Consultar Personas</h2>	
		</div>
		<table class="personas">
			<tr>
				<th>Nombre</th>
				<th>Apellido</th>
				<th>Edad</th>
				<th>Sexo</th>
				<th>Dirección</th>
			</tr>
<?php
	$consulta="SELECT * FROM persona";
	$result = $db->query($consulta);
	if (!$result) {
	    print "<p>Error en la consulta.</p>";
	} else {
	   	foreach ($result as $valor) {
	   		$Sexo = ($valor['sexo']==1) ? "Hombre" : "Mujer" ;
	   		echo "<tr>\n
				<td>".$valor['nombre']."</td>\n
				<td>".$valor['apellido']."</td>\n
				<td>".$valor['edad']."</td>\n
				<td>".$Sexo."</td>\n
				<td>".$valor['direccion']."</td>\n
			</tr>\n";
	   	}
	}
	$db=null;
?>
		</table>
		<div class="regreso">
			<a href="index.php">Pagina Principal</a>
		</div>
	</body>
</html>