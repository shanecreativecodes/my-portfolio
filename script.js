const video = document.getElementById("bg-video");
const bg = document.body.getAttribute("data-bg");

if (video) {
  video.src = "assets/" + bg;
}


const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.style.transform = "translateY(-2px)";
  });

  link.addEventListener("mouseleave", () => {
    link.style.transform = "translateY(0)";
  });
});


const elements = document.querySelectorAll(".card, .skill, .page, .hero");

const reveal = () => {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", reveal);
reveal();


document.querySelectorAll("button, .contact-btn").forEach(btn => {
  btn.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    const rect = btn.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;

    btn.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});