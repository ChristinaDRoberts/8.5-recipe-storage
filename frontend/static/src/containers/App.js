import React, { Component } from 'react';
import {Container, Row, Col, Column} from 'react-bootstrap';

import '../App.css';
import AdjustRecipeContainer from "./AdjustRecipe";

import RecipeFormContainer from "./RecipeForm";
import RecipeListContainer from "./RecipeList"
// import divWithClassName from "react-bootstrap/es/utils/divWithClassName";

 console.log(AdjustRecipeContainer);

class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            // currentScreen: "AdjustRecipe",
            recipes : []
        }
    }
      render() {
        return (
            <Container>
                <div className="root">

                    <AdjustRecipeContainer/>
                    {/*<RecipeFormContainer/>*/}
                    {/*<RecipeListContainer/>*/}
                </div>
            </Container>

        );
      }
    }


export default App;


      {/*{(() => {*/}
                        {/*switch(this.state.currentScreen) {*/}
                          {/*case 'RecipeList':*/}
                            {/*return <RecipeList />;*/}
                            {/*case "RecipeForm":*/}
                                {/*return <RecipeForm/>;*/}
                            {/*case "AdjustRecipe":*/}
                                {/*return <AdjustRecipe/>;*/}


                        {/*}*/}
                    {/*})()}*/}