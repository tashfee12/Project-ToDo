let inputs = document.getElementById("inp");
let text = document.querySelector(".text");
let clearAllBtn = document.createElement("button");

// Set up the Clear All button
clearAllBtn.innerText = "Clear All";
clearAllBtn.id = "clearAll";
clearAllBtn.style.display = "block"; // Make sure it displays as a block for better layout
clearAllBtn.style.marginTop = "20px"; // Add some space above the button

// Append the Clear All button to the text container
text.appendChild(clearAllBtn);

// Add event listener to the Clear All button
clearAllBtn.addEventListener("click", clearAllTasks);

function Add() {
    if (inputs.value == "") {
        alert("Please Enter Task");
    } else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value = "";
        newEle.querySelector("i").addEventListener("click", remove);
        
        function remove() {
            newEle.remove();
        }
    }
}

function clearAllTasks() {
    text.innerHTML = ''; // Clear all tasks
    text.appendChild(clearAllBtn); // Re-append the Clear All button
}
