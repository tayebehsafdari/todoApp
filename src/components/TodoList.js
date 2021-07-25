import React from "react";

function TodoList(props) {
    console.log(props);
    return (
        <div>
            {
                props.items.map(item => (
                    <div className="card text-dark bg-info" key={item.id}>
                        <div className="card-body">
                            {item.text}
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default TodoList;