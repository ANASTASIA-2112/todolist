import React from "react";

type PropsType = {
    tasks?: string
    task: Array<TaskType>


}

type TaskType = {
    id: number
    title: string
    isDone: boolean

}
export const Todolist = (props: PropsType) => {
    return (
        <div>
            <div>
                <h3>{props.tasks}</h3>

                <input/>
                <button>
                    +
                </button>
            </div>

            <ul>
                {props.task.map((el) => {
                    return (

                        <ul key={el.id}>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                        </ul>
                    )
                })}
            </ul>


            <div>
                <button>All</button>
                <button>Active</button>
                <button>completed</button>
            </div>
        </div>
    )
}
export default Todolist;