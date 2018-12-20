//=================================================Variables Globales=============================================
var clase_cuadro = document.getElementsByClassName("cuadro");
var clase_casilla_blanca = document.getElementsByClassName("casilla_blanca");
var clase_casilla_negra = document.getElementsByClassName("casilla_negra");
var table = document.getElementById("tablero");
var score = document.getElementById("score");
var black_background = document.getElementById("fondo_oscuro");
var alturaVentana = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var anchoVentana =  window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var longMovimiento = 80 ;
var desvMovimiento = 10;
var Dimension = 1;
var fichaSelec,indiceFichaSelec;
var upRight,upLeft,downLeft,downRight;  // toate variantele posibile de mers pt o  dama
var contor = 0 , gameOver = 0;
var pantallaG = 1;
var bloque = [];
var blancas = [];
var negras = [];
var main_marcador ;
var primerMov;
var otroMov;
var permisoAtacar = false;
var multi = 1 // 2 daca face saritura 1 in caz contrat
var limiteTabla, limiteTabla_rev, moverArribaI, moverArribaD, moverAbajoI, moverAbajoD , limiteTablaI, limiteTablaD;
/*===================================================================================================================*/
	getDimension();
	if(anchoVentana > 640){
		longMovimiento = 80;
		desvMovimiento = 10;
	}
	else{
		longMovimiento = 50;
		desvMovimiento = 6;
	}
/*====================================declararea claselor========================================================*/
var square_p = function(square,index){
	this.id = square;
	this.ocupied = false;
	this.pieceId = undefined;
	this.id.onclick = function() {
		makeMove(index);
	}
}
var checker = function(piece,color,square) {
	this.id = piece;
	this.color = color;
	this.king = false;
	this.ocupied_square = square;
	this.alive = true;
	this.attack = false;
	if(square%8){
		this.coordX= square%8;
		this.coordY = Math.floor(square/8) + 1 ;
	}
	else{
		this.coordX = 8;
		this.coordY = square/8 ;
	}
	this.id.onclick = function  () {
		showMoves(piece);	
	}
}
checker.prototype.setCoord = function(X,Y){
	var x = (this.coordX - 1  ) * longMovimiento + desvMovimiento;
	var y = (this.coordY - 1 ) * longMovimiento  + desvMovimiento;
	this.id.style.top = y + 'px';
	this.id.style.left = x + 'px';
}
checker.prototype.changeCoord = function(X,Y){
	this.coordY +=Y;
	this.coordX += X;
}
checker.prototype.checkIfKing = function () {
	if(this.coordY == 8 && !this.king &&this.color == "white"){
		this.king = true;
		this.id.style.border = "4px solid #FFFF00";
	}
	if(this.coordY == 1 && !this.king &&this.color == "black"){
		this.king = true;
		this.id.style.border = "4px solid #FFFF00";
	}
}
/*===============Initializarea campurilor de joc =================================*/
for (var i = 1; i <=64; i++)
	bloque[i] =new square_p(clase_cuadro[i],i);
