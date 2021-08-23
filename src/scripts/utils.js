//track mouse movement
let mouse = {
	x: innerWidth / 2,
	y: innerHeight / 2
};

//array of colours to be used in randomColor() function
let colors = [
	'#9E2159',
	'#EBDC60',
	'#EB4992',
	'#31CFEB',
	'#298D9E'
];

//selects a random number from 0 to 1
function randomIntFromRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

//gets a random color from color array
function randomColor(colors) {
	return colors[Math.floor(Math.random() * colors.length)];
}