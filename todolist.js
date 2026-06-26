function addtask() {
  var hobbyInput = document.getElementById("todo").value;

  if (hobbyInput.trim() !== "") {
    const newLI = document.createElement("li");
    newLI.innerText = hobbyInput + " ";
    document.getElementById("lst").appendChild(newLI);
    document.getElementById("todo").value = "";

    var delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.onclick = function () {
      newLI.remove();
    };
    newLI.appendChild(delbtn);

    var compbtn = document.createElement("button");
    compbtn.innerText = "completed";
    compbtn.onclick = function () {
      newLI.style.color = "blue";
    };
    newLI.appendChild(compbtn);
  }
}

document.getElementById("todo").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addtask();
  }
});
