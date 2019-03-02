import React, { Component } from 'react';
import {Container, Row} from "react-bootstrap";
import Col from "./RecipeList";

class AdjustRecipeContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            image: "",
            servings: "",
            directions: ""
        }
    }

    render(){
        console.log("AdjustRecipeContainer.render")
       return(
    <Container>
           <div>
               <Row className="nav">
                   <h2>navbarforadjust</h2>
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
                    <div className="col10">
                        <Col className="Main" sm={12}>
                            <hr/>

                               <div>
                                   <header className="adjustHead">
                                   <div className="servingsA">
                                       Makes <input type="text"/> Servings
                                   </div>
                                   <div>
                                       <button className="adjustButton">Adjust</button>
                                   </div>
                                   </header>
                                   <div className="ingredientListCB">
                                       <ul>
                                           <li><input type="checkbox">a</input>Chocolate Powder</li>
                                           <li><input type="checkbox">b</input>Milk</li>
                                           <li><input type="checkbox">c</input>Eggs</li>
                                           <li><input type="checkbox">d</input>Baking Powder</li>
                                           <li><input type="checkbox">e</input>Sugar</li>
                                           <li><input type="checkbox">f</input>Frostin</li>
                                           <li><input type="checkbox">g</input>Cream Cheese</li>
                                           <li><input type="checkbox">h</input>Powdered Sugar</li>
                                           <li><input type="checkbox">i</input>Love</li>
                                       </ul>
                                   </div>
                               </div>
                        </Col>
                    </div>
               </Row>
           </div>
    </Container>
           )};
       }

export default AdjustRecipeContainer;


