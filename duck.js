// click the duck something happens

const synth = window.speechSynthesis;

const duck = document.getElementById("duck");

const thingsDuckCouldSay = [
  "Interesting...",
  "Go on...",
  "Hmmm",
  "I see what you are saying...",
  "Feed me bread",
  "I'm not following you there.",
  "Can you back up a step",
  "Have you tried rewriting it in Rust?",
];

duck.addEventListener("click", function () {
  const index = Math.floor(Math.random() * thingsDuckCouldSay.length);
  const saying = thingsDuckCouldSay[index];
  const utterance = new SpeechSynthesisUtterance(saying);
  synth.speak(utterance);
});
