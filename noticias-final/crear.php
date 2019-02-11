<?php
	session_start();
	if ($_SESSION['autentic']!='true'){
		header("Location: index.html");
	}
	include("menuAdmin.html");
?>
	<div style="width: 100%;display: flex; align-items: center;flex-direction: column;">
		<h2>Nueva Noticia</h2>
		<form style="width: 80%;margin-top: 50px" method="post" action="guardar.php" enctype='multipart/form-data'>
			<div class="form-group row">
				<label for="validation01" class="col-sm-2 col-form-label">Titulo</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" id="title" name="title"placeholder="Titulo de la noticia" value="" required>
				</div>
			</div>
			<div class="form-group row">
				<label for="validation01" class="col-sm-2 col-form-label">Tipo</label>
				<div class="col-sm-10">
					<select class="form-control" id="ntype" name="ntype">
						<option value="deporte">Deportes</option>
						<option value="politica">Politica</option>
						<option value="cultura">Cultura</option>
					</select>
				</div>
			</div>
			<div class="form-group row">
				<label for="validation01" class="col-sm-2 col-form-label">Descripción</label>
				<div class="col-sm-10">
					<textarea type="text" class="form-control" rows="9" id="description"name="description" placeholder="Contenido de la noticia." value="" required></textarea>
				</div>
			</div>
			<div class="form-group row">
				<label for="validation01" class="col-sm-2 col-form-label">Imagen</label>
				<div class="col-sm-10">
					<input type="file" class="form-control" id="nimage"name="nimage" required>
				</div>
			</div>
			<div class="form-group row">
				<div class="col-sm-10">
					<button type="submit" class="btn btn-primary" id="save">Guardar</button>
				</div>
			</div>
		</form>
	</div>
<?php
	include("footer.html");
?>