const buttonDark = document.querySelector(".darkmode");
const buttonLight = document.querySelector(".lightmode");
const images = document.querySelectorAll(".zoom > img");

buttonDark.addEventListener('click', paginaDarkMode);
buttonLight.addEventListener('click', paginaLightMode)

const observer = new IntersectionObserver(callback, {
  rootMargin: "0px",
  threshold: Array.from({ length: 101 }, (_, i) => i / 100),
});

images.forEach((img) => {
  observer.observe(img);
});

function paginaDarkMode() {
    document.body.classList.add('darkthema');
    buttonDark.classList.add('verbergen');
    buttonLight.classList.remove('verbergen');
}

function paginaLightMode() {
    document.body.classList.remove('darkthema');
    buttonDark.classList.remove('verbergen');
    buttonLight.classList.add('verbergen');
}

function callback(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {

      const sx =  1 + entry.intersectionRatio / 10;
      const sy = 1 + entry.intersectionRatio / 10;

      entry.target.style.transform = `scale(${sx}, ${sy})`;
    }
  }); 
}
