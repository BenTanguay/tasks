import React from "react";
import "./App.css";
import picture from './picture.png'; // with import
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1>Ben Tanguays COS Project</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Ben Tanguay. Hello World!
            </p>
            <Container>
                <Row>
                    <Col>
                    <div style={ {width:"80%", height:"100%", backgroundColor:"red"} }>
                        <img src={picture} alt="A picture of the HTML5 and CSS3 logos" />
                        </div>
                        
                    </Col>
                    <Col>
                        <div style={ {width:"80%", height:"100%", backgroundColor:"red"} }>
                            <ol>
                            <li>First thing</li>
                            <li>Another thing</li>
                            <li>A third item</li>
                        </ol>
                        <Button onClick={() => {console.log("Hello World!");}}>Log Hello World</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
