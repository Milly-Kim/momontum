const body = document.querySelector("body");

const IMG_NUM = 3;

function paintImage(imgNumber) {
	const image = new Image();
	image.src = `./images/${imgNumber + 1}.jpg`;
	body.prepend(image);
	image.classList.add("bgImage");
}

function genRandom() {
	const number = Math.floor(Math.random() * IMG_NUM);

	return number;
}

function init() {
	const randomNum = genRandom();
	paintImage(randomNum);
}

init();
