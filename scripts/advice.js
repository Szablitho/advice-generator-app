const adviceCard = document.querySelector(".advice");
const adviceIDel = document.querySelector("#advice-id");
const diceEl = document.querySelector("#dice-background");

async function getAdvice() {
  const response = await fetch('https://api.adviceslip.com/advice');
  const advice = await response.json();

  if(!advice) {
    return alert("Something went wrong"); //do alternative message within an advice card
  }
  // update advice card with response from ADVICE SLIP API
  console.log(advice);
  adviceIDel.textContent = advice.slip.id;
  adviceCard.textContent = advice.slip.advice;
}
diceEl.addEventListener("click",getAdvice);
