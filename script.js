const listElement = document.getElementById("myList");


function addItem(newItem) {
    if (typeof newItem === 'string' && newItem.trim() !== "") {
        const li = document.createElement("li"); // Create a new <li> element
        li.textContent = newItem; // Set the text content to the new item
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Remove Task";
        deleteButton.style.margin = "20px";
        deleteButton.addEventListener("click", function () {
            listElement.removeChild(li);
        });
        const itemCompleted = document.createElement("button");
        itemCompleted.textContent = "Item Completed";
        itemCompleted.style.background = "yellow";
        itemCompleted.addEventListener("click", function () {
            li.addEventListener("click", function () {
                if (li.style.textDecoration === "line-through") {
                    li.style.textDecoration = "none"; // Remove strikethrough
                } else {
                    li.style.textDecoration = "line-through"; // Add strikethrough
                }
            });
        })
        listElement.appendChild(li); // Append the <li> to the <ul>
        li.appendChild(itemCompleted);
        li.appendChild(deleteButton);
    } else {
        console.error("Invalid item: must be a non-empty string.");
    }
}

function addItemFromHTML() {
    const newItem = document.getElementById("newItem").value;
    addItem(newItem);
    document.getElementById("newItem").value = ""; // Clear the input field
}