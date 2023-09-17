import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase ,ref , push ,onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://addtocart-db-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListDb =ref(database,"shoppingList")

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const shoppingListEl = document.getElementById("shopping-list");

onValue(shoppingListDb,(snapshot)=>{
let listArray=Object.values(snapshot.val())
clearList()
for(let i=0;i<listArray.length;i++){
    console.log(listArray[i]);
    
    appendList(listArray[i])
}

})


addButtonEl.addEventListener("click", function () {
  let inputValue = inputFieldEl.value;

 push(shoppingListDb,inputValue);

    clear()
    
});
function clearList(){
    shoppingListEl.innerHTML=""
}
 function clear(){
    inputFieldEl.value = "";
 }
 function appendList(itemName){

shoppingListEl.innerHTML += `<li>${itemName}</li>`;
 }