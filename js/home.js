function startInt() {
    var name = document.getElementById("name").value;
    window.location.href = "introduce.html?name=" + encodeURIComponent(name);
}

function playAudio() {
    var audio = document.getElementById("myAudio");
    audio.play();
    myAudio.volume = 0.3;
}