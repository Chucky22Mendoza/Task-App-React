import React from "react";

export const TaskRow = props => (
    <tr key={props.task.name}>
        <td>{props.task.name}</td>
        <td>
            <input
                type="checkbox"
                onChange={() => props.toggleTask(props.task)}
                checked={props.task.done}
            />
        </td>
    </tr>
);