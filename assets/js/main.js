// GET ALL SECTION ELEMENTS
const sections = document.querySelectorAll('.reveal')
// ANIMATED TEXTS
const splitTypes = document.querySelectorAll('.text-anim')
// DEV SERVICE IMAGES
const devsrvs = document.querySelectorAll('.dev-srv-item')
const srvs = document.querySelectorAll('.srv-item')
gsap.registerPlugin(ScrollTrigger)

// SERVICES ANIMATION
function vAnimateServices(){
    devsrvs.forEach((feature) => {
        const sc_imgs = feature.querySelectorAll('.dev-srv-img');
    
        gsap.to(sc_imgs, {
            yPercent: -100 * (sc_imgs.length - 1) - 20, // Défilement vers le haut
            ease: "none",
            scrollTrigger: {
                trigger: feature,
                start: "top 70",
                pin: true,
                end: "+=100%",
                scrub: true,
                markers: false
            }
        });
    });
}

// HORIZONTAL SCROLL ANIMATION ON SECTIONS
function hAnimateServices(){
    let scrollTween = gsap.to(srvs, {
        // xPercent: -100 * (srvs.length - 1) + 50,
        x: () => `-${(srvs[0].offsetWidth + 96) * (srvs.length - 1)}px`,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: "#srvt",
            start: "top 70",
            pin: true,
            scrub: true,
            end: "+=2000",
            snap: 1 / (srvs.length - 1),
            markers: false,
        }
    });
}

// CREATE AN OBSERVER
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active')
                // entry.target.classList.remove('hidden')
            }else{
                entry.target.classList.remove('active')
                // entry.target.classList.add('hidden')
            }
        })
    }
)

// LOAD PARTICLES
function loadParticles() {
    // const script = document.createElement('script');
    // script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    // script.onload = () => {
      particlesJS('particles', {
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#55566d"
          },
          "shape": { "type": "circle" },
          "opacity": { "value": 0.5 },
          "size": { "value": 5, "random": true },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#55566d",
            "opacity": 0.4,
            "width": 2
          },
          "move": { "enable": true, "speed": 2 }
        },
        "interactivity": {
          "events": {
            "onhover": { "enable": true, "mode": "repulse" },
            "onclick": { "enable": true, "mode": "push" }
          },
          "modes": { "repulse": { "distance": 100 }, "push": { "particles_nb": 4 } }
        },
        "retina_detect": true
      });
    // };
    // document.body.appendChild(script);
}

// SCROLL ANIMATIONS
function startScrollAnimation() {
    // Enregistrer le plugin ScrollTrigger
    // document.onload = () => {
    gsap.registerPlugin(ScrollTrigger);
    // console.log(gsap.utils.toArray('.reveal'))

    // const reveals = document.querySelectorAll('.reveal')

    // Animation d'exemple
    gsap.utils.toArray('.reveal').forEach((element) => {
        // console.log(element)
        gsap.from(element, {
            opacity: 0,         // Commence avec une opacité de 0
            duration: 1,        // Durée de l'animation
            scrollTrigger: {
                trigger: element, // L'élément qui déclenche l'animation
                start: 'top 80%', // Débute l'animation quand le haut de l'élément atteint 80% du viewport
                end: 'top 30%',   // Fin de l'animation
                scrub: true       // Synchronise l'opacité avec le défilement
            }
        });
    });

    // VERTICAL SCROLL ANIMATION
}

// TEXT ANIMATION
function animateTexts(){
    splitTypes.forEach((char, i) => {
        const text = new SplitType(char, { types: 'chars,words' })
    
        gsap.from(text.chars, {
            scrollTrigger: {
                trigger: char,
                start: 'top 80%',
                end: 'top 20%',
                scrub: true,
                markers: false
            },
            opacity: .1,
            stagger: .1
        })
    })
}

// LENIS SCROLL
const lenis = new Lenis()
lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Fonction pour bloquer le défilement
function disableScroll() {
    // document.body.style.overflow = 'hidden';
    lenis.stop()
}

// Fonction pour débloquer le défilement
function enableScroll() {
    // document.body.style.overflow = '';
    lenis.start()
}

function reveal(idx='') {
    var selector = idx!=''?`.reveal${idx}`:'.reveal' 
    var reveals = document.querySelectorAll(selector);

    reveals.forEach(function (element) {
        var elementTop = element.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (elementTop < windowHeight) {
            element.classList.add("active");
        }
    });
}

function toggleMenu(){
    menubtn = document.getElementById('menu-btn');
            menu = document.getElementById('menu');
            menubtn.addEventListener('click', () => {
                document.body.classList.toggle('open');
                menu.classList.toggle('hidden');
                menu.classList.toggle('flex')
            })
}

// FUNCTION CALLS

// 1- PARTICLE JS
loadParticles()

// 2- ANIMATIONS
window.addEventListener("load", ()=>{
        reveal('')
        reveal('2500')
        reveal('2750')
        reveal('3000')
    }    
);
window.addEventListener("scroll",()=>{
    reveal('')
    reveal('2500')
    reveal('2750')
    reveal('3000')
} );

// 3- MENU TOGGLER
toggleMenu()