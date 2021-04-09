import React, {} from 'react';
import s from './taskManager.module.css'
const TaskManager = () => {

    return (
    <div className={s.taskManager} >
        <div className={s.currentTask} >
            <ul>
                <li> Many</li>
                <li> Dom</li>
                <li> Auto</li>
            </ul>
        </div>
        <div>
            <textarea className={s.textTask} > Add new Task</textarea>
            <button className={s.addTask} > Add Task</button>
        </div>
    </div>
    )
}
export default TaskManager;

