const adviceEl = document.querySelector(".advice");
const adviceCard = document.querySelector(".advice-card");
const adviceIDel = document.querySelector("#advice-id");
const diceEl = document.querySelector("#dice-background");
const dice = document.getElementById("dice");

async function getAdvice() {
  adviceEl.style.opacity = 0;
  adviceEl.style.fontSize = "0.5rem";
  adviceCard.children[0].style.opacity = 0;
  const response = await fetch('https://api.adviceslip.com/advice');
  const advice = await response.json();

  setTimeout(() => {
    adviceIDel.textContent = advice.slip.id;
    adviceEl.textContent = advice.slip.advice;
    adviceCard.children[0].style.opacity = 1;
    adviceEl.style.fontSize = 'initial';
    adviceEl.style.opacity = 1;
  }, 1000);

  if (!advice) {
    return alert("Something went wrong"); //do alternative message within an advice card
  }
  // update advice card with response from ADVICE SLIP API

}

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}
async function rotateDice() {
  dice.style.transform = "translateY(1.2rem) rotate(-2turn)"; // resetting state
  setTimeout(() => {
    dice.style.transform = "translateY(1.2rem) rotate(2turn)"; //animiation
  }, 2000);
  
  
}
diceEl.addEventListener("click", getAdvice);
diceEl.addEventListener("click", rotateDice);
// diceEl.addEventListener("click",fadeIn);
