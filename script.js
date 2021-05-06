////////// NAVBAR
//Fazendo o X
//primeiro, eu recupero o #toggle e #navbar. depois, a cada click eu mudo a class para .active ou sem classe.
const toggle = document.getElementById('toggle')
const navbar = document.getElementById('navbar')
const header = document.getElementById('header')

// quando eu clico foca de header, o active vai ser removido e o menu vai encolher
document.onclick = function(e) {
    if (e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar') {
        toggle.classList.remove('active')
        navbar.classList.remove('active')
    }
}

toggle.onclick = function() {
    toggle.classList.toggle('active')
    navbar.classList.toggle('active')
}

/////////// NAVBAR SCROLLED: quando .home-intro sumir da tela ou aparecer, vai ativar ou desativar o observer
const headerScroll = document.querySelector('header')
const homeIntro = document.querySelector('#home-intro')

const homeIntroOptions = {
    //bg muda antes de #home-intro desaparecer completamente da tela, por isso o -
    rootMargin: '-200px 0px 0px 0px'
}

const homeIntroObserver = new IntersectionObserver(function (entries, homeIntroObserver){
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            headerScroll.classList.add('nav-scrolled')
        } else {
            headerScroll.classList.remove('nav-scrolled')
        }
    })
}, homeIntroOptions)

homeIntroObserver.observe(homeIntro)


// CARREGAMENTO NO SCROLL
// seleciono tudo com .fade-in para se chamar de fader.
const faders = document.querySelectorAll('.fade-in')
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appesarOnScroll){ 
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add('appear')
            appearOnScroll.unobserve(entry.target)
        }
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader)
})

// seleciono tudo com .slide-in e guardo na const sliders. 
const sliders = document.querySelectorAll('.slide-in')

sliders.forEach(slider => {
    appearOnScroll.observe(slider)
})