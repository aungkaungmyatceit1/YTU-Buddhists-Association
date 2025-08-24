const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

// Open lightbox on photo click
document.querySelectorAll(".memory-photo img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
    captionText.innerText = img.alt;
  });
});

// Close lightbox
closeBtn.onclick = () => {
  lightbox.style.display = "none";
};

// Close when clicking outside
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
