


const goDown = function(todoList, id){
	for (var i=todoList.length-2; i>=0; i--) {

            if ((todoList[i][0] === id)) {
                var swap = todoList[i];
                todoList[i] = todoList[i + 1];
                todoList[i + 1] = swap;
                break;
            }

        }
}


const goUp = function(todoList, id){
	for (var i=todoList.length-1; i>=0; i--) {

            if ((todoList[i][0] === id) && (i>0)) {
                var swap = todoList[i];
                todoList[i] = todoList[i - 1];
                todoList[i - 1] = swap;
                break;
            }
        }
}

const removeTask = function(todoList, task_id){
     for (var i=todoList.length-1; i>=0; i--) {

        if (todoList[i][0] === task_id) {
            todoList.splice(i, 1);
            break;
        }
    }
}

const manageTask = function(todoList, task){
    var now = new Date();
        for (var i=todoList.length-1; i>=0; i--) {

            if (todoList[i][0] === task[0]) {
                todoList[i][1] = task[1];
                todoList[i][2] = socket.pseudo;
                todoList[i][3] = dateFormat(now, "d mmm à H:MM:ss");
                break;
            }

        }
}


module.exports ={
	goDown,
	goUp,
    removeTask,
    manageTask
};
