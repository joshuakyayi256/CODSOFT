var typingEffect = new Typed(".typedText", {
    Strings: ["Designer", "Developer", "Graphics Designer"],
    loop:true,
    typeSpeed: 100,
    backSpeed: 80,
    backSpeed: 2000,

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