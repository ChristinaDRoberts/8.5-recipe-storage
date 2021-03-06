import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import '../App.css';
import AdjustRecipeContainer from "./AdjustRecipe";

import RecipeFormContainer from "./RecipeForm";
import RecipeListContainer from "./RecipeList"


class App extends Component {
    constructor(props) {
        super(props);
        // this.addRecipeToPage= this.addRecipeToPage.bind(this);


        this.state = {
            currentScreen: "RecipeForm",
            id: null

        };
    }



//using fat arrow syntax it means we dont have to bind at top under state
    route = (currentScreen, id) => {
        this.setState({currentScreen})

        if(id){
            this.setState({id})
        }
    };




    render() {
        return (
            <div>

               <Row className="nav">
                   <ul className="linksNav">
                       <li><button className="menuButton"    onClick={(e) => {this.route("RecipeForm")}}>Create A Recipe</button></li>
                       <li><button className="menuButton"     onClick={(e) => {this.route("RecipeList")}}>View Recipes</button></li>

                       <h2 className="heading">Recipe Roundup</h2>

                       {/*<div className="navsymbols">*/}
                           {/*<img/>*/}
                           {/*<img/>*/}
                           {/*<img/>*/}





                   </ul>

               </Row>

                <Row>
                   <Col className="aside" sm={2}>
                       <h3>My Recipes</h3>
                       <hr/>
                       <h3>Public Recipes</h3>
                       <hr/>
                       <h3>Popular Recipes</h3>
                       <hr/>
                       <h3>My Favorite Recipes</h3>
                       <hr/>
                       <h3>Vegetarian Recipes</h3>
                       <hr/>
                   </Col>

                    <Col lg={8}>
                       <Container className="MainCont">
                            {(() => {
                           switch(this.state.currentScreen) {
                             case 'RecipeList':
                               return <RecipeListContainer route={this.route}/>;
                               case 'RecipeForm':
                                   return <RecipeFormContainer  route={this.route}/>;
                               case 'AdjustRecipe':
                                   return <AdjustRecipeContainer route={this.route} id={this.state.id}/>;

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


// componentDidMount() {
    //
    //
    // const conf = {
    //           method: "post",
    //           body: JSON.stringify(),
    //           headers: new Headers({"Content-Type": "application/json"})
    //         };
    //
    //     fetch(`${process.env.REACT_APP_API_HOST}/api/recipe/`, conf).then((response) => {
    //         if (response.status !== 201) {
    //         return this.setState({placeholder: "Something went wrong"});
    //   }
    //
    //         return response.json();
    //     }).then((recipe) => {
    //     const {recipeCollection} = this.state;
    //     let newRecipeCollection = this.state.recipeCollection;
    //     newRecipeCollection.push(recipe);
    //     this.setState({recipeCollection: newRecipeCollection});
    //     // console.log(recipeCollection)
    //      });
    //         // let newRecipeCollection = this.state.recipeCollection;
    //         // newRecipeCollection .push(recipe);
    //         // this.setState({recipeCollection: newRecipeCollection});
    //     };


