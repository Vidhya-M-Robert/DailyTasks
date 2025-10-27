const input = document.getElementById("itemInput") as HTMLInputElement;  //In js getElementById returns an HTMLElement | null.
const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
const list = document.getElementById("list") as HTMLUListElement;
const toggleBtn = document.getElementById("toggleBtn") as HTMLButtonElement;
// In TypeScript use type assertions (as HTMLInputElement) to tell TypeScript the exact type.

type TodoItem = {
    name: string;
    done: boolean;
}

let showOnlyPending: boolean = false;
let items: TodoItem[] = JSON.parse(localStorage.getItem("todoItems") || "[]");  //holds the list of todos that's why TodoItem[]   ///parse converts string to array
//Display todos on screen
function renderList(): void{
    list.innerHTML = "";
    const displayItems = showOnlyPending ? items.filter((item) => !item.done) : items;
    displayItems.forEach((item, index) =>{
        const li = document.createElement("li");
        li.textContent = item.name;

        if(item.done) li.style.textDecoration = "line-through";

        li.addEventListener("click", ()=>toggleDone(index));
        list.appendChild(li);
    });
}
// Adding a new item
function addItem(): void{
    const name = input.value.trim();
    if(name === "") return;

    items.push({name, done:false});
    input.value = "";
    saveAndRender();
}
// Toggling completion
function toggleDone(index: number): void {
  const item = items[index];
  if (!item) return; // if item is undefined, just return
  item.done = !item.done;
  saveAndRender();
}
//Saving and rendering together
function saveAndRender(): void{
    localStorage.setItem("todoItems", JSON.stringify(items));
    renderList();
}
//Show or hide completed tasks
toggleBtn.addEventListener("click", ()=>{
    showOnlyPending = !showOnlyPending;
    toggleBtn.textContent = showOnlyPending ? "Show All" : "Show Only Pending";
    renderList();
});

addBtn.addEventListener("click",addItem);
input.addEventListener("keypress", (e: KeyboardEvent) => {    //here explicit type KeyboardEvent -; ensures e.key is valid
    if(e.key === "Enter") addItem();
});
renderList()  //Ensures the the display of saved tasks when the page first loads.