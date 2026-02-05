const galleryImages = document.querySelectorAll(".gallery img");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");

galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImage.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
