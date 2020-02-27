var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	let vol = document.querySelector("#volume");
	vol.innerHTML = video.volume *100 + '%';
	console.log("Play Video");
	console.log(video);
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate *= .20;
	console.log("Speed is " + video.playbackRate);	  
} 

function increaseSpeed() {
	video.playbackRate *= 1.25;
	console.log("Speed is " + video.playbackRate);
}

function skipAhead() {
	var skip_ahead = document.getElementById("myVideo");
	skip_ahead.currentTime += 60;
	if(video.ended == true){
		video.play()
	}
	console.log("Current location is "+ video.currentTime);
} 

function mute() { 
	if (video.muted){
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Changed to Unmuted");
	}
	else{
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Muted";
		console.log("Changed to Muted")
	}
}

function changeVolume() {
	video.volume = volumeSlider.value / 100;
	document.querySelector("#volume").innerHTML = volumeSlider.value + "%";
	console.log("Volume is " + video.volume);
}

function gray() {
	// document.getElementById("myVideo").style.filter = "grayscale(100%)";
	var gray_gray = document.getElementById("myVideo");
	gray_gray.classList.add("grayscale");
	console.log("In grayscale");
}

function color() {
	// document.getElementById("myVideo").style.filter = "grayscale(0)";
	var color_color = document.getElementById("myVideo");
	color_color.classList.remove("grayscale");
	console.log("In color") 
}