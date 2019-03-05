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


        };
    }



//using fat arrow syntax it means we dont have to bind at top under state
    route = (currentScreen) => {
        this.setState({currentScreen})
    };




    render() {
        return (
            <div>

               <Row className="nav">
                   <ul className="linksNav">
                       <li><button onClick={(e) => {this.route("RecipeForm")}}>Create A Recipe</button></li>

                       <li><button onClick={(e) => {this.route("RecipeList")}}>View Recipes</button></li>


                   </ul>

               </Row>

                <Row>
                   <Col className="aside" sm={2}>
                       <h3><button> My Recipes </button></h3>
                       <hr/>
                       <h3><button > Public Recipes </button></h3>
                       <hr/>
                       <h3><button> Popular Recipes </button></h3>
                       <hr/>
                       <h3><button> My Favorite Recipes</button></h3>
                       <hr/>
                       <h3><button> Vegetarian Recipes </button></h3>
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
                                   return <AdjustRecipeContainer route={this.route}/>;

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


