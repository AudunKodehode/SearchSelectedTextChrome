const searchEngine = "https://www.google.com/search?q=";
let keyBind = "Q";
let alternativeKey = keyBind.toLowerCase();
const toggleButton = document.getElementById("toggleDiv");
const saveSettingsButton = document.getElementById("saveSettingsButton");
const modifierInput = document.getElementById("modifierInput");
const keyInput = document.getElementById("keyInput");
let toggleValue = true;

function setToggle() {
  if (toggleValue) {
    toggleButton.className = "toggle on";
  } else {
    toggleButton.className = "toggle off";
  }
}

function toggleFunction() {
  toggleValue = !toggleValue;
  setToggle();
  // Save the toggle state here
  document.cookie = "toggleState=" + (toggleValue ? "1" : "0");
  console.log(`togglevalue: ${toggleValue}`);
}

function saveSettings() {
  let textvalue = keyInput.value[0];
  textvalue = textvalue.toUpperCase();
  keyInput.value = textvalue;
  keyBind = textvalue;
  alternativeKey = keyBind.toLowerCase();
  // Save key binding and alternative key
  document.cookie = "keyBind=" + keyBind;
  document.cookie = "alternativeKey=" + alternativeKey;
  
  // Save the toggle state as well
  document.cookie = "toggleState=" + (toggleValue ? "1" : "0");

  setEventListener(keyBind, alternativeKey);
}

function setEventListener(keyBind, alternativeKeyBind) {
  document.removeEventListener("keydown", keydownHandler); // Remove the previous listener
  console.log(
    `adding event listener with keys: ${modifierInput.value} + ${keyBind} / ${alternativeKeyBind}`
  );

  document.addEventListener("keydown", keydownHandler);
}

function keydownHandler(event) {
  if (toggleValue) {
    if ((event.key === keyBind || event.key === alternativeKey) && modifierCheck()) {
        searchFunction();
    }
  }
}
function searchFunction(){
    let search = window.getSelection().toString();
    if (search !== "") {
      search = search.replace(" ", "+"); // Fix: Replace spaces with '+' for the google search url
      window.open(searchEngine + search, "_blank");
    }
}
function modifierCheck() {
  if (modifierInput.value === "ctrl") {
    return event.ctrlKey;
  } else if (modifierInput.value === "shift") {
    return event.shiftKey;
  } else if (modifierInput.value === "alt") {
    return event.altKey;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setToggle();
  toggleButton.addEventListener("click", toggleFunction);
  saveSettingsButton.addEventListener("click", saveSettings);

  // Load settings from cookies
  if (document.cookie.length > 0) {
    const cookieData = document.cookie.split(";").map(cookie => cookie.trim());
    cookieData.forEach(cookie => {
      if (cookie.startsWith("keyBind=")) {
        keyBind = cookie.split("=")[1];
        keyInput.value = keyBind;
        alternativeKey = keyBind.toLowerCase();
      } else if (cookie.startsWith("toggleState=")) {
        toggleValue = cookie.split("=")[1] === "1";
        setToggle();
      }
    });
  }

  // Set the initial event listener
  setEventListener(keyBind, alternativeKey);
});
