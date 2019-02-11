<?php
	include('menu.html');
	include_once("biblioteca.php");

	$news=$_GET['news'];

	$query="SELECT * FROM news  WHERE id = $news";
	$result = $db->query($query);
?>
<div class="container">

<?php
	if (!$result) {
	    print "<p>Error en la consulta.</p>";
	}else{
		foreach($result as $key) {
			echo "<div class='section-title'>".$key['autor']." / ".$key['ndate']." ".$key['ntime']."<h1>".$key['title']."</h1></div>";
			echo "<p style=\"text-align: justify;\">"."<div style=\"width: 100%;display: flex; align-items: center;flex-direction: column;\"><img src=\"images/noticias/".$key['image']."\"></div><br>".$key['description']."</p>";
		}
	}
?>
	<form style="width: 80%;margin-top: 50px" method="post" action="saveLike.php" enctype='multipart/form-data'>
		<input type="hidden" id="news" name="news" value=<?php echo "\"$news\""; ?>>
		<div class="form-group row">
			<div class="col-sm-10">
				<button type="submit" class="btn btn-primary" id="like">Me Gusta</button>
			</div>
		</div>
	</form>
<div class='section-title' style="width: 100%;display: flex; align-items: center;flex-direction: column;margin-bottom: 10px;">
		<h3>Agregar comentario</h3>
		<form style="width: 80%;margin-top: 50px" method="post" action="saveComent.php" enctype='multipart/form-data'>
			<div class="form-group row">
				<label for="validation01" class="col-sm-2 col-form-label">Nombre</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" id="autor" name="autor" placeholder="Nombre" value="">
				</div>
			</div>
			<div class="form-group row">
				<label for="validation01" class="col-sm-2 col-form-label">Comentario</label>
				<div class="col-sm-10">
					<textarea type="text" class="form-control" rows="4" id="coment"name="coment" placeholder="Comentario" value="" required></textarea>
				</div>
			</div>
			<input type="hidden" id="news" name="news" value=<?php echo "\"$news\""; ?>>
			<div class="form-group row">
				<div class="col-sm-10">
					<button type="submit" class="btn btn-primary" id="save">Guardar</button>
				</div>
			</div>
		</form>
	</div>
	<h3>Comentarios:</h3>
<?php
	$query="SELECT * FROM comment WHERE idNew = $news ORDER BY ndate DESC,ntime DESC";
	$result = $db->query($query);
	if (!$result){
	    print "<p>Error en la consulta.</p>";
	}else{
		foreach($result as $key) {
			echo "<div class='section section-title' style='margin-bottom: 10px;'><div class=\"container\"><p style=\"text-align:left\">".$key['nameAutor']."<br>".$key['description']."</p></div></div>";
		}
	}
?>
	</div>
</div>
<?php
	$db=null;
	include('footer.html'); 
?>