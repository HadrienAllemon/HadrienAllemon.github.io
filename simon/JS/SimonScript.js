var audio,context,oscillatorsNode,oscillatorNode1,errGain,failOsc,failGain,countDown;
var it=0;
var moves = [];
var clickable = false;
function audioInit(){
	var AudioContext = window.AudioContext || window.webkitAudioContext || false;
	context = new AudioContext();
	failOsc = context.createOscillator();
	failOsc.frequency.setValueAtTime(190,context.currentTime);
	failOsc.type = "square"
	failOsc.start(0,0);
	failGain = context.createGain();
	failGain.gain.setValueAtTime(0,context.currentTime)
	failOsc.connect(failGain);
	failGain.connect(context.destination);
	var frequencies = [200.81,220.00,246.94	,261.63];
	oscillatorsNode = frequencies.map(function(val){
		var oscillator = context.createOscillator();
		oscillator.frequency.setValueAtTime(val,context.currentTime);
		oscillator.type="sine";
		oscillator.start(0.0);
		return oscillator;
	});
	errGain = oscillatorsNode.map(function(val){
		var gainNode = context.createGain();
		gainNode.gain.setValueAtTime(0,context.currentTime);
		val.connect(gainNode);
		gainNode.connect(context.destination);
		return gainNode;
	})

	
	
	
}
$(window).on("load",audioInit());

	$(".col div").on("mousedown",function(){
		if (!clickable) return;
		var i = $(this).attr("index");
		console.log(checkMove(i,it));
		$(".col > div[index='"+ i +"']").addClass("lit");
		if (checkMove(i,it)){
		errGain[i].gain.setTargetAtTime(.5,context.currentTime,.05);
		it++;
		} else {
			it=0;
			failGain.gain.setTargetAtTime(.3,context.currentTime,.05);
			
			setTimeout(function(){
				failGain.gain.setTargetAtTime(0,context.currentTime,.05);
				iterateMove(moves,0);
			},1000)
		}
		
	});

	$(document).on("mouseup",function(){
		if (!clickable) return
		console.log("Countdown = " + countDown);
		errGain.forEach(val => val.gain.setTargetAtTime(0,context.currentTime,.1));
		$(".col > div").each((i,val)=>val.classList.remove("lit"));
		if (it==moves.length){
			clickable=false;
			it=0;
			playTime();
			setTimeout(function(){iterateMove(moves,0)},500);
		}
	});



function playTime(){
	moves.push(Math.floor(Math.random()*4));
	console.log(moves);
	
}

function iterateMove(arr,it){
	var g = errGain[arr[it]];
	g.gain.setTargetAtTime(.5,context.currentTime,.2);
	var touch = $(".col > div[index='"+arr[it]+"']");
	touch.addClass("lit");
	console.log(touch)
	setTimeout(function(){
		g.gain.setTargetAtTime(0,context.currentTime,.2)
		touch.removeClass("lit");
		},1000);
	if (it<arr.length-1){
		setTimeout(function(){iterateMove(arr,it+1)},1500)
	} else setTimeout("clickable = true",1000);
}

playTime();
iterateMove(moves,0);
function checkMove(n,it){
	if (n==moves[it]){return true}
	else return false;
}
