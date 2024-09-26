const inputText = document.getElementById("task-field");
const inputDate = document.getElementById("date");
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

document.addEventListener('click', function(event) {

    if (event.target.classList.contains('delete-task-button')) {
        const parentLi = event.target.closest('li'); 
        if (parentLi) {
            parentLi.remove();
        }
    }
});

document.getElementById('done-button').addEventListener('click', function () {

    const tasks = document.querySelectorAll('#list-added .task-added');

    tasks.forEach(task => {
        const checkbox = task.querySelector('.checkbox');

        if (checkbox && checkbox.checked) {

            const taskClone = task.cloneNode(true); 

            const input = taskClone.querySelector('input[type="checkbox"]');
            const img = taskClone.querySelector('img.delete-task-button');
            if (input) input.remove();  
            if (img) img.remove();     

            const todoText = taskClone.querySelector('.list-todo-value');
            const dateText = taskClone.querySelector('.date-todo-value');
            const priorityText = taskClone.querySelector('.search-todo-value');
            
            if (todoText) todoText.classList.replace('list-todo-value', 'done-t');
            if (dateText) dateText.classList.replace('date-todo-value', 'done-date');
            if (priorityText) priorityText.classList.replace('search-todo-value', 'done-p');

            taskClone.classList.replace('task-added', 'done-task-add');

            document.getElementById('done-task-listed').appendChild(taskClone);

            task.remove();
        }
    });
});

document.getElementById('deleteButton').addEventListener('click', function () {
    document.getElementById('list-field-done-wrapper').innerHTML = '';
});

// FUNGSI HAPUS SEMUA TUGAS
deleteTaskButton.addEventListener('click', () => {

    const lists = listContainerDone.querySelectorAll('ul.list');
    lists.forEach(list => list.remove());
});

