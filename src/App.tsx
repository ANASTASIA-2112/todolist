import React from 'react';
import './App.css';
import TodoList, {TaskType} from "./todolist";




function App() {


    const task_1 = [
        { id: 1, title: "HTML", isDone: true},
        { id: 1, title: "CSS", isDone: true},
        { id: 1, title: "JS/TS", isDone: false},
        { id: 1, title: "React API", isDone: false},
        { id: 1, title: "GrapQl", isDone: false},

    const task_2 = [
        { id: 1, title: "Hello world", isDone: true},
        { id: 1, title: "I am Happy", isDone: true},
        { id: 1, title: "Yo", isDone: true},
    ]

    return (
        <div className="App">
            <TodoList title={todoListTitle} tasks = {task1}/>
            <TodoList title={todoListTitle} tasks = {task2}/>
        </div>
    );
}

export default App;
