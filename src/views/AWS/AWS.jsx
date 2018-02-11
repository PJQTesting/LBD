import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Card from 'components/Card/Card.jsx'

class AWS extends Component {
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Place for AWS testing and research"
                                category="Category of aws tutorial goes here"
                                content={
                                    <div>    
                                        <h1>Do aws stuff here</h1>                          
                                    </div>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default AWS;