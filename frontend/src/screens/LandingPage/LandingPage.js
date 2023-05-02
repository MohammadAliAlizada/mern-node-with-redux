import React from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import './LandingPage.css';
export const LandingPage = () => {
    return (
        <div className="main">
            <Container>
                <Row>
                    <div className="intro-text">
                        <div>
                            <h1 className="title">Welcome to Note with Redux</h1>
                            <p className="subtitle">One safe place for all your notes.</p>
                        </div>
                        <div className="buttonContainer">
                            <a href='/login'>
                                <Button size="lg" className="landingbutton" >Login</Button>
                            </a>
                            <a href='/register' >
                                <Button size="lg" className="landingbutton" variant="outline-primary">sign up</Button>
                            </a>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}
