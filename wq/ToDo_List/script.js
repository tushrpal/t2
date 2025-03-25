function addTask(){
    if(document.querySelector('input').value===""){
        alert("Please enter a task");
        return;
    }
    const newTask=document.createElement('li');
    const taskList=document.querySelector('#taskList');
    const btn=document.querySelector('#myform');
    // btn.addEventListener('submit',(e)=>{e.preventDefault()})
    taskList.appendChild(newTask);
    newTask.textContent=document.querySelector('#inputTask').value;

    document.querySelector('#inputTask').value="";

    deleteTask(newTask)
}

const deleteTask=(task)=>{
    const dltBtn=document.createElement('button');
    dltBtn.textContent="Delete";
    task.appendChild(dltBtn)
    dltBtn.onclick=()=>{
        task.remove();
    }
}
