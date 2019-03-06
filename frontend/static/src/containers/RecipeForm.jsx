import React, { Component } from 'react';
import {Form} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

class RecipeFormContainer extends Component {
    constructor(props) {
        super(props);


        this.state = {

        };
    }



    render() {
        return (
            <RecipeMakerComponent />

        );
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////


class RecipeMakerComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipe : {
                title: "",
                image: "",
                servings: "",
                directions: ""},
            recipeCollection: [ ]


    };
}



        handleSubmit= (e) => {
                e.preventDefault();
                // let


        };

        handleInput = (e) => {
            this.setState({[e.target.name]: e.target.value})
        };

        handleAddRecipe = (e) => {
            e.preventDefault();
            let recipe = {title: "", image: " ", servings: "", directions: ""};
            let {recipeCollection} = this.state.recipeCollection;
            recipeCollection.push({recipe});

            this.setState({recipeCollection: recipeCollection})
        };

        //
        // updateRecipe = (index, value) => {
        //     let {recipeCollection} = this.state.recipeCollection;
        //     let recipe = recipeCollection[index];
        //     let recipe.title = value;
        //     this.forceUpdate();
        // };
        //
        // }

    createNewRecipeList = () => {
        const conf = {
            method: "post",
            body: JSON.stringify(),
            headers: new Headers({"Content-Type": "application/json"})
        };

        fetch('/api/recipe/', conf).then((response) => {
            if (response.status !== 201) {
                return this.setState({placeholder: "Something went wrong"});
            }

            return response.json();
        }).then((recipe) => {
            const {recipeCollection} = this.state;
            let newRecipeCollection = this.state.recipeCollection;
            newRecipeCollection.push(recipe);
            this.setState({recipeCollection: newRecipeCollection});
            console.log(recipeCollection)

        });

        this.props.route('RecipeList')

    };


        render() {
                // var recipes = this.state.recipeCollection;


                return (


                    <Form>
                    {/*<Form onSubmit={this.props.submit}>*/}

                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Recipe Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Recipe Name Here"/>

                            <Form.Label>Recipe Creator</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Name Here"/>

                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlSelect1" id="foodType">
                            <Form.Label>Example select</Form.Label>
                            <Form.Control as="select">
                                <option>Breakfast</option>
                                <option>Lunch</option>
                                <option>Dinner</option>
                                <option>Dessert</option>
                                <option>Vegetarian</option>
                            </Form.Control>
                        </Form.Group>


                        <Form.Control type="text" placeholder="Prep Time" className="midButt"/>
                        <Form.Control type="text" placeholder="Cook Time" className="midButt"/>


                        <Form.Group controlId="exampleForm.ControlSelect1" id="foodTemp">
                            <Form.Control as="select">
                                <option>Fahrenheit</option>
                                <option>Celsius</option>
                            </Form.Control>
                        </Form.Group>


                        <Form.Group>
                            This Recipe Will Make: <Form.Control type="text" placeholder="amount" id="amount"/>
                            <Form.Control type="text" placeholder="cookies, loaves, etc." id="loaf"/>
                        </Form.Group>

                        <Form.Control type="text" placeholder="#" id="numberAmount"/>
                        <Form.Control type="text" placeholder="units" id="units"/>
                        <Form.Control type="text" placeholder="Ingredient" id="ingredient"/>
                        <Button variant="light"> + </Button>


                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Directions</Form.Label>
                            <Form.Control as="textarea" rows="3"/>
                        </Form.Group>

            {/*change this event, should i use handle event, create a new event? make the array of recipes state here */}
                        <Button onClick={(this.handleAddRecipe)} variant="secondary">Save This Recipe !</Button>

                    </Form>)
            };
        }


export default RecipeFormContainer;



                             // componentWillMount() {
    //
    //
    //     const conf = {
    //         method: "post",
    //         body: JSON.stringify(),
    //         headers: new Headers({"Content-Type": "application/json"})
    //
    //
    //     };
    //
    //
    //     fetch(`${process.env.REACT_APP_API_HOST}/api/recipe/`).then((response) => {
    //         if (response.status !== 200) {
    //             return this.setState({placeholder: "Something went wrong"});
    //         }
    //         return response.json();
    //         console.log("success");
    //     }).then((data) => {
    //         this.setState({recipeCollection: data, loaded: true});
    //         console.log("state", this.state);
    //         // console.log(recipeCollection)
    //
    //     });
    // }

    // componentDidMount() {
    //
    //
    //     const conf = {
    //               method: "post",
    //               body: JSON.stringify(),
    //               headers: new Headers({"Content-Type": "application/json"})
    //             };
    //
    //         fetch(`${process.env.REACT_APP_API_HOST}/api/recipe/`, conf).then((response) => {
    //             if (response.status !== 201) {
    //             return this.setState({placeholder: "Something went wrong"});
    //       }
    //
    //             return response.json();
    //         }).then((recipe) => {
    //         const {recipeCollection} = this.state;
    //         let newRecipeCollection = this.state.recipeCollection;
    //         newRecipeCollection.push(recipe);
    //         this.setState({recipeCollection: newRecipeCollection});
    //         console.log(recipeCollection)
    //          });
    //             // let newRecipeCollection = this.state.recipeCollection;
    //             // newRecipeCollection .push(recipe);
    //             // this.setState({recipeCollection: newRecipeCollection});
    //         };
    //
