document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("newTask");
    const addButton = document.getElementById("addTaskButton");

    // Add event listener for the Enter key
    inputField.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addButton.click(); // Simulate a click on the "Add Task" button
        }
    });
});

const listElement = document.getElementById("myList");
function addItem(newlistItem) {
    if (typeof newlistItem === 'string' && newlistItem.trim() !== "") {
        const textNode = document.createTextNode(newlistItem);
        const li = document.createElement("li");                         // Create a new <li> element
        // This section is for the delete button behavior
        const deleteButton = document.createElement("button");          //Creates a button element in html
        deleteButton.textContent = "Remove Task";                      //Makes the text in html(the id) named Remove Task
        deleteButton.style.background = "red"
        deleteButton.style.margin = "20px";                           //Sets the styling/margin
        //determines what happens when you click on the button itself
        deleteButton.addEventListener("click", function () {
            listElement.removeChild(li);
        });
        // This section is for the "Task completed section"
        const taskCompleted = document.createElement("button"); 
        taskCompleted.textContent = "Task Completed";
        taskCompleted.style.background = "lightblue";
        // Defines the images for checked and unchecked circles
        const taskUnfinished = "images/checkbox-blank-circle-line.svg"
        const taskFinished = "images/checkbox-circle-line.svg"
        // Creates a new li id for the state of task completion
        const taskCompletionState = document.createElement('img')
        taskCompletionState.src = taskUnfinished
        taskCompletionState.alt = "Unchecked Circle"
        taskCompletionState.style.width = '32px'; // Adjust size as needed
        taskCompletionState.style.height = '32px'; // Adjust size as needed
        taskCompleted.addEventListener("click", function () {
                if (taskCompletionState.src.includes(taskUnfinished)) {
                    taskCompletionState.src = taskFinished; // If task was not in a finished state, upon clicking the button, change it to finished
                    taskCompletionState.alt = "Checked Circle"
                } else {
                    taskCompletionState.src = taskUnfinished; // If task was marked as finished, then mark it to unfinished when button is pressed
                    taskCompletionState.alt = "Unchecked Circle"
                }
            });
            // li.textContent = newlistItem;                                   // Set the text content to the new item

        li.appendChild(taskCompletionState)
        li.appendChild(textNode);            // Then the text
        li.appendChild(taskCompleted);
        li.appendChild(deleteButton);
        listElement.appendChild(li); // Append the <li> to the <ul>
    } else {
        console.error("Invalid item: must be a non-empty string.");
    }
}

function addItemFromHTML() {
    const newlistItem = document.getElementById("newTask").value;
    addItem(newlistItem);
    document.getElementById("newTask").value = ""; // Clear the input field
}