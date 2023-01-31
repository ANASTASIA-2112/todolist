import React from 'react';
import './App.css';
import Todolist from "./Todolist";



function App() {

    const Title1 = "What to learn";
    const Title2 = "Songs";


    const Task1 = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React JS", isDone: false},
    ]

    const Task2 = [
        {id: 1, title: "Hello world", isDone: true},
        {id: 2, title: "I am Happy", isDone: false},
        {id: 3, title: "Yo", isDone: true},
    ]
    return (
        <div className="App">
            <Todolist tasks={Title1} task={Task1}/>
            <Todolist tasks={Title2} task={Task2}/>

        </div>
    )
}


export default App;