/*================================================================================*/
/*================initializarea damelor ==========================================*/
/////////////////		damele albe			//////////////////////////////////////// 
for (var i = 1; i <= 4; i++){
	blancas[i] = new checker(clase_casilla_blanca[i], "white", 2*i -1 );
	blancas[i].setCoord(0,0);
	bloque[2*i - 1].ocupied = true;
	bloque[2*i - 1].pieceId =blancas[i];
}
for (var i = 5; i <= 8; i++){
	blancas[i] = new checker(clase_casilla_blanca[i], "white", 2*i );
	blancas[i].setCoord(0,0);
	bloque[2*i].ocupied = true;
	bloque[2*i].pieceId = blancas[i];
}
for (var i = 9; i <= 12; i++){
	blancas[i] = new checker(clase_casilla_blanca[i], "white", 2*i - 1 );
	blancas[i].setCoord(0,0);
	bloque[2*i - 1].ocupied = true;
	bloque[2*i - 1].pieceId = blancas[i];
}
//damele negre
for (var i = 1; i <= 4; i++){
	negras[i] = new checker(clase_casilla_negra[i], "black", 56 + 2*i  );
	negras[i].setCoord(0,0);
	bloque[56 +  2*i ].ocupied = true;
	bloque[56+  2*i ].pieceId =negras[i];
}
for (var i = 5; i <= 8; i++){
	negras[i] = new checker(clase_casilla_negra[i], "black", 40 +  2*i - 1 );
	negras[i].setCoord(0,0);
	bloque[ 40 + 2*i - 1].ocupied = true;
	bloque[ 40 + 2*i - 1].pieceId = negras[i];
}
for (var i = 9; i <= 12; i++){
	negras[i] = new checker(clase_casilla_negra[i], "black", 24 + 2*i  );
	negras[i].setCoord(0,0);
	bloque[24 + 2*i ].ocupied = true;
	bloque[24 + 2*i ].pieceId = negras[i];
}
/*========================================================*/
/*================SELECTIA UNEI PIESE==============*/
main_marcador = blancas;
function showMoves (piece) {
	/* daca a fost selectat inainte o piesa stergem drumurile ei actualizand nu drumurile  Game made by Cojocaru Calin George all rights reserved piesei noi s
	electat
	*/
	var match = false;
	permisoAtacar = false;
	if(fichaSelec){
			erase_roads(fichaSelec);
	}
	fichaSelec = piece;
	var i,j; // retine indicele damei
	for ( j = 1; j <= 12; j++){
		if(main_marcador[j].id == piece){
			i = j;
			indiceFichaSelec = j;
			match = true;
		}
	}
	if(primerMov && !attackMoves(primerMov)){
		changeTurns(primerMov);
		primerMov = undefined;
		return false;
	}
	if(primerMov && primerMov != main_marcador[i] ){
		return false;
	}
	if(!match) {
	 return 0 ; // daca nu a fost gasit nicio potrivire ; se intampla cand de exemplu rosu muta iar tu apasi pe negru
	}
	/*===acum in functie de culoarea lor setez marginile si miscarile damei===*/
	if(main_marcador[i].color =="white"){
		limiteTabla = 8;
		limiteTablaD = 1;
		limiteTablaI = 8;
		moverArribaD = 7;
		moverArribaI = 9;
		moverAbajoD = - 9;
		moverAbajoI = -7;
	}
	else{
		limiteTabla = 1;
		limiteTablaD = 8;
		limiteTablaI = 1;
		moverArribaD = -7;
		moverArribaI = -9;
		moverAbajoD = 9;
		moverAbajoI = 7;
	}
 	/*===========VERIFIC DACA POT ATACA====*/
		attackMoves(main_marcador[i]); // verifica daca am vreo miscare de atac
		/*========DACA NU POT ATACA VERIFIC DACA POT MERGE======*/
 	if(!permisoAtacar){
 	  downLeft = checkMove( main_marcador[i] , limiteTabla , limiteTablaD , moverArribaD , downLeft);
		downRight = checkMove( main_marcador[i] , limiteTabla , limiteTablaI , moverArribaI , downRight);
		if(main_marcador[i].king){
			upLeft = checkMove( main_marcador[i] , limiteTabla_rev , limiteTablaD , moverAbajoD , upLeft);
			upRight = checkMove( main_marcador[i], limiteTabla_rev , limiteTablaI , moverAbajoI, upRight)
		}
	}
	if(downLeft || downRight || upLeft || upRight){
			return true;
		}
	return false;
}
function erase_roads(piece){
	if(downRight) bloque[downRight].id.style.background = "#CECECD";
	if(downLeft) bloque[downLeft].id.style.background = "#CECECD";
	if(upRight) bloque[upRight].id.style.background = "#CECECD";
	if(upLeft) bloque[upLeft].id.style.background = "#CECECD";
}
//=============MUTAREA PIESEI======
function makeMove (index) {
	var isMove = false;
	if(!fichaSelec) // daca jocu de abea a inceput si nu a fost selectata nicio piesa
		return false;
	if(index != upLeft && index != upRight && index != downLeft && index != downRight){
		erase_roads(0);
		fichaSelec = undefined;
		return false;
}
//=========perspectiva e a jucatorului care muta =====
	if(main_marcador[1].color=="white"){
		cpy_downRight = upRight;
		cpy_downLeft = upLeft;
		cpy_upLeft = downLeft;
		cpy_upRight = downRight;
	}
	else{
		cpy_downRight = upLeft;
		cpy_downLeft = upRight;
		cpy_upLeft = downRight;
		cpy_upRight = downLeft;
	}  
	if(permisoAtacar)  // ca sa stiu daca sar doar un rand sau 2 
		multi = 2;
	else
		multi = 1;
		if(index == cpy_upRight){
			isMove = true;		
			if(main_marcador[1].color=="white"){
				// muta piesa
				executeMove( multi * 1, multi * 1, multi * 9 );
				//elimina piesa daca a fost executata o saritura
				if(permisoAtacar) {
					eliminateCheck(index - 9);
					var scorePoint = document.createElement("div");scorePoint.className="capturedPiece";document.getElementById("pl1").appendChild(scorePoint);
				}
			}
			else{
				executeMove( multi * 1, multi * -1, multi * -7);
				if(permisoAtacar){ eliminateCheck( index + 7 );var scorePoint = document.createElement("div");scorePoint.className="capturedPiece";document.getElementById("pl2").appendChild(scorePoint);}
			}
		}

		if(index == cpy_upLeft){
	
			isMove = true;
			if(main_marcador[1].color=="white"){
				executeMove( multi * -1, multi * 1, multi * 7);
			 	if(permisoAtacar){	eliminateCheck(index - 7 );var scorePoint = document.createElement("div");scorePoint.className="capturedPiece";document.getElementById("pl1").appendChild(scorePoint);}				
			}
			else{
				executeMove( multi * -1, multi * -1, multi * -9);
				if (permisoAtacar){ eliminateCheck( index + 9 );var scorePoint = document.createElement("div");scorePoint.className="capturedPiece";document.getElementById("pl2").appendChild(scorePoint);}
			}
		}
		if(main_marcador[indiceFichaSelec].king){
			if(index == cpy_downRight){
				isMove = true;
				if(main_marcador[1].color=="white"){
					executeMove( multi * 1, multi * -1, multi * -7);
					if(permisoAtacar){var scorePoint = document.createElement("div");scorePoint.className="capturedPiece";document.getElementById("pl1").appendChild(scorePoint); eliminateCheck ( index  + 7) };
				}
				else{
					executeMove( multi * 1, multi * 1, multi * 9);
					if(permisoAtacar){var scorePoint = document.createElement("div");scorePoint.className="capturedPiece";document.getElementById("pl2").appendChild(scorePoint); eliminateCheck ( index  - 9) };
				}
			}
		if(index == cpy_downLeft){
			isMove = true;
				if(main_marcador[1].color=="white"){
					executeMove( multi * -1, multi * -1, multi * -9);
					if(permisoAtacar) {var scorePoint = document.createElement("div");scorePoint.className="capturedPiece";document.getElementById("pl1").appendChild(scorePoint);eliminateCheck ( index  + 9)} ;
				}
				else{
					executeMove( multi * -1, multi * 1, multi * 7);
					if(permisoAtacar) {var scorePoint = document.createElement("div");scorePoint.className="capturedPiece";document.getElementById("pl2").appendChild(scorePoint);eliminateCheck ( index  - 7)} ;
				}
			}
		}
	erase_roads(0);
	main_marcador[indiceFichaSelec].checkIfKing();
	// schimb randul
	if (isMove) {
			otroMov = undefined;
		 if(permisoAtacar) {
			 	otroMov = attackMoves(main_marcador[indiceFichaSelec]);
		 }
		if (otroMov){
			primerMov = main_marcador[indiceFichaSelec];
			showMoves(primerMov);
		}
		else{
			primerMov = undefined;
		 	changeTurns(main_marcador[1]);
		 	gameOver = checkIfLost();
		 	if(gameOver) { setTimeout( declareWinner(),3000 ); return false};
		 	gameOver = checkForMoves();
		 	if(gameOver) { setTimeout( declareWinner() ,3000) ; return false};
		}
	}
}
//===========MUTAREA PIESEI-SCHIMBAREA COORDONATELOR======
function executeMove (X,Y,nSquare){
	// schimb coordonate piesei mutate
	main_marcador[indiceFichaSelec].changeCoord(X,Y); 
	main_marcador[indiceFichaSelec].setCoord(0,0);
	// eliberez campul pe care il ocupa piesa si il ocup pe cel pe care il va ocupa
	bloque[main_marcador[indiceFichaSelec].ocupied_square].ocupied = false;			
	//alert (main_marcador[indiceFichaSelec].ocupied_square);
	bloque[main_marcador[indiceFichaSelec].ocupied_square + nSquare].ocupied = true;
	bloque[main_marcador[indiceFichaSelec].ocupied_square + nSquare].pieceId = 	bloque[main_marcador[indiceFichaSelec].ocupied_square ].pieceId;
	bloque[main_marcador[indiceFichaSelec].ocupied_square ].pieceId = undefined; 	
	main_marcador[indiceFichaSelec].ocupied_square += nSquare;
}
function checkMove(Apiece,tLimit,tLimit_Side,moveDirection,theDirection){
	if(Apiece.coordY != tLimit){
		if(Apiece.coordX != tLimit_Side && !bloque[ Apiece.ocupied_square + moveDirection ].ocupied){
			bloque[ Apiece.ocupied_square + moveDirection ].id.style.background = "#704923";
			theDirection = Apiece.ocupied_square + moveDirection;
		}
	else
			theDirection = undefined;
	}
	else
		theDirection = undefined;
	return theDirection;
}
function  checkAttack( check , X, Y , negX , negY, squareMove, direction){
	if(check.coordX * negX >= 	X * negX && check.coordY *negY <= Y * negY && bloque[check.ocupied_square + squareMove ].ocupied && bloque[check.ocupied_square + squareMove].pieceId.color != check.color && !bloque[check.ocupied_square + squareMove * 2 ].ocupied){
		permisoAtacar = true;
		direction = check.ocupied_square +  squareMove*2 ;
		bloque[direction].id.style.background = "#704923";
		return direction ;
	}
	else
		direction =  undefined;
		return direction;
}
function eliminateCheck(indexx){
	if(indexx < 1 || indexx > 64)
		return  0;
	var x =bloque[ indexx ].pieceId ;
	x.alive =false;
	bloque[ indexx ].ocupied = false;
	x.id.style.display  = "none";

}	
function attackMoves(ckc){
 		upRight = undefined;
 		upLeft = undefined;
 		downRight = undefined;
 		downLeft = undefined;
 	if(ckc.king ){
 		if(ckc.color == "white"){
			upRight = checkAttack( ckc , 6, 3 , -1 , -1 , -7, upRight );
			upLeft = checkAttack( ckc, 3 , 3 , 1 , -1 , -9 , upLeft );
		}
		else{
	 		downLeft = checkAttack( ckc , 3, 6, 1 , 1 , 7 , downLeft );
			downRight = checkAttack( ckc , 6 , 6 , -1, 1 ,9 , downRight );		
		}
	}
	if(ckc.color == "white"){
	 	downLeft = checkAttack( ckc , 3, 6, 1 , 1 , 7 , downLeft );
		downRight = checkAttack( ckc , 6 , 6 , -1, 1 ,9 , downRight );
	}
	else{
		upRight = checkAttack( ckc , 6, 3 , -1 , -1 , -7, upRight );
		upLeft = checkAttack( ckc, 3 , 3 , 1 , -1 , -9 , upLeft );
	}
 	if(ckc.color== "black" && (upRight || upLeft || downLeft || downRight ) ) {
	 	var p = upLeft;
	 	upLeft = downLeft;
	 	downLeft = p;

	 	p = upRight;
	 	upRight = downRight;
	 	downRight = p;

	 	p = downLeft ;
	 	downLeft = downRight;
	 	downRight = p;

	 	p = upRight ;
	 	upRight = upLeft;
	 	upLeft = p;
 	}
 	if(upLeft != undefined || upRight != undefined || downRight != undefined || downLeft != undefined){
 		return true;
 	}
 	return false;
}
function changeTurns(ckc){
		if(ckc.color=="white")
	main_marcador = negras;
else
	main_marcador = blancas;
 }
