"use strict";

//establishing canvas
let canvas = document.getElementById("myCanvas");
let c = canvas.getContext("2d");

//setting canvas width and height
canvas.width = innerWidth;
canvas.height = innerHeight;

//star background variables
const COLOR_SPACE = "black";
const COLOR_STARS = "#fffa";
const STAR_NUM = 200; //number of stars in the background
const STAR_SIZE = 0.005; //max star size as a fraction of the screen width
const STAR_SPEED = 0.05; //fraction of the screen width per second
let timeDelta = 0;
let timeLast = 0;

function randomSign() {
    return Math.sign(Math.random() - 0.5);
}

let planetClicker = new PlanetClicker(0, 1);

//stars setup
let stars = [];
let starSpeed = STAR_SPEED * canvas.width;
let dx = starSpeed * randomSign() * Math.random();
//Pythagoras theoram, y = square root of a^2 + b^2 = c^2, therefore dy = sqrt(starSpeed ^ 2 - dy ^ 2)
let dy = Math.sqrt(Math.pow(starSpeed, 2) - Math.pow(dx, 2)) * randomSign();
for (var i = 0; i < STAR_NUM; i++) {
	let speedMultiplier = Math.random() * 1.5 + 0.5;
	stars[i] = {
		r: Math.random() * STAR_SIZE * canvas.width / 2,
		x: Math.floor(Math.random() * canvas.width),
		y: Math.floor(Math.random() * canvas.height),
		dx: dx * speedMultiplier,
		dy: dy * speedMultiplier
	}
}

function init() {
	let exampleStructure = new Structure("Factory", 500, 1);
}

function animate(timeNow) {

	document.getElementById("uranium-text").textContent = planetClicker.uranium;

	//calculating time difference for star background
	timeDelta = timeNow - timeLast;
	timeLast = timeNow;

	if (timeDelta > 100) {
		timeDelta = 100;
	}

	//implementing star background
	c.fillStyle = COLOR_SPACE;
	c.fillRect(0, 0, canvas.width, canvas.height);

	//implementing stars
	c.fillStyle = COLOR_STARS;
	for (var i = 0; i < STAR_NUM; i++) {
	 c.beginPath();
	 c.arc(stars[i].x, stars[i].y, stars[i].r, 0, Math.PI * 2);
	 c.fill();

	 	//update star's x position
		stars[i].x += stars[i].dx * timeDelta * 0.001;
		//update star's y position
		stars[i].y += stars[i].dy * timeDelta * 0.001;

		//reposition stars to the other side if it goes off screen
		if (stars[i].x < 0 - stars[i].r) {
			stars[i].x = canvas.width + stars[i].r;
		} else if (stars[i].x > canvas.width + stars[i].r) {
			stars[i].x = 0 - stars[i].r;
		}

		//reposition stars to the other side if it goes off screen
		if (stars[i].y < 0 - stars[i].r) {
			stars[i].y = canvas.height + stars[i].r;
		} else if (stars[i].y > canvas.height + stars[i].r) {
			stars[i].y = 0 - stars[i].r;
		}
	}

	//call the next frame
	requestAnimationFrame(animate);
}

animate(0);
init();