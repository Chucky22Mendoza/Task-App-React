import React from "react";

export const TaskBanner = props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
            <h3 className="navbar-brand">{props.userName}'s Task App</h3>
            <div className="collapse navbar-collapse" id="navbarNav">
                <span className="navbar-brand ml-auto">
                    <strong>{props.taskItems.filter(t => !t.done).length} tasks to do</strong>
                </span>
            </div>
        </div>
    </nav>
)