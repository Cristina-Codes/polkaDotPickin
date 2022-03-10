let timeremaining = 20;
let scoreCount = 0;
// let clickCounter = 0;
let box = document.querySelector('.container');
let contWidth = box.offsetWidth;
let contHeight = box.offsetHeight;

console.log(contWidth);
console.log(contHeight);

//Start the game
$("#start").click(function() {
	$("#intro").css("display", "none");
	$(".circles").css("display", "block");
	startCountdown();
	show("matching_circle");
});

// Gameplay for large screens, tablet/phone screens
if($(window).width() > 680) {      
  $("#match").click(function() {
		$("#diff1").css({"top" : ((contHeight-75)*Math.random()) , "left" : ((contWidth-75)*Math.random())});
		$("#diff2").css({"top" : ((contHeight-145)*Math.random()) , "left" : ((contWidth-75)*Math.random())});
		$("#diff3").css({"top" : ((contHeight-215)*Math.random()) , "left" : ((contWidth-75)*Math.random())});
		$("#diff4").css({"top" : ((contHeight-285)*Math.random()) , "left" : ((contWidth-75)*Math.random())});
		$("#diff5").css({"top" : ((contHeight-355)*Math.random()) , "left" : ((contWidth-75)*Math.random())});
		$("#match").css({"top" : (-(contHeight-140)*Math.random()) , "left" : ((contWidth-75)*Math.random())});
	scoreCount++;
	$('.score').text(scoreCount);
	// clickCounter++;
});
}

// Timer controls
function startCountdown() {
	action = setInterval(function(){timeremaining -= 1;
	document.getElementById("time").innerHTML = timeremaining;
	if(timeremaining == 0){//gameover
		stopCountdown();
	}}, 1000); 
};
		
// End of game controls
function stopCountdown(){
	clearInterval(action);
	show("end");
	hide("diff5");
	hide("diff4");
	hide("diff3");
	hide("diff2");
	hide("diff1");
	hide("match");
	hide("matching_circle");
	document.getElementById("end").innerHTML = "<p>Game Over!</p>" + "<p>Score: " + scoreCount + "</p>" + "<button id='replay'>Replay</button>";
	$('#replay').on('click', () => {
		location.reload();
	});
};

// Display controls
function show(Id){
	document.getElementById(Id).style.display ="block";
};

function hide(Id) {
	document.getElementById(Id).style.display = "none";
};