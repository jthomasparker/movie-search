import React, { Component } from 'react';
import {Card, CardBody, CardTitle, CardText, Row, Button, ButtonGroup, CardHeader} from 'reactstrap'
import MovieCard from '../../components/MovieCard'
import LoginCard from '../../components/LoginCard'
import classNames from 'classnames'


class ResultsContainer extends Component {
    state = {
        showFavorites: false
    }

    toggleFavorites = () => {
        this.setState(prevState => ({
            showFavorites: !prevState.showFavorites
        }))
    }


    render() {
        const results = this.state.showFavorites ? this.props.favorites : this.props.results 
        return (
            <Card>

                <CardBody>
                <CardTitle>
                    <ButtonGroup>
                        <Button onClick={this.toggleFavorites} className={classNames({ active: !this.state.showFavorites })}>Search Results</Button>
                        <Button onClick={this.toggleFavorites} className={classNames({ active: this.state.showFavorites })}>Favorites</Button>
                    </ButtonGroup>
                </CardTitle>
                    <Row>

                    {results.length > 0 
                        ?
                            results.map(movie => (
                            <MovieCard
                                key={movie._id}
                                id={movie._id}
                                title={movie.TitleName}
                                genres={movie.Genres}
                                awards={movie.Awards}
                                story={movie.Storylines[0].Description}
                                actors={[...movie.Participants.filter(actor => (actor.IsKey))]}
                                year={movie.ReleaseYear}
                                getTrailer={this.props.getTrailer}
                                isFavorite={this.props.favorites.includes(movie._id)}
                                toggleFavorite={this.props.toggleFavorite}
                            />
                            )
                        ) : (
                            <CardText>No Results</CardText>
                    )}
                    </Row>
                </CardBody>
            </Card>    
        )
    }
}

export default ResultsContainer;