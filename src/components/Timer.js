import React, {useState, useEffect} from "react";

function Timer(props) {
    const [seconds, setSeconds] = useState(0);
    const tick = () => {
        setSeconds(seconds + 1);
    };
    useEffect(() => {
        const interval = setInterval(() => tick(), 1000);
        return () => {
            clearInterval(interval);
        };
    });
    return (
        <div className="my-5">
            Seconds: {seconds}
        </div>
    );
}

export default Timer;