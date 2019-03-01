import React, { Component } from 'react';
import {Container} from 'react-bootstrap';

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


            <div>

            </div>

            <main>
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
            </main>

        </Container>


    );
  }
}

export default App;
