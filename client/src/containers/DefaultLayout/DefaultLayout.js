import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import API from '../../utils/API'
import SearchCard from '../SearchCard'
import ResultsContainer from '../ResultsContainer'


class DefaultLayout extends Component {

    state = {
        results: []
    }
    

    handleSearch = (userInput) => {
        API.getMovies(userInput)
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
            <Container className="mt-3">
                <Row>
                    <Col md="3">
                        <SearchCard handleSearch={this.handleSearch}/>
                    </Col>
                    <Col md="9">
                        <ResultsContainer results={this.state.results}/>
                    </Col>
                </Row>
            </Container>



        )
    }

}

export default DefaultLayout;