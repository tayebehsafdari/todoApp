import React, {useState} from "react";

function Counter({initialCount}) {
    const [count, setCount] = useState(initialCount);

    function handleChange(event) {
        setCount(event.target.value);
    }

    function handleReset() {
        setCount(initialCount);
    }

    function handleDecrement() {
        setCount(prevCount => prevCount - 1);
    }

    function handleIncrement() {
        setCount(prevCount => prevCount + 1);
    }

    return (
        <div className="input-group my-5">
            <span className="input-group-text" onClick={handleReset}>Reset</span>
            <span className="input-group-text" onClick={handleDecrement}>-</span>
            <input type="text" className="form-control" value={count} onChange={handleChange}/>
            <span className="input-group-text" onClick={handleIncrement}>+</span>
        </div>
    );
}

export default Counter;