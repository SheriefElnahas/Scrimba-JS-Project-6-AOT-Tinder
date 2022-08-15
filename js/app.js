import charactersArray from "./Character.js";

/**********************************************************************
                                Selecting Elements
************************************************************************/
const btnLike = document.querySelector(".like");
const btnDislike = document.querySelector(".dislike");
const cardLike = document.querySelector(".card-like");
const cardDislike = document.querySelector(".card-dislike");
/**********************************************************************
                                Helper Functions
************************************************************************/
let currentCharacterIndex = 0;

function init() {
  charactersArray[currentCharacterIndex].renderHtml();
}

function changeCharacter() {
  // Check if the array is out of range
  if (currentCharacterIndex < charactersArray.length - 1) {
    // Increment the index and render the next character.
    currentCharacterIndex++;
    charactersArray[currentCharacterIndex].renderHtml();
    // IF we reached the last element of the array
  } else {
    // Disable the buttons
    btnDislike.setAttribute("disabled", true);
    btnLike.setAttribute("disabled", true);

    // Add clicked class
    btnLike.classList.add("clicked");
    btnDislike.classList.add("clicked");
  }
}

function changeImg(buttonClicked) {
  if (buttonClicked === "Like") {
    // Highlight Like Button & Display Like Image
    btnLike.classList.add("clicked");
    cardLike.style.display = "block";
  } else {
    // Highlight Dislike Button & Display None Image
    btnDislike.classList.add("clicked");
    cardDislike.style.display = "block";
  }

  // Disable The Buttons
  btnDislike.setAttribute("disabled", true);
  btnLike.setAttribute("disabled", true);

  setTimeout(() => {
    // Hide Like & None Images
    cardLike.style.display = cardDislike.style.display = "none";

    // Remove Clicked Class ( highlight ) from both of buttons
    btnLike.classList.remove("clicked");
    btnDislike.classList.remove("clicked");

    // Enable Buttons Again
    btnLike.removeAttribute("disabled");
    btnDislike.removeAttribute("disabled");

    // Change To Next Character
    changeCharacter();
  }, 1000);
}

btnLike.addEventListener("click", () => {
  changeImg("Like");
});

btnDislike.addEventListener("click", () => {
  changeImg("Dislike");
});

init();
