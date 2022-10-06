import "./style.css";

const showTotalGeneral = document.querySelector("#total-general");
const showTotalTip = document.querySelector("#total-tip");
const resetButton = document.querySelector("#resetButton");
const billInput = document.querySelector("#bill") as HTMLInputElement;
const peopleInput = document.querySelector("#people") as HTMLInputElement;
const customInput = document.querySelector("#custom") as HTMLInputElement;
let billValue = 0;
let numberOfPeople = 0;
let tip = 0;
/* crear un array a partir de un NodeList */
let tipButtons = Array.from(document.querySelectorAll("button"));
tipButtons = tipButtons.slice(0, tipButtons.length - 1);

const total = (bill: number, tip: number, people: number) => {
  let totalGeneral = (bill + (bill * tip) / 100) / people;
  let totalTip = (bill * tip) / 100 / people;
  if (bill < 0 || tip < 0 || people < 0) {
    totalGeneral = 0;
    totalTip = 0;
  }
  if (
    isNaN(totalGeneral) ||
    totalGeneral === Infinity ||
    totalGeneral === -Infinity ||
    totalGeneral < 0
  ) {
    totalGeneral = 0;
  }
  if (
    isNaN(totalTip) ||
    totalTip === Infinity ||
    totalTip === -Infinity ||
    totalTip < 0
  ) {
    totalTip = 0;
  }
  showTotalGeneral!.innerHTML = `$${Number(totalGeneral.toFixed(2)).toLocaleString('en-US')}`;
  showTotalTip!.innerHTML = `$${Number(totalTip.toFixed(2)).toLocaleString('en-US')}`;
};

const removeSelectedTip = () => {
  tipButtons.forEach((b) => {
    b.classList.remove("selectedTip");
    b.classList.add("unselectedTip");
  });
};

billInput?.addEventListener("change", (e: any) => {
  billValue = Number(e.target.value);
  total(billValue, tip, numberOfPeople);
});

peopleInput?.addEventListener("change", (e: any) => {
  numberOfPeople = Number(e.target.value);
  total(billValue, tip, numberOfPeople);
});

customInput?.addEventListener("change", (e: any) => {
  tip = Number(e.target.value);
  removeSelectedTip();
  total(billValue, tip, numberOfPeople);
});

resetButton?.addEventListener("click", () => {
  showTotalGeneral!.innerHTML = `$0`;
  showTotalTip!.innerHTML = `$0`;
  peopleInput!.value = "";
  billInput!.value = "";
  customInput!.value = "";
  billValue = 0;
  numberOfPeople = 0;
  tip = 0;
  removeSelectedTip();
});

tipButtons.forEach((button) => {
  button.addEventListener("click", (e: any) => {
    tip = Number(e.target.value);
    if (tip < 0) return;
    customInput!.value = "";
    total(billValue, tip, numberOfPeople);
    removeSelectedTip();
    button.classList.remove("unselectedTip");
    button.classList.add("selectedTip");
  });
});
