const userList = document.getElementById('user');

fetch('https://randomuser.me/api/?results=5')
.then(response => response.json())
.then(data =>{
  data.results.forEach(result => {
    const li = document.createElement('li');
    li.style.listStyleType === "none";
    const image = document.createElement('img');
    image.src = result.picture.large;
    li.appendChild(image);
    const name = document.createElement('div');
    name.textContent = `${result.name.title} ${result.name.first} ${result.name.last}`;
    li.appendChild(name);
    const email = document.createElement('div');
    email.textContent = result.email;   
    li.appendChild(email);
    userList.appendChild(li);
  });
})
