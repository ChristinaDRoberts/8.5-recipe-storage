import React, { Component } from 'react';
import {Container, Row, Col, Column} from 'react-bootstrap';
// import {Column} from 'react-bootstrap';
// import {Row} from 'react-bootstrap';
// import Col from 'react-bootstrap/Col'
// import {Container} from 'react-bootstrap';

import '../App.css';
import AdjustRecipe from "./AdjustRecipe";
import RecipeForm from "./RecipeForm";
import RecipeList from "./RecipeList"
// import divWithClassName from "react-bootstrap/es/utils/divWithClassName";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentScreen: "RecipeList",
            recipes : []
        }
    }
  render() {
    return (

        <Container>
               {/*<Row className="nav">*/}
                   {/*<h2>navbar</h2>*/}
               {/*</Row>*/}

               {/*<Row>*/}
                   {/*<Col className="aside" sm={2}> </Col>*/}
               {/*</Row>*/}
            {/*<Row >*/}

                    {(() => {
                        switch(this.state.currentScreen) {
                          case 'RecipeList':
                            return <RecipeList />;
                            case "RecipeForm":
                                return <RecipeForm/>;
                            case "AdjustRecipe":
                                return <AdjustRecipe/>;


                        }
                    })()}
            {/*</Row>*/}

        </Container>


    );
  }
}

export default App;
