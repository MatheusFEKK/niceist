function editTask(task, idTask)
{
    const inputEdit = task.querySelector("input");

    inputEdit.disabled = false;

        inputEdit.addEventListener("keydown", function send(e){
            let ajaxRequest = new XMLHttpRequest();
            if (e.code === "Enter")
        {
            ajaxRequest.open('POST', `/exnoting/editNote/${idTask}/${inputEdit.value}`);
            ajaxRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;')
            ajaxRequest.send();

            if (ajaxRequest.readyState === 4 & ajaxRequest.status === 200)
            {
                console.log("Request sended with success");
                inputEdit.disable = true;
            }
        }
    })
}