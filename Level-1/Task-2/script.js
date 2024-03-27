var typingEffect = new Typed(".typedText", {
    strings: ["Web Developer", "Network Engineer", "Graphics Designer"],
    loop:true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
});

//dark Mode

let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
} else {
    darkmode.classList.replace('bx-sun', 'bx-moon');
    document.body.classList.remove('active');
}
}

const sr = ScrollReveal ({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true,
    });

sr.reveal('.social_icons', {});
sr.reveal('.featured-name', {delay: 200});
sr.reveal('.hello', {delay: 200});
sr.reveal('.featured-text-info', {delay: 200});
sr.reveal('.featured-image', {delay: 200});
sr.reveal('.heading', {delay: 200});
sr.reveal('.services-content', {interval: 200});

//about animation

const srLeft = ScrollReveal ({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true,
    });

srLeft.reveal('.about-content', {delay: 200});
srLeft.reveal('.contact-form', {delay: 200});

//skills animation

const srRight = ScrollReveal ({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true,
    });

    srLeft.reveal('.portfolio-content', {delay: 200});
    srLeft.reveal('.skill', {delay: 100});


// JavaScript for toggling project description visibility
document.querySelectorAll('.project-img').forEach(project => {
    project.addEventListener('mouseenter', () => {
        project.querySelector('p').style.opacity = '1';
    });

    project.addEventListener('mouseleave', () => {
        project.querySelector('p').style.opacity = '0';
    });
});
