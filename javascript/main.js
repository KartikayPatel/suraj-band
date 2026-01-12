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

