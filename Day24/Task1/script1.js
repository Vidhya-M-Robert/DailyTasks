const userList = document.getElementById("UserList");
const pId = document.getElementById("output")
let limit = 10;
let page = 1;
async function fetchUserPost(page=1){
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
    const res = await response.json();
    console.log(res);
    res.forEach((data) => {
        const li = document.createElement("li");
        li.style = "display: grid;padding:20px;border:2px solid black;"
        const title = document.createElement("h4");
        title.textContent = data.title;
        li.appendChild(title);
        const body = document.createElement("p");
        body.textContent = data.body;
        li.appendChild(body);
        userList.appendChild(li);
     })
  }
  catch(err){
        console.error(err);
    }
}
fetchUserPost();

document.addEventListener("scrollend", (e) =>{
    page++;
    fetchUserPost(page);
    pId.style.visibility = "visible";
})