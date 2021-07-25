import React, {useReducer} from "react";
import CounterReducer from "../reducers/CounterReducer";
import init from "./../reducers/init";

function Counter({initialCount}) {
    const [state, dispatch] = useReducer(CounterReducer, initialCount, init);
    return (
        <div className="input-group my-5">
            <span className="input-group-text"
                  onClick={() => dispatch({type: 'reset', payload: initialCount})}>Reset</span>
            <span className="input-group-text" onClick={() => dispatch({type: 'decrement'})}>-</span>
            <input type="text" className="form-control" value={state.count}
                   onChange={(e) => dispatch(e.target.value)}/>
            <span className="input-group-text" onClick={() => dispatch({type: 'increment'})}>+</span>
        </div>
    );
}

export default Counter;