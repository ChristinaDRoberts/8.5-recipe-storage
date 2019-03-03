import React, { Component } from 'react';
import {Container, Row, Col, Column} from 'react-bootstrap';

import '../App.css';
import AdjustRecipeContainer from "./AdjustRecipe";

import RecipeFormContainer from "./RecipeForm";
import RecipeListContainer from "./RecipeList"


class App extends Component {
    constructor(props) {
        super(props);
        this.addRecipeToPage= this.addRecipeToPage.bind(this);

        this.state = {
            currentScreen: "RecipeForm",
            recipeCollection: [ ]

        };
    }

        // addRecipeToPage = (recipe) => {

    addRecipeToPage(){

    }




    componentDidMount() {


    const conf = {
              method: "post",
              body: JSON.stringify(),
              headers: new Headers({"Content-Type": "application/json"})
            };

        fetch(`${process.env.REACT_APP_API_HOST}/api/recipe/`, conf).then((response) => {
            if (response.status !== 201) {
            return this.setState({placeholder: "Something went wrong"});
      }

            return response.json();
        }).then((recipe) => {
        const {recipeCollection} = this.state;
        let newRecipeCollection = this.state.recipeCollection;
        newRecipeCollection.push(recipe);
        this.setState({recipeCollection: newRecipeCollection});
        // console.log(recipeCollection)
         });
            // let newRecipeCollection = this.state.recipeCollection;
            // newRecipeCollection .push(recipe);
            // this.setState({recipeCollection: newRecipeCollection});
        };











    render() {
        return (
            <div>

                           <Row className="nav">
                               <ul className="linksNav">
                                   <li><a href="RecipeForm.jsx">Create A Recipe</a></li>
                                   <li><a href="RecipeList.jsx">View Recipes</a></li>

                                   <li><a onClick={() => { document.location.href ="RecipeForm.jsx"; }}>Create A Recipe</a></li>
                               </ul>

                           </Row>

                            <Row>
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

                                <Col lg={8}>
                                   <Container className="MainCont">
                                        {(() => {
                                       switch(this.state.currentScreen) {
                                         case 'RecipeList':
                                           return <RecipeListContainer />;
                                           case 'RecipeForm':
                                               return <RecipeFormContainer recipes={this.newRecipeCollection} addRecipeToPage={this.addRecipeToPage}/>;
                                           case 'AdjustRecipe':
                                               return <AdjustRecipeContainer/>;
                                       }
                                   })()}


                                 </Container>
                                </Col>
                    </Row>
            </div>

        );
      }
    }


export default App;


