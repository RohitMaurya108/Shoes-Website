const images = [
  "https://valentinoindia.com/cdn/shop/files/web_banners_1_6adb9dff-9360-4441-b565-67b0f13f5f42.webp?v=1720779660&width=2800",
  "https://valentinoindia.com/cdn/shop/files/web_banners_1_1.webp?v=1719490795&width=2000",
  "https://valentinoindia.com/cdn/shop/files/web_banners_2_99213ea4-b1cd-44e6-b339-cab8e2df7c53.webp?v=1720779721&width=2800",
];

let currentImageIndex = 0;
const banner = document.getElementById("banner");

function updateBannerImage() {
  const imgElement = banner.querySelector("img");
  imgElement.classList.remove("zoomed");

  setTimeout(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imgElement.src = images[currentImageIndex];
    imgElement.classList.add("zoomed");
  }, 1000);
}

setTimeout(() => {
  const imgElement = banner.querySelector("img");
  imgElement.classList.add("zoomed");
}, 100);

setInterval(updateBannerImage, 3000);

function toggleSection(section) {
  const activeSection = document.querySelector(".section.active");
  if (activeSection && activeSection !== section) {
    activeSection.classList.remove("active");
  }

  section.classList.toggle("active");
}

const slidesContainer = document.querySelector(".testimonial-slides");
const totalSlides = document.querySelectorAll(".testimonial").length;
let currentIndex = 0;

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? totalSlides - 2 : currentIndex - 1;
  updateSlidePosition();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = currentIndex === totalSlides - 2 ? 0 : currentIndex + 1;
  updateSlidePosition();
});

function updateSlidePosition() {
  slidesContainer.style.transform = `translateX(-${currentIndex * 50}%)`;
}

const carouselSlides = document.querySelector(".carousel-slides");
const slides = document.querySelectorAll(".slide");
const totalSlidesI = slides.length;
let currentIndexI = 0;

document.getElementById("prevBtnI").addEventListener("click", () => {
  currentIndexI = currentIndexI === 0 ? totalSlidesI - 5 : currentIndexI - 1;
  updateCarousel();
});

document.getElementById("nextBtnI").addEventListener("click", () => {
  currentIndexI = currentIndexI >= totalSlidesI - 5 ? 0 : currentIndexI + 1;
  updateCarousel();
});

function updateCarousel() {
  const slideWidth = slides[0].clientWidth;
  carouselSlides.style.transform = `translateX(-${
    currentIndexI * slideWidth
  }px)`;
}

//connect your Emailjs
(function () {
  emailjs.init("PUBLIC_API_KEY");
})();

function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Template parameters (match these with your EmailJS template)
  const templateParams = {
    user_name: name,
    user_email: email,
    message: message,
  };

  emailjs.send("service_ID", "template_ID", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.error("FAILED...", error);
    }
  );
}
