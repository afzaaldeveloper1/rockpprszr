<script type="text/javascript">
var roundCount = 0;
var userScore = 0;
var compScore = 0;

$(".btn-primary").on("click", function() {
	if(roundCount++ === 5) {
  	alert("Human: " + userScore + "\nComp: " + compScore);
    return;
  }
	var userChoice = parseInt($(this).val());
  var computerChoice = Math.floor(Math.random() * 3);

  
  $("#humanChoice").html(userChoice);
  $("#computerChoice").html(computerChoice);
  
  switch(getWinner(userChoice, computerChoice)) {
  	case -1:
    	alert("You lose");
      compScore++;
      break;
    case 0:
    	alert("Tie");
      break;
    case 1:
    	alert("You win");
      userScore++;
      break;
  };
});

function getWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
		return 0;
  } else if(userChoice === 0 && computerChoice === 1){
		return -1;
  } else if(userChoice === 0 && computerChoice === 2) {
		return 1;
  } else if(userChoice === 1 && computerChoice === 0) {
		return 1;
  } else if(userChoice === 1 && computerChoice === 2) {
		return -1;
  } else if(userChoice === 2 && computerChoice === 0) {
		return -1;
  } else if(userChoice === 2 && computerChoice === 1) {
		return 1;
  }
}

</script>