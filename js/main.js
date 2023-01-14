const navButton = document.querySelector('.nav__burger-btn');
const navMenu = document.querySelector('.nav__menu');
const allMenuLinks = document.querySelectorAll('.nav__link');
const navBar = document.querySelector('.nav');
// const mainSection = document.querySelector(main);
const footerYear = document.querySelector('.footer__year');

function toggleMenu() {
	navButton.classList.toggle('is-active');
	navMenu.classList.toggle('nav__menu-active');

	allMenuLinks.forEach((link) => {
		link.addEventListener('click', () => {
			navMenu.classList.remove('nav__menu-active');
			navButton.classList.remove('is-active');
		});
	});
}

function handleObserver() {
	let currentPosition = window.scrollY;
	let windowHeight = window.innerHeight;

	if (currentPosition >= windowHeight - 80) {
		navBar.classList.add('nav--dark');
	} else {
		navBar.classList.remove('nav--dark');
	}
}

function getCurrentYear() {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
}

window.addEventListener('scroll', handleObserver);
getCurrentYear();
navButton.addEventListener('click', toggleMenu);
