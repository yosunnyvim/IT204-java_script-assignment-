let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

function save() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function render() {
  taskList.innerHTML = '';

  tasks.forEach(function(task) {
    const li = document.createElement('li');
    li.className = 'task-item' + (task.done ? ' done' : '');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.done;
    checkbox.addEventListener('change', function() {
      task.done = checkbox.checked;
      save();
      render();
    });

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = task.text;

    const editBtn = document.createElement('button');
    editBtn.className = 'btn-edit';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', function() {
      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'edit-input';
      input.value = task.text;
      li.replaceChild(input, span);
      input.focus();

      function commit() {
        const val = input.value.trim();
        if (val) task.text = val;
        save();
        render();
      }

      input.addEventListener('blur', commit);
      input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') input.blur();
        if (e.key === 'Escape') render();
      });
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn-delete';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
      tasks = tasks.filter(function(t) { return t.id !== task.id; });
      save();
      render();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;
  tasks.unshift({ id: Date.now(), text: text, done: false });
  taskInput.value = '';
  save();
  render();
}

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') addTask();
});

render();
