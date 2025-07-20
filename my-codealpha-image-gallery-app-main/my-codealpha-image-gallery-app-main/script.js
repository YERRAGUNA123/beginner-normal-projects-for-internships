const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const caption = document.getElementById("caption");
const images = document.querySelectorAll(".gallery-item");
let currentIndex = 0;

// Open modal with selected image
images.forEach((img, index) => {
    img.addEventListener("click", () => {
        openModal(index);
    });
});

function openModal(index) {
    modal.style.display = "block";
    setModalImage(index);
    document.body.style.overflow = "hidden"; // Disable scroll
}

// Set modal image and caption
function setModalImage(index) {
    currentIndex = index;
    modalImage.src = images[currentIndex].src;
    caption.innerText = images[currentIndex].alt;
}

// Close modal
document.querySelector(".close").addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Re-enable scroll
});

// Navigate to next/previous image
document.querySelector(".next").addEventListener("click", nextImage);
document.querySelector(".prev").addEventListener("click", prevImage);

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    setModalImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    setModalImage(currentIndex);
}

// Close modal on outside click
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
    if (modal.style.display === "block") {
        if (e.key === "ArrowRight") {
            nextImage();
        } else if (e.key === "ArrowLeft") {
            prevImage();
        } else if (e.key === "Escape") {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }
});
