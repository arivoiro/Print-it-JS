const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Flèches
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");

// Test des event listeners
/* 
arrow_left.addEventListener('click', function() {
	alert('Flèche gauche cliquée')
});

arrow_right.addEventListener('click', function() {
	alert('Flèche droite cliquée')
}); 
*/


// Bullet points
const slider = document.querySelector("#banner");
const dotsContainer = slider.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	dotsContainer.appendChild(dot);
}

const dots = dotsContainer.querySelectorAll(".dot");
dots[0].classList.add("dot_selected");


// Image et texte du slider
const bannerImg = slider.querySelector(".banner-img");
const tagLine = slider.querySelector("p");

let currentSlide = 0;

// Fonction de mise à jour de l'affichage du slider
function updateSlider() {
	dots.forEach(dot => dot.classList.remove("dot_selected"));
	dots[currentSlide].classList.add("dot_selected");

	bannerImg.setAttribute("src", "./assets/images/slideshow/" + slides[currentSlide].image);
	tagLine.innerHTML = slides[currentSlide].tagLine;
}

// Au clic sur la flèche droite
arrow_right.addEventListener("click", function() {
  	currentSlide++;

	// Si l'index de la slide est supérieur ou égal au nombre de slides, on revient à la première slide
	if (currentSlide >= slides.length) {
		currentSlide = 0;
	}

	updateSlider();
});

// Au clic sur la flèche gauche
arrow_left.addEventListener("click", function() {
	currentSlide--;

	// Si l'index de la slide est inférieur à 0, on revient à la dernière slide
	if (currentSlide < 0) {
		currentSlide = slides.length - 1;
	}	

	updateSlider();
});