import React, {useState} from "react";
import './App.scss';

import {Container} from 'react-bootstrap';
import TodoList from "./TodoList";


function App() {
    const [items, setItems] = useState([]);
    const [text, setText] = useState('');
    const handleChange = (e) => {
        setText(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.length === 0) {
            return;
        }
        const newItem = {
            text,
            id: Date.now()
        };
        setItems([...items, newItem]);
        setText('');
    };
    return (
        <div className="App my-5">
            <Container>
                <h3>TODO</h3>
                <br/>
                <TodoList items={items}/>
                <br/>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="new-todo" className="form-label">What needs to be done?</label>
                        <input type="text" className="form-control" id="new-todo" value={text} onChange={handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Add #{items.length + 1}</button>
                </form>
            </Container>
        </div>
    );
}

export default App;
