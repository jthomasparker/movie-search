import React, { Component } from 'react';
import {Card, CardBody, CardTitle, Col, Row} from 'reactstrap'
import SearchCard from '../../components/SearchCard'


class SideContainer extends Component {

    render() {
        return (
            <Card>
                <CardBody>
                    <Row>
                        <Col>
                        <SearchCard {...this.props} />
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        )
    }
};

export default SideContainer;