function checkIfLost(){
	var i;
	for(i = 1 ; i <= 12; i++)
		if(main_marcador[i].alive)
			return false;
	return true;
}
function  checkForMoves(){
	var i ;
	for(i = 1 ; i <= 12; i++)
		if(main_marcador[i].alive && showMoves(main_marcador[i].id)){
			erase_roads(0);
			return false;
		}
	return true;
}
function declareWinner(){
	black_background.style.display = "inline";
	score.style.display = "block";
	if(main_marcador[1].color == "white")
		score.innerHTML = "Jugador 2 Gana!";
	else
		score.innerHTML = "Jugador 1 Gana!";
	setTimeout("location.reload(true);",2000);
}
function playSound(sound){
	if(sound) sound.play();
}
function getDimension (){
	contor ++;
 alturaVentana = window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;  ;
 anchoVentana =  window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
}
document.getElementsByTagName("BODY")[0].onresize = function(){
	getDimension();
	var aux_Pantalla = pantallaG ;
if(anchoVentana < 650){
		longMovimiento = 50;
		desvMovimiento = 6; 
		if(pantallaG == 1) pantallaG = -1;
	}
if(anchoVentana > 650){
		longMovimiento = 80;
		desvMovimiento = 10; 
		if(pantallaG == -1) pantallaG = 1;
	}
	if(pantallaG !=aux_Pantalla){
		for(var i = 1; i <= 12; i++){
			negras[i].setCoord(0,0);
			blancas[i].setCoord(0,0);
		}
	}
}