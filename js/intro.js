let header = document.querySelector("#intro");
let animation = [
  { t: " ", ms: 200 },
  { t: "_", ms: 200 },
  { t: " ", ms: 200 },
  { t: "_", ms: 200 },
  { t: "m_", ms: 100 },
  { t: "mi_", ms: 100 },
  { t: "mic_", ms: 100 },
  { t: "mich_", ms: 100 },
  { t: "micha_", ms: 100 },
  { t: "michae_", ms: 100 },
  { t: "michael_", ms: 100 },
  { t: "michael _", ms: 100 },
  { t: "michael s_", ms: 100 },
  { t: "michael so_", ms: 100 },
  { t: "michael sou_", ms: 100 },
  { t: "michael sour_", ms: 100 },
  { t: "michael souri_", ms: 100 },
  { t: "michael souri", ms: 200 },
  { t: "michael souri_", ms: 200 },
  { t: "michael souri", ms: 200 },
  { t: "michael souri", ms: 200 },
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
      initGlobe();
    }, 500);
    window.localStorage.stepDenominator = 2;
  }
};
update();
