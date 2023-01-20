"use strict";

import {
  cardsToDisplay,
  toDoColumns,
  backlogColumn,
  processColumn,
  DoneColumn,
} from "./items.js";

console.log(cardsToDisplay);

const backlogTask = document.querySelector(".content-block-1");
const toDoTask = document.querySelector(".content-block-2");
const PregressTask = document.querySelector(".content-block-3");
const DoneTask = document.querySelector(".content-block-4");
let cardContainer = document.querySelectorAll(".cards-container");

console.log(cardContainer);
const collapsButton = document.querySelector("#collaps");
const sidebarText = document.querySelectorAll("#sidebar-text");

let card = document.createElement("div");

cardsToDisplay.forEach((element) => {
  // card.classList.add("cards");

  //card making
  card = `
  <div class="cards">
        <div class="card-image">
            <img
            src="./imges/${element.imgSrc}.png"
            alt="monday workout routine"
            />
        </div>
        <div class="br"></div>
        <div class="card-text-container">
            <p class="card-title">${element.cardTitle}</p>
            <p class="card-text-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Natus debitis assumenda fuga, enim repellendus repudiandae
            </p>
        </div>
        <div class="card-cta-group">
            <div class="card-btn-group">
            <button class="card-cta-btn">Recovery</button
            ><button class="card-cta-btn">Diet</button>
            </div>
            <img
            src="./icons/user_icon.png"
            alt="user icon"
            class="card-icons"
            />
        </div>
    </div>
    `;
  for (let i = 0; i < cardContainer.length; i++) {
    // console.log(cardsToDisplay[i]);
    if (cardContainer[i].classList.contains(`${element.class}`)) {
      cardContainer[i].innerHTML += card;
    }
  }
  //   console.log(element);
});

collapsButton.addEventListener("click", function () {
  sidebarText.forEach((element) => {
    element.classList.toggle("hidden");
  });
});
