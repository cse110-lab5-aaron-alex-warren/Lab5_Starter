// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const select = document.getElementById("horn-select");
  const img = document.querySelector("img");
  const aud = document.querySelector("audio");
  const button = document.querySelector("button");
  const volume = document.getElementById("volume");

  const volElement = document.querySelector('#volume-controls img');

  const jsConfetti = new JSConfetti();

  select.addEventListener("change", () => {
    let selected= select.value;

    if (selected == "air-horn"){
      img.setAttribute("src", "assets/images/air-horn.svg");
      aud.setAttribute("src", "assets/audio/air-horn.mp3");
    }
    else if (selected == "car-horn"){
      img.setAttribute("src", "assets/images/car-horn.svg");
      aud.setAttribute("src", "assets/audio/car-horn.mp3");
    }
    else if (selected == "party-horn"){
      img.setAttribute("src", "assets/images/party-horn.svg");
      aud.setAttribute("src", "assets/audio/party-horn.mp3");
    }
    else {
      img.setAttribute("src", "assets/images/no-image.png");
    }
  })

  volume.addEventListener("input", () => {
    let loudness = Number(volume.value);

    aud.volume = loudness/100;

    if (loudness == 0){
      volElement.setAttribute("src", "assets/icons/volume-level-0.svg");
    }
    else if (loudness >= 1 && loudness < 33){
      volElement.setAttribute("src", "assets/icons/volume-level-1.svg");
    }
    else if (loudness >= 33 && loudness < 67){
      volElement.setAttribute("src", "assets/icons/volume-level-2.svg");
    }
    else if (loudness >= 67){
      volElement.setAttribute("src", "assets/icons/volume-level-3.svg");
    }
  });


  button.addEventListener("click", () => {
    if (select.value == "party-horn"){
      jsConfetti.addConfetti();
    }
    aud.play();
  })

}