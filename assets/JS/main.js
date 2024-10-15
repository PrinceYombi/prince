//Icon navbar
let menuIcon = document.getElementById("menu-icon")
let navbar = document.querySelector('.navbar')
menuIcon.onclick = ()=>{

    menuIcon.classList.toggle('fa-close')
    navbar.classList.toggle('active')
}


//Scroll sections
let sections = document.querySelectorAll('section')
let navLinks  = document.querySelectorAll('.navbar a')

window.onscroll = ()=>{

    sections.forEach(section =>{

        let top = window.scrollY
        let offset = section.offsetTop - 100
        let height = section.offsetHeight
        let id = section.getAttribute("id")

        if (top >= offset && top <offset + height) {
            //active
            navLinks.forEach(navLink =>{

                navLink.classList.remove('active')
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active')
            })
            
            //active animate
            section.classList.add('show-animate')
        }else{
            section.classList.remove('show-animate')
        }
    })

    //Sticky header
    let header = document.querySelector('.header')
    header.classList.toggle('sticky', window.scrollY > 100)

    //Click on links
    menuIcon.classList.remove('fa-close')
    navbar.classList.remove('active')

    //Animation footer
    let footer = document.querySelector('footer')
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight)
}



















