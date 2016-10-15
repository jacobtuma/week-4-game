
var ranNum;
var wins = 0;
var loss= 0;
var score = 0; 
var gem1;
var gem2;
var gem3;
var gem4;




function gameStart() {

	ranNum =  Math.floor(Math.random() * 101) + 19; ;
	gem1 = Math.floor(Math.random() * 11) + 1 ;
	gem2 = Math.floor(Math.random() * 11) + 1 ;
	gem3 = Math.floor(Math.random() * 11) + 1 ;
	gem4 = Math.floor(Math.random() * 11) + 1 ;

	score = 0;
	$('#score').html(score);
	$('#ranNum').html(ranNum);			
}

gameStart();


$('#wins').html(wins);
$('#losses').html(loss);



$(document).ready(function(){	

	$("#gem1").on("click", function(){
					// var value = (this).val().trim();					 
					score += gem1
					$('#score').html(score);
					decider();


				});

	$("#gem2").on("click", function(){
					// var value = (this).val().trim();					

					score += gem2
					$('#score').html(score);
					decider();


				});

	$("#gem3").on("click", function(){
					// var value = (this).val().trim();					

					score += gem3
					$('#score').html(score);
					decider();


				});

	$("#gem4").on("click", function(){
					// var value = (this).val().trim();					

					score += gem4
					$('#score').html(score);
					decider();

				});

});
console.log(ranNum);
console.log(score);

function decider(){

	if(score > ranNum) {

		loss++
		$('#losses').html(loss);
		gameStart();

	}

	else if(score == ranNum) {

		wins++
		$('#wins').html(wins)
		gameStart();
	}

}