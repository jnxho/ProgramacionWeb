<?php
	include_once 'menu.html';
	include_once 'biblioteca.php';
?>
<div class="container">
	<div class="row">
	<div class="wrapper col-md-8">
	<h2 class="section-title"><strong>DESTACADAS</strong></h2>
	<div class="row">

<?php
	$query="SELECT * FROM news  ORDER BY likes DESC";
	$result = $db->query($query);
	if (!$result) {
	    print "<p>Error en la consulta.</p>";
	}else{
		$count=0;
		foreach($result as $key) {
			if ($count==9) {
				break;
			}
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
<div class="wrapper col-md-4" style="margin-top:25px">
	<div class="panel panel-default">
		<div class="panel-heading">ÚLTIMAS</div>
		<ul class="list-group">
			<?php
				$query="SELECT * FROM news  ORDER BY ndate DESC,ntime DESC";
				$result = $db->query($query);
				if (!$result) {
				    print "<p>Error en la consulta.</p>";
				}else{
					$count=0;
					$aux="";
					foreach($result as $key) {
						if ($count==6) {
							break;
						}
						if($key['ntime']>"11:59:59" && $key['ntime']<="23:59:59"){
							$aux=$key['ntime'];
							$aux=explode(':', $aux);
							$aux[0]=(int)$aux[0];
							$aux[0]-=12;
							$hrs=$aux[0].'-'.$aux[1].'-'.$aux[2];
							$hours=$hrs."pm";
						}else{
							if ($key['ntime']>"23:59:59" && $key['ntime']<="00:59:59") {
								$aux=$key['ntime'];
								$aux=explode(':', $aux);
								$aux[0]=(int)$aux[0];
								$aux[0]+=12;
								$hrs=$aux[0].'-'.$aux[1].'-'.$aux[2];
								$hours=$hrs."am";	
							}else{
								$hours=$key['ntime']."am";
							}
						}
						echo "<a type=\"button\" href=\"viewNote.php?news=".$key['id']."\"><li class=\"list-group-item\"><p style=\"font-size:12px\">".$key['ndate']." ".$hours."</p>".$key['title']."</li></a>";

						$count++;
					}
				}
			?>
			
		</ul>
	</div>
</div>
</div>
</div>
<?php
	$db=null;
	include_once 'footer.html';
?>