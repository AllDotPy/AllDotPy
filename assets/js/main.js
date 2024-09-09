// GET ALL SECTION ELEMENTS
const sections = document.querySelectorAll('.reveal')

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

// 1- ANIMATIONS
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

// 2- MENU TOGGLER
toggleMenu()