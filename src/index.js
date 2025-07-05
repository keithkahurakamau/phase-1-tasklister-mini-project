document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // This code runs when the DOM is fully loaded
  // It initializes the task management functionality
  let form = document.getElementById("create-task-form");
  let taskInput = document.getElementById("new-task-description");
  let taskList = document.getElementById("tasks");

  // Add Task
  // This function handles the form submission to add a new task
  // It creates a new list item with the task description and a delete button
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    let taskText = taskInput.value.trim();
    if (taskText !== "") {
      let li = document.createElement("li");
      li.textContent = taskText;

      // Create delete button
      // This button allows the user to delete the task from the list
      // It adds an event listener to remove the task when clicked
      let deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.style.marginLeft = "20px";
      deleteBtn.addEventListener("click", function() {// This function removes the task item from the list when the delete button is clicked
        li.remove();
      });
      // Append the task item and delete button to the task list
      li.appendChild(deleteBtn);// This line appends the delete button to the task item
      // Append the task item to the task list
      taskList.appendChild(li);
      taskInput.value = "";// Clear the input field after adding the task
      
    }
  });
});
