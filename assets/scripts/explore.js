// explore.js

window.addEventListener('DOMContentLoaded', init);
const synth = window.speechSynthesis;

const button = document.querySelector("button");
const img = document.querySelector("img");
const voiceList = document.getElementById("voice-select");

const inputText = document.querySelector("textarea");

let voices = [];
let input = "";


function init() {

  // modified from linked demo
  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
        voices 
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceList.appendChild(option);
    }
  }

  populateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  inputText.addEventListener("change", ()=>{input = inputText.value})

  button.addEventListener("click", ()=> {
    const utterThis = new SpeechSynthesisUtterance(input);
    utterThis.voice = voices[voiceList.selectedIndex-1];

    synth.speak(utterThis);

    img.setAttribute("src", "assets/images/smiling-open.png");

    utterThis.onend = () => {
        img.setAttribute("src", "assets/images/smiling.png");
    };
  })




}