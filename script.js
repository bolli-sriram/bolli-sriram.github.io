
console.log("Sri Ram Bolli Portfolio Loaded");

const cards = document.querySelectorAll('.card,.project-card,.skill-card');

window.addEventListener('scroll', () => {
cards.forEach(card => {
const top = card.getBoundingClientRect().top;

if(top < window.innerHeight - 80){
card.style.opacity = "1";
card.style.transform = "translateY(0px)";
}
});
});
