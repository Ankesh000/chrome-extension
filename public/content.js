/* eslint-disable no-undef */
// content.js

//=============================================== Image Icon ==========================================================//

const iconURL = chrome.runtime.getURL("/right.png");
console.log("iconURL:", iconURL);
const iconImage = document.createElement("img");
iconImage.src = iconURL;
iconImage.style.position = "fixed";
iconImage.style.bottom = "60px";
iconImage.style.right = "30px";
iconImage.style.width = "50px";
iconImage.style.height = "50px";
iconImage.style.zIndex = "9999";
iconImage.style.cursor = "pointer";
document.body.appendChild(iconImage);


let customPopup = null;

iconImage.addEventListener("click", () => {
  if (!customPopup) {
    customPopup = document.createElement("iframe");
    customPopup.src = chrome.runtime.getURL("index.html");
    customPopup.style.position = "fixed";
    customPopup.style.top = "50px";
    customPopup.style.right = "30px";
    customPopup.style.width = "400px";
    customPopup.style.height = "500px";
    customPopup.style.border = "none";
    customPopup.style.zIndex = "99999";

    document.body.appendChild(customPopup);
  } else {
    customPopup.style.display =
      customPopup.style.display === "none" ? "block" : "none";
  }
});

let offsetX, offsetY;

iconImage.addEventListener("dragstart", (e) => {
  console.log("Icon dragged start", e);
  offsetX = e.clientX - iconImage.getBoundingClientRect().left;
  offsetY = e.clientY - iconImage.getBoundingClientRect().top;
  const dragImage = new Image();
  dragImage.src = "/right.png";
  e.dataTransfer.setDragImage(dragImage, offsetX, offsetY);
});

iconImage.addEventListener("drag", (e) => {
  iconImage.style.top = e.clientY - offsetY + "px";
  iconImage.style.left = e.clientX - offsetX + "px";
  // Calculate the top, right, bottom, and left positions
  const top = e.clientY - offsetY;
  const left = e.clientX - offsetX;
  const right = left + iconImage.offsetWidth;
  const bottom = top + iconImage.offsetHeight;

  // Store the icon's position and dimensions in localStorage
  localStorage.setItem(
    "iconPosition",
    JSON.stringify({ top, right, bottom, left })
  );
});

document.addEventListener("dragover", (e) => {
  console.log("Icon dragged", e);
  e.preventDefault();
});

// When restoring the icon's position from localStorage
const storedPosition = localStorage.getItem("iconPosition");
if (storedPosition) {
  const { top, right, bottom, left } = JSON.parse(storedPosition);

  // Calculate the width and height
  const width = right - left;
  const height = bottom - top;

  // Apply the saved positions to the icon's inset style
  iconImage.style.inset = `${top}px ${right}px ${bottom}px ${left}px`;

  // Set the icon's width and height
  iconImage.style.width = width + "px";
  iconImage.style.height = height + "px";
}
