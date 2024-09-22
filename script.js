const inputText = document.getElementById("task-todo");
const inputDate = document.getElementById("date-field");
const inputPriority = document.getElementById("priority");
const listContainer = document.getElementById("list-added");
const listContainerDone = document.getElementById("list-field-done-wrapper")
const deleteTaskButton = document.getElementById("deleteButton")

function submit() {
    if (inputText.value === '') {
        alert ("Tugas tidak boleh kosong");
    }
    else if (inputDate.value === '') {
        alert ("Masukkan tanggal");
    }
    else if (inputPriority.value === '') {
        alert ("Pilih prioritas tugas");
    }
    else {
      const li = document.createElement('li');
      li.classList.add("task-added")

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.classList.add('checkbox');

      const todoValue = document.createElement('p');
      todoValue.classList.add('list-todo-value');
      todoValue.textContent = inputText.value; 

      const dateValue = document.createElement('p');
      dateValue.classList.add('date-todo-value');
      dateValue.textContent = inputDate.value;

      const searchValue = document.createElement('p');
      searchValue.classList.add('search-todo-value');
      searchValue.textContent = inputPriority.value

      const deleteButton = document.createElement('img');
      deleteButton.classList.add('delete-task-button');
      deleteButton.src = './asset/icons8-delete.svg';
      deleteButton.alt = 'Delete task';

      li.appendChild(checkbox);
      li.appendChild(todoValue);
      li.appendChild(dateValue);
      li.appendChild(searchValue);
      li.appendChild(deleteButton);

      document.getElementById('list-added').appendChild(li);
  }
}

// FUNGSI HAPUS SEMUA TUGAS
deleteTaskButton.addEventListener('click', () => {
    // Remove all ul elements inside the wrapper
    const lists = listContainerDone.querySelectorAll('ul.list');
    lists.forEach(list => list.remove());
});

