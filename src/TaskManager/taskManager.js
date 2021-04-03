let addNewTask = () => {
    let currents = document.querySelector('#currents');
    let textTask = document.querySelector('#textTask');
    let addTask = document.querySelector('#addTask');
    // let allTaskArray = ['Many', 'Dom', 'Auto']
    textTask.value = 'Add text task';
    addTask.addEventListener('click', () => {
        if (textTask.value!=null) {
            let newTask = document.createElement('li');
            newTask.innerHTML =`<li>${textTask.value}</li>`;
            textTask.closest('ul')
            currents.appendChild(newTask);
            textTask.value = '';
        }
    })
}
addNewTask();

