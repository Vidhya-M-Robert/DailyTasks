const Userlist = document.getElementById("UserList") as HTMLUListElement;
const parId = document.getElementById("output") as HTMLParagraphElement
let lim: number = 10;
let pageNo: number = 1;
async function fetchUserPost(){
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_pageNo=${pageNo}&_limit=${lim}`);
    const res = await response.json();
    console.log(res);
    res.forEach((data: { title: string | null; body: string | null; }) => {
        const li = document.createElement("li");
        li.style = "display: grid;padding:20px;border:1px solid black;"
        const title = document.createElement("h4");
        title.textContent = data.title;
        li.appendChild(title);
        const body = document.createElement("p");
        body.textContent = data.body;
        li.appendChild(body);
        Userlist.appendChild(li);
     })
  }
  catch(err){
        console.error(err);
    }
}
fetchUserPost();

document.addEventListener("scrollend", (e) =>{
    pageNo++;
    fetchUserPost();
    parId.style.visibility = "visible";
})