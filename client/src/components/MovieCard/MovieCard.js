import React, { Component } from 'react';
import {Button, Card, CardBody, CardFooter, CardTitle, CardText, CardSubtitle} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './MovieCard.css'

class MovieCard extends Component {

    
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
                <CardFooter>
                    <Button onClick={(e)=>this.props.getTrailer(movie.title, e)}>Watch Trailer</Button>
                    <Button className="ml-3">
                    {this.props.isFavorite ? 
                                <FontAwesomeIcon icon='star'  onClick={(e) => movie.toggleFavorite(movie.id, e)} color="yellow"/>
                            :   <FontAwesomeIcon icon={['far', 'star']} onClick={(e) => movie.toggleFavorite(movie.id, e)}/>
                            }
                    </Button>
                </CardFooter>
            </Card>

        )
    }
}

export default MovieCard;