<script type="text/javascript">
	var computerChoice = Math.random();
	if (computerChoice < 0.33) {
    	computerChoice = "rock";
	} else if(computerChoice <= 0.66) {
    	computerChoice = "paper";
	} else {
    	computerChoice = "scissors";
	}
	
	for(i=1; i<6; i++) {
	var counter =0;
	document.getElementById("box1").onclick= function(){
		if(computerChoice == "rock"){
			alert("It is a tie, You chose Rock, computer chose Rock, Lame!");
		}
		else if(computerChoice =="paper"){
			alert("Sucker, YOU LOST! You chose Rock, COMPUTER OVERLORD chose paper");
		}
		else if(computerChoice=="scissors"){
			alert("DANG! You Beat Computer OVERLORD cuz he chose scissors");
			counter++;
		}
	}
	document.getElementById("box2").onclick= function(){
		if(computerChoice == "paper"){
			alert("It is a tie, You chose Paper, computer chose Paper, Lame!");
		}
		else if(computerChoice =="scissors"){
			alert("Sucker, YOU LOST! You chose Paper, COMPUTER OVERLORD chose scissors");
		}
		else if(computerChoice=="rock"){
			alert("DANG! You Beat Computer OVERLORD cuz he chose rock");
			counter++;
		}
	}
	document.getElementById("box3").onclick= function(){
		if(computerChoice == "scissors"){
			alert("It is a tie, You chose scissors, computer chose scissors, Lame!");
		}
		else if(computerChoice =="rock"){
			alert("Sucker, YOU LOST! You chose scissors, COMPUTER OVERLORD chose rock");
		}
		else if(computerChoice=="paper"){
			alert("DANG! You Beat Computer OVERLORD cuz he chose paper");
			counter++;
		}
	}
	i++;
	return counter;
}
var computerWins = 5-counter;
if (computerWins > counter) {
    console.log("COMPUTER OVERLORD WINS, HE IS YOUR MASTER!");
}
else {
    console.log("Hey computer overlord and you can be friends, just dont tell anyone you lost, k");
}

</script>