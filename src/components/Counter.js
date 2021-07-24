import React, {useState} from "react";

function Counter({initialCount}) {
    const [count, setCount] = useState(initialCount);

    return (
        <div className="input-group my-5">
            <span className="input-group-text" onClick={() => setCount(initialCount)}>Reset</span>
            <span className="input-group-text" onClick={() => setCount(count - 1)}>-</span>
            <input type="text" className="form-control" value={count}
                   onChange={(e) => setCount(e.target.value)}/>
            <span className="input-group-text" onClick={() => setCount(count + 1)}>+</span>
        </div>
    );
}

export default Counter;