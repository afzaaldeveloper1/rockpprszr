<script type="text/javascript">
var userScore =0;
var comScore = 0;
var i=0;
for (i=1; i<6; i++) {
	var computerChoice = Math.random();
	
	if (computerChoice < 0.33) {
    	computerChoice = "rock";
	}else if(computerChoice <= 0.66) {
    	computerChoice = "paper";
	} else {
    	computerChoice = "scissors";
	}
	document.getElementById("box1").onclick= function() {
		if(computerChoice == "rock"){
			alert("It is a tie, You chose Rock, computer chose Rock, Lame!");
			return userScore =0;
			return comScore = 0;
		}
		else if(computerChoice =="paper"){
			alert("Sucker, YOU LOST! You chose Rock, COMPUTER OVERLORD chose paper");
			return userScore=0;
			return comScore++;
		}
		else if(computerChoice=="scissors"){
			alert("DANG! You Beat Computer OVERLORD cuz he chose scissors");
			return userScore++;
			return comScore=0;
		}
	}
	document.getElementById("box2").onclick= function(){
		if(computerChoice == "paper"){
			alert("It is a tie, You chose Paper, computer chose Paper, Lame!");
			return userScore =0;
			return comScore = 0;
		}
		else if(computerChoice =="scissors"){
			alert("Sucker, YOU LOST! You chose Paper, COMPUTER OVERLORD chose scissors");
			return userScore =0;
			return comScore++;
		}
		else if(computerChoice=="rock"){
			alert("DANG! You Beat Computer OVERLORD cuz he chose rock");
			return userScore++;
			return comScore = 0;
		}	
	}
	document.getElementById("box3").onclick= function(){
		if(computerChoice == "scissors"){
			alert("It is a tie, You chose scissors, computer chose scissors, Lame!");
			return userScore =0;
			return comScore = 0;
		}
		else if(computerChoice =="rock"){
			alert("Sucker, YOU LOST! You chose scissors, COMPUTER OVERLORD chose rock");
			return userScore =0;
			return comScore++;
		}
		else if(computerChoice=="paper"){
			alert("DANG! You Beat Computer OVERLORD cuz he chose paper");
			return userScore++;
			return comScore = 0;
		}
	}
	i++;
	
}

if (comScore > userScore) {
    console.log("COMPUTER OVERLORD WINS, HE IS YOUR MASTER!");
}
else if (comScore > userScore){
   	 console.log("Hey computer overlord and you can be friends, just dont tell anyone you lost, k");
}
else {
	console.log("Looks like no one wins");
}
</script>