/**
 * Hockey is the game. Make it happen.
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a 
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 * 
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 * 
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

 var numShotsOne = 0;
 var numGoalsOne = 0;
 var randomNumberOne = 0;
 var numShotsTwo = 0;
 var numGoalsTwo = 0;
 var randomNumberTwo = 0;
 var numreset = 0;
 
  $(function(){

  	//team one
	$("#teamone-shoot").click(function(){
		//generate a random number between 1 and 11
		randomNumberOne = Math.floor((Math.random() * 11) + 1);
		
			//goal made
    	if (randomNumberOne == 10){
    		//incerment shots by 1
    		numShotsOne++;
    		$("#teamone-numshots").html(numShotsOne);
    		//increment goals by 1
    		numGoalsOne++;
    		$("#teamone-numhits").html(numGoalsOne);
    		//change background color to red
    		$("html").css("background-color", "red");
    		//play audio on goal
    		document.getElementById('audioGoal').play(); 

    		//shot missed	
    	}else{
    		//increment shots by 1
    		numShotsOne++;
    		$("#teamone-numshots").html(numShotsOne);
    		//play audio on miss
    		document.getElementById('audioMiss').play();
    	};
    });

    //team two
    $("#teamtwo-shoot").click(function(){
    	//generate random number
		randomNumberTwo = Math.floor((Math.random() * 11) + 1);
		
		//shot good
    	if (randomNumberTwo == 10){
    		//increment shots by 1
    		numShotsTwo++;
    		$("#teamtwo-numshots").html(numShotsTwo);

    		//increment goals by 1
    		numGoalsTwo++;
    		$("#teamtwo-numhits").html(numGoalsTwo);

    		//change background to blue
    		$("html").css("background-color", "blue");

    		//play audio on goal
    		document.getElementById('audioAway').play();

    		//shot miss  	
    	}else{
    		//increment shots by 1
    		numShotsTwo++;
    		$("#teamtwo-numshots").html(numShotsTwo);
    		//play audio on miss
    		document.getElementById('audioMiss').play();
    	};
    });
    	//click reset button
    $("#reset").click(function(){
    	//change all variables to 0
    	numShotsTwo = 0;
    	numShotsOne = 0;
    	numGoalsOne = 0;
    	numGoalsTwo = 0;

    	//increment reset count by 1
    	numreset++;

    	//update html text
    	$("#teamtwo-numshots").html(numShotsTwo);
    	$("#teamtwo-numhits").html(numGoalsTwo);
    	$("#teamone-numhits").html(numGoalsOne);
    	$("#teamone-numshots").html(numShotsOne);
    	$("#num-resets").html(numreset);

    	//change background back to white
    	$("html").css("background-color", "white");

    });
    
 })