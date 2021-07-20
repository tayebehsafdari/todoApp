import './App.scss';

import {Container, Form} from 'react-bootstrap';
import Counter from "./Counter";

function App() {
    return (
        <div className="App">
            <Container>
                <Form>
                    <Counter initialCount={0}/>
                </Form>
            </Container>
        </div>
    );
}

export default App;
