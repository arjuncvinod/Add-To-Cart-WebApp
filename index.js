import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase ,ref , push ,onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

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
let listArray=Object.entries(snapshot.val())
clearList()

for(let i=0;i<listArray.length;i++){
    let currentItem=listArray[i]
    let currentItemId=currentItem[0]
    let currentItemValue=currentItem[1]

    
    appendList(currentItem)
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
 function appendList(item){
    let itemId=item[0]
    let itemValue=item[1]

let newEl= document.createElement("li")
newEl.textContent=itemValue
shoppingListEl.append(newEl)

newEl.addEventListener("click",()=>{

    console.log(itemId);
    let itemLocation = ref(database,`shoppingList/${itemId}`)
    remove(itemLocation)
})
 }