import React, { Component } from 'react';
import {Card, CardBody, CardTitle, Button, Form, FormGroup, Label, Input, Col} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../MovieCard/MovieCard.css'

class LoginCard extends Component {
    state = {
        username: '',
        password: ''
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        });
    };

    handleClick = e => {
        e.preventDefault()
        this.props.handleLogin(this.state.username, this.state.password)
        
    };
    
    render() {
            
        return (
            <Card className="movieCard">
                <CardBody>
                    <CardTitle>Login or Signup to Save Favorites</CardTitle>
                    <Form>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input name="username" value={this.state.username} onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" value={this.state.password} onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup className="mt-2" row>
                        <Col sm={{ size: 12 }}>
                            <Button onClick={this.handleClick}>Login</Button>
                        </Col>
                    </FormGroup>
                </Form>
                </CardBody>
            </Card>

        )
    }
}

export default LoginCard;