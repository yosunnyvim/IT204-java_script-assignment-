let rowCount = 0;

const nameInput   = document.getElementById('inputName');
const roleInput   = document.getElementById('inputRole');
const statusInput = document.getElementById('inputStatus');
const tableBody   = document.getElementById('tableBody');
const errorMsg    = document.getElementById('errorMsg');
const addBtn      = document.getElementById('addBtn');

addBtn.addEventListener('click', addRow);

function addRow() {
  const name   = nameInput.value.trim();
  const role   = roleInput.value.trim();
  const status = statusInput.value;

  if (name === '' || role === '') {
    errorMsg.textContent = 'Please fill in both Name and Role.';
    return;
  }

  errorMsg.textContent = '';
  rowCount++;

  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${rowCount}</td>
    <td>${name}</td>
    <td>${role}</td>
    <td class="${status.toLowerCase()}">${status}</td>
    <td><button class="delete-btn" onclick="deleteRow(this)">Delete</button></td>
  `;

  tableBody.appendChild(row);

  nameInput.value = '';
  roleInput.value = '';
  statusInput.value = 'Active';
  nameInput.focus();
}

function deleteRow(button) {
  const row = button.parentElement.parentElement;
  row.remove();
}
