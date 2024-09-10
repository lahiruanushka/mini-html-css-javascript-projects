let items = [];

const itemsDiv = document.getElementById("items");
const input = document.getElementById("itemInput");
const storageKey = "items";

function loadItems() {
  const oldItems = localStorage.getItem(storageKey);

  if (oldItems) items = JSON.parse(oldItems);
  renderItems();
}

function renderItems() {
  itemsDiv.innerHTML = null;

  for (const [index, item] of Object.entries(items)) {
    const container = document.createElement("div");
    container.style.marginBottom = "10px";
    const text = document.createElement("p");
    text.style.display = "inline";
    text.style.marginRight = "5px";
    text.textContent = item;

    const button = document.createElement("button");
    button.textContent = "Delete";
    button.onclick = () => removeItem(index);

    container.appendChild(text);
    container.appendChild(button);

    itemsDiv.appendChild(container);
  }
}

function saveItems() {
  const stringItems = JSON.stringify(items);
  localStorage.setItem(storageKey, stringItems);
}

function addItem() {
  const value = input.value;
  if (!value) {
    alert("You cannot add an empty item");
    return;
  }

  items.push(value);
  renderItems();
  input.value = "";
  saveItems();
}

function removeItem(index) {
  items.splice(index, 1);
  renderItems();
  saveItems();
}

document.addEventListener("DOMContentLoaded", loadItems);
