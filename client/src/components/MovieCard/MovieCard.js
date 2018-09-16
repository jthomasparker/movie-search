import React, { Component } from 'react';
import {Card, CardBody, CardTitle, CardText, CardSubtitle} from 'reactstrap'
import './MovieCard.css'

class MovieCard extends Component {
    state = {

    }


    
    render() {
        const movie = this.props
            
        return (
            <Card className="movieCard">
                <CardBody>
                    <CardTitle>{movie.title}{' ('}{movie.year}{') '}</CardTitle>
                    <CardText className="text-muted">Genre: {movie.genres.join(', ')}</CardText>
                    <CardSubtitle>Starring/Directing:</CardSubtitle>
                         <CardText>{this.props.actors.map(actor => (
                            ` ${actor.Name} (${actor.RoleType}) |` 
                        ))}
                        </CardText>
                    <CardSubtitle>Plot:</CardSubtitle> 
                        <CardText>{movie.story}</CardText>
                </CardBody>
            </Card>

        )
    }
}

export default MovieCard;