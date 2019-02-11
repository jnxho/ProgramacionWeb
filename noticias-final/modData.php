<?php
	session_start();
	if ($_SESSION['autentic']!='true'){
		header("Location: index.html");
	}
	include("menuAdmin.html");
	require_once("biblioteca.php");
	$id = $_GET['id'] ;
	$new=array();
	$query="SELECT * FROM news where id=$id";
	$result = $db->query($query);
	if (!$result) {
	    print "<p>Error en la consulta.</p>";
	}else{
		foreach ($result as $key) {
			$new=$key;
		}
	}
?>
	<div style="width: 100%;display: flex; align-items: center;flex-direction: column;">
		<h2>Modificar Noticia</h2>
		<form style="width: 80%;margin-top: 50px" method="post" action="guardarMod.php" enctype='multipart/form-data'>
			<div class="form-group row">
				<label for="validation01" class="col-sm-2 col-form-label">Titulo</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" id="title" name="title" <?php echo "value=\"".$new['title']."\""; ?> required>
				</div>
			</div>
			<div class="form-group row">
				<label for="validation01" class="col-sm-2 col-form-label">Tipo</label>
				<div class="col-sm-10">
					<select class="form-control" id="ntype" name="ntype">
						<option value="deporte"
						<?php
                			if ($new['type']=="deporte") {
                				echo "selected=\"true\"";
                			}
                		?>
						>Deporte</option>
						<option value="politica"
						<?php
                			if ($new['type']=="politica") {
                				echo "selected=\"true\"";
                			}
                		?>
						>Politica</option>
						<option value="cultura"
						<?php
                			if ($new['type']=="cultura") {
                				echo "selected=\"true\"";
                			}
                		?>
						>Cultura</option>
					</select>
				</div>
			</div>
			<div class="form-group row">
				<label for="validation01" class="col-sm-2 col-form-label">Descripción</label>
				<div class="col-sm-10">
					<textarea type="text" class="form-control" rows="9" id="description" name="description" required><?php echo $new['description'];?></textarea>
				</div>

			</div>
			<input type="hidden" id="news" name="news" value=<?php echo "\"$id\""; ?>>
			<div class="form-group row">
				<div class="col-sm-10">
					<button type="submit" class="btn btn-primary" id="save">Guardar</button>
				</div>
			</div>
		</form>
	</div>
<?php
	$db=null;
	include 'footer.html';
?>