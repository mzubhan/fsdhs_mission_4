const inputText = document.getElementById("task-todo");
const listContainer = document.getElementById("list-added");

function addTask() {
    if (inputText.value === '') {
        alert ("Tugas tidak boleh kosong");
    }
    else {
      // Create the li element
      const li = document.createElement('li');
      li.classList.add("task-added")

      // Create the checkbox input
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.classList.add('checkbox');

      // Create the list-todo-value paragraph
      const todoValue = document.createElement('p');
      todoValue.classList.add('list-todo-value');
      todoValue.textContent = 'Your task here';  // Change as needed

      // Create the date-todo-value paragraph
      const dateValue = document.createElement('p');
      dateValue.classList.add('date-todo-value');
      dateValue.textContent = '10/10/2023';  // Change as needed

      // Create the search-todo-value paragraph
      const searchValue = document.createElement('p');
      searchValue.classList.add('search-todo-value');
      searchValue.textContent = 'Mahal!';  // Change as needed

      // Create the delete task button image
      const deleteButton = document.createElement('img');
      deleteButton.classList.add('delete-task-button');
      deleteButton.src = './asset/icons8-delete.svg';
      deleteButton.alt = 'Delete task';

      // Append the elements to the li
      li.appendChild(checkbox);
      li.appendChild(todoValue);
      li.appendChild(dateValue);
      li.appendChild(searchValue);
      li.appendChild(deleteButton);

      // Append the li to the ul (todo-list)
      document.getElementById('todo-list').appendChild(li);
  }
}