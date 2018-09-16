import React, { Component } from 'react';
import {Card, CardBody, CardTitle, Col, Row} from 'reactstrap'
import MovieCard from '../../components/MovieCard'

class ResultsContainer extends Component {


    render() {
        return (
            <Card>
                <CardBody>
                    <Row>
                    {this.props.results.length > 0 
                        ?
                        this.props.results.map(movie => (
                            <MovieCard
                                key={movie._id}
                                title={movie.TitleName}
                                genres={movie.Genres}
                                awards={movie.Awards}
                                story={movie.Storylines[0].Description}
                                actors={[...movie.Participants.filter(actor => (actor.IsKey))]}
                                year={movie.ReleaseYear}
                            />
                        ))
                        : (
                            <CardTitle>No Results</CardTitle>
                        )}
                    </Row>
                </CardBody>
            </Card>    
        )
    }
}

export default ResultsContainer;