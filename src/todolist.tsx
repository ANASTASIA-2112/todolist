
import React, {FC} from 'react';
import {type} from "os";

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

const TodoList: FC<TodoListPropsType> = (props)  => {
    let taskList;
    if (props.tasks.length ===0) {
        taskList = <span>Your taskList is empty</span>
    }  else {
        taskList = props.tasks.map((task) => {
            return (
                <li>
                    <input type = "checkbox" checked = {task.isDone}/>
                    <span>{task.title}</span>
                </li>
            )
        })
    }

    return (
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {taskList}
                    <li><input type="checkbox" checked={true}/> <span>HTML&CSS</span></li>
                    <li><input type="checkbox" checked={true}/> <span>JS</span></li>
                    <li><input type="checkbox" checked={false}/> <span>React</span></li>
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>

    );
}

export default TodoList;
