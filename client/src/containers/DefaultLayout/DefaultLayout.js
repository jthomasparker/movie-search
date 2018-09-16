import React, { Component } from 'react';
import { Container, Row, Col, Modal, ModalBody } from 'reactstrap'
import API from '../../utils/API'
import SideContainer from '../SideContainer'
import ResultsContainer from '../ResultsContainer'


class DefaultLayout extends Component {

    state = {
        results: [],
        modal: false,
        videoUrl: '',
        videoTitle: '',
        favorites: [],
        loggedIn: false
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

    getTrailer = (title, e) => {
        API.getTrailer(title)
            .then(res => {
                const video = res.data.items[0]
                this.setState(prevState => ({
                    modal: !prevState.modal,
                    videoUrl: 'https://www.youtube.com/embed/' + video.id.videoId,
                    videoTitle: video.snippet.title
                }))
            })
    }

    toggleModal = () => {
        this.setState(prevState =>({
            modal: !prevState.modal
        }));
    }

    toggleFavorite = (id, e) => {
      //  const newFavorites = this.state.favorites ? remove : add
    }

    render() {
        return (
            <Container fluid className="mt-3">
                <Row>
                    <Col md="4">
                        <SideContainer handleSearch={this.handleSearch} />
                        
                    </Col>
                    <Col md="8">
                        <ResultsContainer 
                            favorites={this.state.favorites} 
                            results={this.state.results} 
                            getTrailer={this.getTrailer}
                            toggleFavorite={this.toggleFavorite}
                            loggedIn={this.state.loggedIn}
                            handleLogin={this.handleLogin}
                            />
                    </Col>
                </Row>

                <Modal 
                    isOpen={this.state.modal}
                    toggle={this.toggleModal}
                    size="lg"
                    centered
                >
                    <ModalBody className="embed-responsive embed-responsive-16by9">
                        <iframe 
                            className="embed-responsive-item"
                            title={this.state.videoTitle} 
                            allowFullScreen
                            src={this.state.videoUrl}
                        />
                    </ModalBody>
                </Modal>
            </Container>



        )
    }

}

export default DefaultLayout;