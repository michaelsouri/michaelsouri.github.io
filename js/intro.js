let header = document.querySelector("#intro");
let animation = [
  { t: " ", ms: 200 },
  { t: "_", ms: 200 },
  { t: " ", ms: 200 },
  { t: "_", ms: 200 },
  { t: "m_", ms: 200 },
  { t: "mi_", ms: 200 },
  { t: "mic_", ms: 200 },
  { t: "mich_", ms: 200 },
  { t: "micha_", ms: 200 },
  { t: "michae_", ms: 200 },
  { t: "michael_", ms: 200 },
  { t: "michael _", ms: 200 },
  { t: "michael s_", ms: 200 },
  { t: "michael so_", ms: 200 },
  { t: "michael sou_", ms: 200 },
  { t: "michael sour_", ms: 200 },
  { t: "michael souri_", ms: 200 },
  { t: "michael souri", ms: 200 },
  { t: "michael souri", ms: 300 },
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
  stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
  let step = animation[i];
  header.innerText = step.t;
  i++;

  if (i < animation.length) setTimeout(update, step.ms / stepDenominator);
  else {
    header.classList.add("top");
    setTimeout(() => {
      document.getElementById("main").style.opacity = 1;
    }, 500);
    window.localStorage.stepDenominator = 2;
  }
};
update();
