// Selecting DOM Elements
const studentInput = document.getElementById('studentInput');
const addBtn = document.getElementById('addBtn');
const studentList = document.getElementById('studentList');
const errorMsg = document.getElementById('errorMsg');

// Function to Add Student
function addStudent() {
  const name = studentInput.value.trim();

  // Input Validation
  if (name === '') {
    errorMsg.textContent = 'Please enter a valid student name.';
    return;
  }

  // Clear previous error
  errorMsg.textContent = '';

  // 1. Create <li> element
  const li = document.createElement('li');

  // 2. Add text node
  const span = document.createElement('span');
  span.textContent = name;
  li.appendChild(span);

  // 3. Create Delete Button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';

  // Event listener to remove item from DOM
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(deleteBtn);

  // 4. Append to the list
  studentList.appendChild(li);

  // Clear input field
  studentInput.value = '';
}

// Add Event Listeners
addBtn.addEventListener('click', addStudent);

// Allow pressing 'Enter' key to add student
studentInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addStudent();
  }
});
