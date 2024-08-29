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

function display_error() {
    // Create a container for the GIF
    let existingGifContainer = document.querySelector('.error-gif-container');
    if (existingGifContainer) {
        // If it exists, remove it from the DOM
        document.body.removeChild(existingGifContainer);
    }
    const gifContainer = document.createElement("div");
    gifContainer.className = 'error-gif-container'; // Add a class for easy reference
    gifContainer.style.textAlign = "center";
    gifContainer.style.margin = "20px";
    gifContainer.style.position = "fixed"; // Make sure it's visible
    gifContainer.style.top = "50%"; // Center vertically
    gifContainer.style.left = "50%"; // Center horizontally
    gifContainer.style.transform = "translate(-50%, -50%)"; // Center the container
    gifContainer.style.zIndex = "1000"; // Ensure it appears on top

    // Create the GIF element
    const gifImg = document.createElement("img");
    gifImg.src = "images/orangu_error_no_input.gif"; // Replace with your GIF URL
    gifImg.alt = "Error GIF";
    gifImg.style.maxWidth = "100%";
    gifImg.style.height = "auto";
    gifContainer.appendChild(gifImg);

    // Create an error message element
    const errorMessage = document.createElement("div");
    errorMessage.style.color = "red";
    errorMessage.style.textAlign = "center";
    errorMessage.textContent = "An error occurred!";
    gifContainer.appendChild(errorMessage);

    // Append the GIF container to the body
    document.body.appendChild(gifContainer);

    // Hide and remove the GIF container after 2.5 seconds
    setTimeout(() => {
        document.body.removeChild(gifContainer);
    }, 7000);
}



const listElement = document.getElementById("myList");
function addItem(newlistItem) {
    if (typeof newlistItem === 'string' && newlistItem.trim() !== "") {
        const textNode = document.createElement("text");
        textNode.textContent = newlistItem;
        textNode.style.marginLeft = "10px"; // Margin around the text
        textNode.style.marginRight = "10px"; // Margin around the text


        // li.className = 'list-item';
        // This section is for the delete button behavior
        const deleteButton = document.createElement("button");    //Creates a button element in html
        deleteButton.textContent = "Remove Task";                 //Makes the text in html(the id) named Remove Task
        deleteButton.style.background = "red";
        // deleteButton.style.margin = "20px";                    //Sets the styling/margin
        deleteButton.style.justifyContent = "flex-end";
        // deleteButton.style.display = "flex"
        // deleteButton.justifyContent = "center"

        //determines what happens when you click on the button itself
        deleteButton.addEventListener("click", function () {
            li.classList.add('fade-out'); // Add fade-out class for animation

            // Wait for the transition to complete before removing the element
            li.addEventListener('transitionend', function () {
                listElement.removeChild(li);
            }, { once: true });
        });


        // This section is for the "Task completed section"
        const taskCompleted = document.createElement("button"); 
        taskCompleted.textContent = "Not Done";
        taskCompleted.style.background = "orange";
        taskCompleted.style.color = "white";
        taskCompleted.classList.add("completed-status");
        // deleteButton.style.margin = "20px";                           //Sets the styling/margin
        deleteButton.style.justifyContent = "flex-end";

        
        // Defines the images for checked and unchecked circles
        const taskUnfinished = "images/checkbox-blank-circle-line.svg"
        const taskFinished = "images/checkbox-circle-line.svg"
        // Creates a new li id for the state of task completion
        const taskCompletionState = document.createElement('img')
        taskCompletionState.src = taskUnfinished
        taskCompletionState.alt = "Unchecked Circle"
        taskCompletionState.style.width = '32px'; // Adjust size as needed
        taskCompletionState.style.height = '32px'; // Adjust size as needed
       


            taskCompletionState.addEventListener("click", function () {
                if (taskCompletionState.src.includes(taskUnfinished)) {
                    taskCompletionState.src = taskFinished;
                    textNode.style.textDecoration = "line-through"; // Add strikethrough
                    taskCompleted.textContent = "Completed";
                    taskCompleted.style.background = "lightgreen";
            }
                 else {
                    taskCompletionState.src = taskUnfinished; // If task was marked as finished, then mark it to unfinished when button is pressed
                    taskCompletionState.alt = "Unchecked Circle"
                    textNode.style.textDecoration = "none"; // Add strikethrough
                    taskCompleted.textContent = "Not Done";
                    taskCompleted.style.background = "orange";
                 }
                }
        )

            // li.textContent = newlistItem;                                   // Set the text content to the new item


        // Create a new <li> element
        const li = document.createElement('li');
        li.className = "row";

        li.appendChild(taskCompletionState)
        li.appendChild(textNode);            // Then the text
        li.appendChild(taskCompleted);
        li.appendChild(deleteButton);
        listElement.appendChild(li); // Append the <li> to the <ul>
        // requestAnimationFrame(() => {
        //     li.classList.add('added');
        // });

    } else {
        console.error("Invalid item: must be a non-empty string.");
        display_error() 
    }
}

function addItemFromHTML() {
    const newlistItem = document.getElementById("newTask").value;
    addItem(newlistItem);
    document.getElementById("newTask").value = ""; // Clear the input field
}