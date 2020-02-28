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
	var video_rate_decrease = document.getElementById("myVideo")
	video_rate_decrease.playbackRate -= .20;
	console.log("Speed is " + video.playbackRate);	  
}

function increaseSpeed() {
	var video_rate_increase = document.getElementById("myVideo")
	video_rate_increase.playbackRate += .25;
	console.log("Speed is " + video.playbackRate);
}

function skipAhead() {
	var skip_ahead = document.getElementById("myVideo");
	// skip_ahead.currentTime += 60;
	if(video.ended){
		video.pause();
		video.currentTime = 0;
		video.play()
	}
	else{
		skip_ahead.currentTime += 60;
	}
	console.log("Current location is "+ video.currentTime);
} 

function mute() { 
	if (video.muted){
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Unmuted");
	}
	else{
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Muted";
		console.log("Muted")
	}
}

function changeVolume() {
	video.volume = volumeSlider.value / 100;
	document.querySelector("#volume").innerHTML = volumeSlider.value + "%";
	console.log("Volume is " + volumeSlider.value);
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
