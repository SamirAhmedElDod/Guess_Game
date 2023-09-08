document.querySelector(".guest_return").addEventListener("click", function () {
  document.querySelector(".name_top").textContent =
    document.querySelector(".guest_name").value;
});

let randomNum = Math.trunc(Math.random() * 20) + 1;

/*
************************************************************
Selectors
************************************************************
*/
const selector1 = document.querySelector(".title");
const selector2 = document.querySelector(".edit");
const selector3 = document.querySelector(".header");
const selector4 = document.querySelector(".first_flex");
const selector5 = document.querySelector(".left");
const selector6 = document.querySelector(".cc");

let score = 20;
let score_Show = Number(
  (document.querySelector(".score_num").textContent = score)
);

document.querySelector(".check_box").addEventListener("click", function () {
  const num_value = Number(document.querySelector(".check_input").value);
  // console.log(randomNum, num_value);
  // const score = Number(document.querySelector(".score_num").textContent);

  if (num_value === randomNum) {
    console.log("يا سمير يا جامد");
    document.querySelector(".game_body").style.backgroundColor = "#5FC87F";
    document.querySelector(".container").style.backgroundColor = "#5FC87F";
    document.querySelector("body").style.backgroundColor = "#5FC87F";
    document.querySelector(".guess").textContent = "Correct Number";
    document.querySelector(".second_flex").textContent = randomNum;
  } else if (num_value !== randomNum) {
    if (num_value > randomNum) {
      document.querySelector(".guess").textContent = "High Number";
      score--;
      score_Show = score;
      document.querySelector(".score_num").textContent = score;
      if (score === 0) {
        // score = 0;
        document.querySelector(".score_num").textContent = "You Lost Try Again";
        document.querySelector(".check_box").style.visibility = "hidden";
        document.querySelector(".game_body").style.backgroundColor = "#8A0000";
        document.querySelector(".container").style.backgroundColor = "#8A0000";
        document.querySelector("body").style.backgroundColor = "#8A0000";
        selector1.style.color = "white";
        selector2.style.color = "white";
        selector3.style.color = "white";
        selector4.style.color = "white";
        selector5.style.color = "white";
        selector6.style.color = "white";
      }
    } else if (num_value < randomNum) {
      document.querySelector(".guess").textContent = "Low Number";
      score--;
      score_Show = score;
      Number((document.querySelector(".score_num").textContent = score));
      if (score === 0) {
        // score = 0;
        document.querySelector(".score_num").textContent = "You Lost Try Again";
        document.querySelector(".check_box").style.visibility = "hidden";
        document.querySelector(".game_body").style.backgroundColor = "#8A0000";
        document.querySelector(".container").style.backgroundColor = "#8A0000";
        document.querySelector("body").style.backgroundColor = "#8A0000";
        selector1.style.color = "white";
        selector2.style.color = "white";
        selector3.style.color = "white";
        selector4.style.color = "white";
        selector5.style.color = "white";
        selector6.style.color = "white";
      }
    }
  }

  if (num_value > 20 || num_value < 1) {
    document.querySelector(".guess").textContent = "Not Valid Number";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  randomNum = document.querySelector(".second_flex").textContent =
    Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".check_box").style.visibility = "visible";
  document.querySelector(".game_body").style.backgroundColor = "#FF94B0";
  document.querySelector(".container").style.backgroundColor = "#FF94B0";
  document.querySelector("body").style.backgroundColor = "#FF94B0";
  selector1.style.color = "#000000";
  selector2.style.color = "#000000";
  selector3.style.color = "#000000";
  selector4.style.color = "#000000";
  selector5.style.color = "#000000";
  selector6.style.color = "#000000";
  document.querySelector(".name_top").textContent = "";
  score = 20;
  document.querySelector(".score_num").textContent = 20;
  document.querySelector(".second_flex").textContent = "?"
});
