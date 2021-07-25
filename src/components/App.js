import './App.scss';

import {Container} from 'react-bootstrap';
import Timer from "./Timer";


function App() {
    return (
        <div className="App">
            <Container>
                <Timer/>
            </Container>
        </div>
    );
}

export default App;
