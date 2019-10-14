import React from 'react';
import './App.css';
import TodoItem from "./asserts/TodoItem";


//asserts
function App() {
    return (
        <div className={"todo-list"}>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        </div>
    );
}

export default App;
