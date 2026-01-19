/* =========================
   STICKY HEADER SHADOW
   (Improves visual clarity)
========================= */
console.log("main.js loaded successfully");

window.addEventListener("scroll", function () {
    const header = document.querySelector(".main-header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
    } else {
        header.style.boxShadow = "none";
    }
});


/* =========================
   SMOOTH SCROLL (Optional)
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });
    });
});


/* =========================
   WHATSAPP CLICK TRACK
   (For future analytics)
========================= */
const whatsappBtn = document.querySelector(".floating-whatsapp");
if (whatsappBtn) {
    whatsappBtn.addEventListener("click", () => {
        console.log("WhatsApp button clicked");
    });
}


/* =========================
   CALL BUTTON TRACK
========================= */
const callBtn = document.querySelector(".floating-call");
if (callBtn) {
    callBtn.addEventListener("click", () => {
        console.log("Call button clicked");
    });
}


/* =========================
   LAZY LOAD IMAGES
   (SEO + Speed Boost)
========================= */
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img[data-src]");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute("data-src");
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => observer.observe(img));
});

const heroSlides = document.querySelectorAll('.hero-slide');

if (heroSlides.length > 0) {
  let currentSlide = 0;

  setInterval(() => {
    heroSlides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % heroSlides.length;
    heroSlides[currentSlide].classList.add('active');
  }, 5000);
}

const testimonialTrack = document.querySelector('.testimonial-track');
const testimonialCards = document.querySelectorAll('.testimonial-card');

if (testimonialTrack && testimonialCards.length > 0) {
  let index = 0;

  setInterval(() => {
    const cardWidth = testimonialCards[0].offsetWidth;
    index = (index + 1) % testimonialCards.length;
    testimonialTrack.style.transform = `translateX(-${index * cardWidth}px)`;
  }, 4000);
}

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}


/* =========================
   GALLERY LIGHTBOX
========================= */
function openLightbox(element) {
    const img = element.querySelector("img");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightbox = document.getElementById("lightbox");

    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

/* Close on ESC key */
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeLightbox();
    }
});

/* =========================
   MOBILE MENU TOGGLE
========================= */
function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    if (menu) {
      menu.classList.toggle("active");
    }
  }
  
  /* close menu when link clicked */
  document.querySelectorAll("#mobileMenu a").forEach(link => {
    link.addEventListener("click", () => {
      document.getElementById("mobileMenu").classList.remove("active");
    });
  });
  
  
function scrollToServices() {
    const target = document.getElementById("services");
    if (!target) return;

    const headerOffset = 80; // height of fixed header
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

const tTrack = document.querySelector('.testimonial-track');
const tCards = document.querySelectorAll('.testimonial-card');

let tIndex = 0;
const visibleCards = 4; // desktop

function slideTestimonials() {
  tIndex++;

  if (tIndex > tCards.length - visibleCards) {
    tIndex = 0;
  }

  const cardWidth = tCards[0].offsetWidth + 24; // gap
  tTrack.style.transform = `translateX(-${tIndex * cardWidth}px)`;
}

setInterval(slideTestimonials, 4000);

let currentSlide = 0;
const slides = document.querySelectorAll(".hero-slide");

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(showNextSlide, 4000);
if (window.innerWidth <= 768) {
    const slider = document.querySelector(".modern-services");
    let scrollAmount = 0;
  
    setInterval(() => {
      scrollAmount += slider.offsetWidth * 0.5;
      if (scrollAmount >= slider.scrollWidth) scrollAmount = 0;
  
      slider.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
      });
    }, 4000);
  }

  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
      document.getElementById('lightbox-img').src = img.src;
      document.getElementById('lightbox').style.display = 'flex';
    });
  });
  
  document.getElementById('lightbox').addEventListener('click', () => {
    document.getElementById('lightbox').style.display = 'none';
  });
  
  