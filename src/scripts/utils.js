let mouse = {
	x: innerWidth / 2,
	y: innerHeight / 2
};

let colors = [
	'#9E2159',
	'#EBDC60',
	'#EB4992',
	'#31CFEB',
	'#298D9E'
];

function randomIntFromRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
	return colors[Math.floor(Math.random() * colors.length)];
}