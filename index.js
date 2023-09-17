import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase ,ref , push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://addtocart-db-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListDb =ref(database,"shoppingList")

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");

addButtonEl.addEventListener("click", function () {
  let inputValue = inputFieldEl.value;

 push(shoppingListDb,inputValue);

  console.log(inputValue);
});
