<script type="text/javascript">

var counter;
var compCounter;
var i = 1;
function startGame() {
	for(i=1; i<6; i++){
		var player1 = userChoice();
		var player2 = computerChoice();
		var result = compareChoice(player1, player2);
		i++	
	}
	if(counter > compCounter){
		alert("YOU WIN THE GAME!");
	}else if(counter < compCounter){
		alert("Computer OVERLORD WINS THE GAME!");
	} else	{
		alert("What are the odds, its a tie!");
	} //the game is always showing a tie because I dont think i am passing counter and compCounter properly
}

function userChoice() {
	$("#box1").on("click", function(){
		$(this).val("rock");
	});
	$("#box2").on("click", function(){
		$(this).val("papers");
	});
	$("#box3").on("click", function(){
		$(this).val("scissors");
	});
} // This definately does not seem right;

function computerChoice() {
	var computerChoice = Math.random();
	if (computerChoice <= 0.33) {
    	return "rock";
	}else if(.34 <= computerChoice <= 0.66) {
    	return "papers";
	}else {
    	return "scissors";
	}
}

function compareChoice(user, comp){
	if((user ==="rock" && comp === "scissors") || (user ==="papers" && comp === "rock") ||
	   (user ==="scissors" && comp ==="papers")) {
	   		alert("DANG! You Beat Computer OVERLORD cuz he chose" + comp + "and YOU chose" + user);
	   		return counter++;
	}else if((user ==="rock" && comp === "papers") || (user ==="papers" && comp === "scissors") ||
	   (user ==="scissors" && comp ==="rock")) {   
	   		alert("SUCKER, YOU LOST cuz you chose" + user + "and Computer OVERLORD chose" + comp);
	   		return compCounter++;
	}else if(user===comp){
		alert("Lame! You both chose" + user);
		return counter+=0;
		return compCounter+=0;
	}
}

var x = startGame();
	   		
</script>
