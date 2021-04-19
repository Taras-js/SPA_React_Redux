import React, {} from 'react';
import s from './taskManager.module.css'

const TaskManager = (props) => {


    let onWriteData = () => {
        props.writeData()
    }
    let addNewData = React.createRef();
    let onUpdateNewsData = () => {
        let text = addNewData.current.value
        props.updateNewsData(text)
    }
    return (
    <div className={s.taskManager} >
        <div className={s.currentTask} >
            <ul>
                {props.data.map((d) => {
                    return (<li>{d.name}</li>)

                    })}
            </ul>
        </div>
        <div>
            <textarea onChange={onUpdateNewsData}
                      className={s.textTask}
                      ref={addNewData}
                      value={props.newTextName}

            />
            <button onClick={onWriteData} className={s.addTask} > Add Task</button>
        </div>
    </div>
    )
}
export default TaskManager;

