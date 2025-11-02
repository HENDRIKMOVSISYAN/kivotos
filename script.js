// Scroll animations
const sections = document.querySelectorAll('.section, #hero');
sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(50px)";
});

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight;
    sections.forEach(section => {
        if (scrollPos > section.offsetTop + 100) {
            section.style.transition = "all 1s ease";
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }
    });
});

// Smooth back-to-top
document.querySelector('.back-to-top').addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.opacity = 1;
        backToTop.style.pointerEvents = 'auto';
    } else {
        backToTop.style.opacity = 0;
        backToTop.style.pointerEvents = 'none';
    }  
});

document.addEventListener("DOMContentLoaded", () => {
    const cookieBanner = document.getElementById("cookieBanner");
    const acceptBtn = document.getElementById("acceptCookies");

    // Εμφάνισε τη μπάρα μόνο αν δεν έχει αποδεχθεί ο χρήστης πριν
    if (!localStorage.getItem("cookiesAccepted")) {
        cookieBanner.classList.remove("hide");
    }

    // Όταν πατήσει ο χρήστης το κουμπί
    acceptBtn.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "true"); // Αποθήκευση επιλογής
        cookieBanner.classList.add("hide"); // Κλείσιμο με animation
    });
});
