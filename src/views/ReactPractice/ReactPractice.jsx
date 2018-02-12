import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ToggleDisplay from 'react-toggle-display';

import Card from 'components/Card/Card.jsx'
import Clock from 'views/ReactPractice/Clock.jsx'

class ReactPractice extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        this.state = {showClock: false};
      }
    handleClick() {
        this.setState({
          show: !this.state.show
        });
    }
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Place for reactJS testing and research"
                                category="Clock with state"
                                content={
                                    <div className="ReactJSPractice">
                                        <button onClick={ () => this.handleClick() }>Toggle Clock</button>
                                        <ToggleDisplay show={!this.state.show}>
                                             <Clock />
                                        </ToggleDisplay>
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


export default ReactPractice;