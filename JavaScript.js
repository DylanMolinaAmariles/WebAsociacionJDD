function toggleMenu() {
    var nav = document.getElementById('nav');
    nav.style.display = (nav.style.display === 'block') ? 'none' : 'block';
}



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



