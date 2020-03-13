import React, {useState} from "react";

export const TaskCreator = props => {

    const [newTaskName, setNewTaskName] = useState('');

    const updateNewTaskValue = e => setNewTaskName(e.target.value);

    const createNewTask = () => {
        props.callback(newTaskName);
        setNewTaskName('');
    }

    return(
        <div className="my-3 col-md-8 offset-md-2">
            <h2 className="text-center my-4">TASKS</h2>
            <input
                type="text"
                className="form-control"
                value={newTaskName}
                onChange={updateNewTaskValue}
                placeholder="Add New Task"
            />
            <button className="btn btn-primary mt-2 btn-block" onClick={createNewTask}>
                Add
            </button>
        </div>
    )
}