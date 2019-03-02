import React, { Component } from 'react';
import Container from "react-bootstrap/es/Container";
// import Button from 'react-bootstrap/Button'';

class RecipeFormContainer extends Component{
       constructor() {
        super();
        this.state = {
            title: "",
            image: "",
            servings: "",
            directions: ""
        }
    }


    render(){
        return(

            <div>


                    <h1>testing recipe form container</h1>

            </div>


        )

    }
}

export default RecipeFormContainer;