import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button, Container, Row, Col } from 'reactstrap'
import API from '../../utils/API'

class DefaultLayout extends Component {

    state = {
        title: '',
        results: []
    }
    

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleSearch = () => {
        
        API.searchTitles(this.state.title)
            .then(res => {
                console.log(res)
                this.setState({
                    results: res.data
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col/>
                    <Col>
                        <InputGroup size="lg">
                            <Input
                                name="title"
                                placeholder="Search" 
                                value={this.state.title}
                                onChange={this.handleInputChange}
                            />
                            <InputGroupAddon addonType="append">
                                <Button 
                                    color="secondary" 
                                    onClick={this.handleSearch}>
                                    Search</Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Col>
                    <Col/>
                </Row>
                <Row>
                    <Col/>
                    <Col md="6">
                    <ul>
                    {this.state.results.map(movie => (
                        <li key={movie._id}>{movie.TitleName}</li>
                    ))}
                    </ul>
                    </Col>
                    <Col/>
                </Row>
            </Container>



        )
    }

}

export default DefaultLayout;