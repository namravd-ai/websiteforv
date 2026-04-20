const memories = document.querySelectorAll(".memory");
const ending = document.querySelector(".ending");

// Scroll animation
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add("show");
}
});
}, {
threshold: 0.2
});

memories.forEach(mem => {
observer.observe(mem);

// Click reveal
mem.addEventListener("click", () => {
mem.classList.toggle("active");
});
});

// Show ending at bottom
window.addEventListener("scroll", () => {
if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 100) {
ending.classList.add("show");
}
});
