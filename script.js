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
