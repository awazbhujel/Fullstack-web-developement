const navbar = document.getElementById('navbar')
const openButton = document.getElementById('open-sidebar-button')

// Match when viewport is at most 700px wide
const media = window.matchMedia('(max-width: 700px)')

// updateNavbar may be called with either a MediaQueryList or a MediaQueryListEvent
function updateNavbar(e){
    const isMobile = !!e && typeof e.matches === 'boolean' ? e.matches : media.matches
    // On mobile, keep the sidebar inert (not interactive) when closed. On desktop, navbar should always be interactive.
    if(isMobile){
        // when mobile we want the navbar to start inert (so hidden/closed state isn't interactive)
        navbar.setAttribute('inert', '')
    } else {
        // desktop device: ensure navbar is interactive
        navbar.removeAttribute('inert')
    }
}

media.addEventListener('change', updateNavbar)

function openSidebar(){

    navbar.classList.add('show')
    openButton.setAttribute('aria-expanded','true')
    navbar.removeAttribute('inert')
}

function closeSidebar(){
    navbar.classList.remove('show')
    openButton.setAttribute('aria-expanded','false')
    navbar.setAttribute('inert', '')
}

const navLinks = document.querySelectorAll("nav a")
navLinks.forEach(link =>{
    link.addEventListener('click', () =>{
        closeSidebar()
    })
})

updateNavbar(media)