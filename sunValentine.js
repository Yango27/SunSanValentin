document.addEventListener('DOMContentLoaded', function() {
    const NoBoton = document.getElementById("No");
    const YesBoton = document.getElementById("Yes");
    const Title = document.getElementById("title");
    const music = document.getElementById("song");
    const musicCard = document.getElementById("music-card");
    const textoAmor = document.getElementById("textoAmor");

    NoBoton.addEventListener('click', function() {
        let tamañoActual = parseFloat(window.getComputedStyle(YesBoton).fontSize);
        YesBoton.style.fontSize = (tamañoActual + 50) + 'px';
    });
    YesBoton.addEventListener("click", function(){
        document.body.classList.add("hidden-bg");
        document.body.classList.add("gifYes");
        this.style.display = "none";
        NoBoton.style.display = "none";
        Title.style.display = "none";
        music.play();
        music.volume = 0.2;
        musicCard.style.display = "block";
        textoAmor.style.display = "block";
    })
});

