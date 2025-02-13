const logo = document.getElementById("overwatch-logo");
logo.addEventListener("click", () => {
    window.location.href = "index.html";
});
	
logo.addEventListener("mouseenter", () => {
	logo.style.opacity = "0";
	setTimeout(() => {
		logo.src = "overwatch_dark.jpg";
		logo.style.opacity = "1";
	}, 100);
});

logo.addEventListener("mouseleave", () => {
	logo.style.opacity = "0";
	setTimeout(() => {
		logo.src = "overwatch_light.jpg";
		logo.style.opacity = "1";
	}, 100);
});

document.addEventListener("DOMContentLoaded", () => {
    const heroes = [
        "Tracer", "Reaper", "Widowmaker", "Genji", "Hanzo", "Sojourn", "Kiriko", 
        "Reinhardt", "Sigma", "D.Va", "Winston", "Zarya", "Lucio", "Mercy", "Ana", 
        "Zenyatta", "Baptiste", "Junker Queen", "Ramattra"
    ];

    const heroButton = document.getElementById("random-hero-btn");
    const heroDisplay = document.getElementById("random-hero");

    heroButton.addEventListener("click", () => {
        const randomHero = heroes[Math.floor(Math.random() * heroes.length)];
        heroDisplay.textContent = `You got: ${randomHero}!`;
    });
});
