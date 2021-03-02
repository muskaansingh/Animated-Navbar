const navbar = document.querySelector('.navbar');
const navlinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

navbar.addEventListener("click", () =>{
    navlinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle('fade')
    });
});