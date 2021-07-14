// document.getElementById("ballCount").addEventListener("input", function(event) {
// 	ballCount = parseInt(this.value);
// 	document.getElementById("ballCount-text").textContent = "Balls: " + parseInt(this.value);
// });
// document.getElementById("gravity").addEventListener("input", function(event) {
// 	gravity = parseInt(this.value) / 100;
// 	document.getElementById("gravity-text").textContent = "Gravity: " + parseInt(this.value) + "%";
// });
// document.getElementById("wind").addEventListener("input", function(event) {
// 	wind = parseInt(this.value) / 100;
// 	document.getElementById("wind-text").textContent = "Wind: " + parseInt(this.value) + "%";
// });
// document.getElementById("iterations").addEventListener("input", function(event) {
// 	iterations = parseInt(this.value);
// 	document.getElementById("iterations-text").textContent = "iterations: " + parseInt(this.value);
// });
// document.getElementById("friction").addEventListener("input", function(event) {
// 	friction = parseInt(this.value) / 100;
// 	document.getElementById("friction-text").textContent = "Friction: " + parseInt(this.value) + "%";
// });
// let sliders = document.getElementsByClassName("slider");
// for (let i = 0; i < sliders.length; i++) {
// 	sliders[i].addEventListener("input", function() {
// 		this.style.background = "linear-gradient(to right, #FF1D00 0%, #FF1D00 " + map(this.value, this.min, this.max, 0, 100) + "%, #7F0E00 " + map(this.value, this.min, this.max, 0, 100) + "%, #7F0E00 100%)";
// 	});
// 	sliders[i].dispatchEvent(new CustomEvent("input"));
// }

function openNav(sidenav) {
	document.getElementById(sidenav).style.width = "20vw";
}

function closeNav(sidenav) {
	document.getElementById(sidenav).style.width = "0";
}