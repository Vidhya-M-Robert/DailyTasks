const input = document.getElementById("inputt");
const tbody = document.getElementById("bodyId");
const output = [];


input.addEventListener("keydown", (e) => {
    const out = {
        key: e.key,
        code: e.code,
        time: e.timeStamp,
    };
    
    output.push(out); 

    if (output.length > 10) output.shift();
    console.log(output);

    displayTable();
});

function displayTable() {
    input.value = "";
    tbody.innerHTML = "";           
    output.forEach(out => {          
    const row = `<tr>
        <td>${out.key}</td>
        <td>${out.code}</td>
        <td>${out.time}</td>
      </tr>`;
    tbody.innerHTML += row;      
  });
}
