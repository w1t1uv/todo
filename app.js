const toDoList = document.querySelector('#todo-list')
const toDoForm = document.querySelector('#todo-form')
const toDoInput = document.querySelector('#todo-input')

toDoForm.addEventListener('submit', formHandler)

function formHandler(event) {
	event.preventDefault()

	const taskText = toDoInput.value

	const newTask = document.createElement('li')
	newTask.innerText = taskText

	const deleteBtn = document.createElement('button')
	deleteBtn.setAttribute('role', 'button')
	deleteBtn.innerText = 'Удалить'
	deleteBtn.style['margin-left'] = '15px'
	newTask.append(deleteBtn)

	deleteBtn.addEventListener('click', function () {
		this.closest('li').remove()
	})

	toDoList.append(newTask)

	toDoInput.value = ''

	toDoInput.focus()

}