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


