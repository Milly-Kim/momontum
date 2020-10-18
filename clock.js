const clockContainer = document.querySelector(".js-title");
const clockTitle = clockContainer.querySelector("h1");
const dateTitle = clockContainer.querySelector("h3");

function getTime() {
	const date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth();
	const datenow = date.getDate();
	const minutes = date.getMinutes();
	const hours = date.getHours();
	const seconds = date.getSeconds();
	dateTitle.innerText = `${year}. ${month + 1}. ${datenow}`;
	clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
	getTime();
	setInterval(getTime, 1000);
}

init();