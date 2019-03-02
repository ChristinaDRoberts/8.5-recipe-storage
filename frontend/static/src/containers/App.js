import React, { Component } from 'react';
import {Container, Row, Col, Column} from 'react-bootstrap';

import '../App.css';
import AdjustRecipeContainer from "./AdjustRecipe";

import RecipeFormContainer from "./RecipeForm";
import RecipeListContainer from "./RecipeList"


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentScreen: "RecipeList",
            // recipes : []
        }
    }
      render() {
        return (
            <div>


                       <div >
                           <Row className="nav">
                               <h2>NAVBAR</h2>
                           </Row>


                               <Col className="aside" sm={2}>
                                   <h3><a href="#"> My Recipes </a></h3>
                                   <hr/>
                                   <h3><a href="#"> Public Recipes </a></h3>
                                   <hr/>
                                   <h3><a href="#"> Popular Recipes </a></h3>
                                   <hr/>
                                   <h3><a href="#"> My Favorite Recipes</a></h3>
                                   <hr/>
                                   <h3><a href="#"> Vegetarian Recipes </a></h3>
                                   <hr/>
                               </Col>
                       </div>

                   <Container>
                        {(() => {
                       switch(this.state.currentScreen) {
                         case 'RecipeList':
                           return <RecipeListContainer />;
                           case 'RecipeForm':
                               return <RecipeFormContainer/>;
                           case 'AdjustRecipe':
                               return <AdjustRecipeContainer/>;
                       }
                   })()}


                 </Container>
            </div>

        );
      }
    }


export default App;


