import React, { Component } from 'react';
import {Card, CardBody, CardTitle, Button, Form, FormGroup, Label, Input, Col, Row} from 'reactstrap'

class SearchCard extends Component {
    state = {
        title: '',
        genre: '',
        actors: '',
        year: '',
    }


    handleInputChange = e => {
        const { name, value } = e.target
        console.log(e.target)
        this.setState({
            [name]: value
        });
    };

    handleClick = e => {
        e.preventDefault()
        this.props.handleSearch(this.state)
    };

    render() {
        return(
            <Card>
                <CardBody>
                <CardTitle>Movie Search</CardTitle>
                <Form>
                    <FormGroup>
                        <Label for="title">Movie Title</Label>
                        <Input name="title" value={this.state.title} onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="genre">Genre</Label>
                        <Input name="genre" value={this.state.genre} onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="actors">Director/Actors</Label>
                        <Input name="actors" value={this.state.actors} onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="year">Release Year</Label>
                        <Input name="year" value={this.state.year} onChange={this.handleInputChange}/>   
                    </FormGroup>
                    <FormGroup className="mt-2" row>
                        <Col sm={{ size: 4, offset: 4 }}>
                            <Button onClick={this.handleClick}>Search</Button>
                        </Col>
                    </FormGroup>
                </Form>
                </CardBody>
            </Card>
        )
    }
}

export default SearchCard;