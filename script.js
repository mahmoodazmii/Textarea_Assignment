const textArea = document.getElementById("text-area");
const undoBtn = document.getElementById("undo-btn");
const redoBtn = document.getElementById("redo-btn");
const addTextBtn = document.getElementById("add-text-btn");
const moveTextBtn = document.getElementById("move-text-btn");
const changeFontBtn = document.getElementById("change-font-btn");
const changeSizeBtn = document.getElementById("change-size-btn");
const changeStyleBtn = document.getElementById("change-style-btn");
const fontSizeSelect = document.getElementById("font-size-select");
const fontStyleSelect = document.getElementById("font-style-select");

let textHistory = [];
let currentIndex = -1;

addTextBtn.addEventListener("click", () => {
  const newText = prompt("Enter the text you want to add:");
  if (newText) {
    textArea.value += newText;
    updateHistory();
  }
});

moveTextBtn.addEventListener("click", () => {
  const newText = prompt("Enter the new text:");
  if (newText) {
    textArea.value = newText;
    updateHistory();
  }
});

changeFontBtn.addEventListener("click", () => {
  const newFont = prompt("Enter the new font family:");
  if (newFont) {
    textArea.style.fontFamily = newFont;
    updateHistory();
  }
});

changeSizeBtn.addEventListener("click", () => {
  const newSize = fontSizeSelect.value;
  if (newSize) {
    textArea.style.fontSize = newSize + "px";
    updateHistory();
  }
});

changeStyleBtn.addEventListener("click", () => {
  const newStyle = fontStyleSelect.value;
  if (newStyle) {
    textArea.style.fontStyle = newStyle;
    updateHistory();
  }
});

undoBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    textArea.value = textHistory[currentIndex];
  }
});

redoBtn.addEventListener("click", () => {
  if (currentIndex < textHistory.length - 1) {
    currentIndex++;
    textArea.value = textHistory[currentIndex];
  }
});

function updateHistory() {
  textHistory = textHistory.slice(0, currentIndex + 1);
  textHistory.push(textArea.value);
  currentIndex++;
}

textArea.addEventListener("input", updateHistory);
