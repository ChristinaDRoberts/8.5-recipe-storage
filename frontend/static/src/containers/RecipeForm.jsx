import React, { Component } from 'react';
import {Form} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

class RecipeFormContainer extends Component{
       constructor(props) {
           super(props);
           this.handleSubmit = this.handleSubmit.bind(this);

           this.state = {
               title: "",
               image: "",
               servings: "",
               directions: ""
           };
       }

        handleSubmit(event){
            event.preventDefault();
            fetch('/', {
                method: 'POST',
                body: this.state
            });
           }



    render(){
           var recipes = this.props.recipeCollection;


        return(

        <Form>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Recipe Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Recipe Name Here" />

               <Form.Label>Recipe Creator</Form.Label>
               <Form.Control type="text" placeholder="Enter Your Name Here" />

              </Form.Group>

              <Form.Group controlId="exampleForm.ControlSelect1" id="foodType">
                <Form.Label>Example select</Form.Label>
                <Form.Control as="select" >
                  <option>Breakfast</option>
                  <option>Lunch</option>
                  <option>Dinner</option>
                  <option>Dessert</option>
                  <option>Vegetarian</option>
                </Form.Control>
              </Form.Group>


            <Form.Control type="text" placeholder="Prep Time" className="midButt"/>
            <Form.Control type="text" placeholder="Cook Time" className="midButt" />



                <Form.Group controlId="exampleForm.ControlSelect1" id="foodTemp">
                     <Form.Control as="select">
                      <option>Fahrenheit</option>
                      <option>Celsius</option>
                     </Form.Control>
                </Form.Group>


            <Form.Group>
                This Recipe Will Make: <Form.Control type="text" placeholder="amount" id="amount" />
                <Form.Control type="text" placeholder="cookies, loaves, etc."  id="loaf"/>
            </Form.Group>

            <Form.Control type="text" placeholder="#" id="numberAmount"/>
            <Form.Control type="text" placeholder="units" id="units"/>
            <Form.Control type="text" placeholder="Ingredient" id="ingredient" />
            <Button variant="light"> + </Button>



            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Directions</Form.Label>
                <Form.Control as="textarea" rows="3" />
            </Form.Group>


            <Button  onClick={(event) => {this.props.addRecipeToPage(recipes)}}  variant="secondary">Save This Recipe !</Button>

        </Form>)};



}

export default RecipeFormContainer;