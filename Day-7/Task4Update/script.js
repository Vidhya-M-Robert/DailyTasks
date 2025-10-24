const input = document.getElementById("textInput");
const tbody = document.querySelector("#logTable tbody"); //tbody inside the element with id=logTable
const logs = [];

input.addEventListener("keydown", (e) => {
  //key is pressed down
  const time = new Date().toLocaleTimeString(); //creates a timestamp string representing the current time
  const log = {
    key: e.key,
    code: e.code,
    which: e.which,
    type: e.type,
    time,
  };

  logs.unshift(log); //adds new log at the start of the logs array

  // Keep only last 10 logs
  if (logs.length > 10) logs.pop(); //pop() removes the last eleemnt, so always keep the latest 10 logs with newest at index 0

  renderTable();
}); //closes the addEventListener callback.

// function renderTable() {
//   tbody.innerHTML = "";           //clears previous rows.
//   logs.forEach(log => {          // loops over each log
//     const row = `<tr>
//         <td>${log.key}</td>
//         <td>${log.code}</td>
//         <td>${log.which}</td>
//         <td>${log.type}</td>
//         <td>${log.time}</td>
//       </tr>`;
//     tbody.innerHTML += row;       //appends new row string to the tbody HTML
//   });
// }

function renderTable() {
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  logs.forEach((log) => {
    const tr = document.createElement("tr");
    const tdKey = document.createElement("td");
    tdKey.textContent = log.key;
    tr.appendChild(tdKey);

    const tdCode = document.createElement("td");
    tdCode.textContent = log.code;
    tr.appendChild(tdCode);

    const tdWhich = document.createElement("td");
    tdWhich.textContent = log.which;
    tr.appendChild(tdWhich);

    const tdType = document.createElement("td");
    tdType.textContent = log.type;
    tr.appendChild(tdType);

    const tdTime = document.createElement("td");
    tdTime.textContent = log.time;

    tbody.appendChild(tr);
  });
}

// const input = document.getElementById("textInput");

// input.addEventListener("keydown", (e) => {
//   console.log(e);

// });
