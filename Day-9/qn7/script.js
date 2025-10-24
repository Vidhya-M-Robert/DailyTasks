const userList = document.getElementById("user");

async function getData(){
    try{
        const data1 = await fetch("https://jsonplaceholder.typicode.com/posts");
        const res = await data1.json();
        console.log(res);

        const data2 = await fetch(" https://jsonplaceholder.typicode.com/users");
        const response = await data2.json();
        console.log(response);

        response.forEach((data1) => {
            if(res.userId === response.id){
                res.forEach((data) => {
                    const li = document.createElement("li");
                    li.style = "display: grid; grid-template-column: auto;padding:20px;border:2px solid black;"
                    const name = document.createElement("h2");
                    name.textContent = data1.name;
                    li.appendChild(name);
                    const email = document.createElement("h3");
                    email.textContent = data1.email;
                    li.appendChild(email);
                    const title = document.createElement("h4");
                    title.textContent = data.title;
                    li.appendChild(title);
                    const body = document.createElement("p");
                    body.textContent = data.body;
                    li.appendChild(body);
                    userList.appendChild(li);
                })
            }
        })
    }
    catch(err){
        console.error(err);
    }
}
getData();