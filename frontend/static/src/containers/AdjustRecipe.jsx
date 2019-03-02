import React, { Component } from 'react';
// import {Container} from "react-bootstrap";
// // import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";

class AdjustRecipeContainer extends Component{

    render(){

       return(

            <div className="col10">
                <Col className="Main" md={8}>
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
                                   <li>testing</li>
                                   <li><input type="checkbox"></input>Chocolate Powder</li>
                                   <li><input type="checkbox"></input>Milk</li>
                                   <li><input type="checkbox"></input>Eggs</li>
                                   <li><input type="checkbox"></input>Baking Powder</li>
                                   <li><input type="checkbox"></input>Sugar</li>
                                   <li><input type="checkbox"></input>Frostin</li>
                                   <li><input type="checkbox"></input>Cream Cheese</li>
                                   <li><input type="checkbox"></input>Powdered Sugar</li>
                                   <li><input type="checkbox"></input>Love</li>
                               </ul>
                           </div>
                       </div>
                </Col>
            </div>


           )};
       }

export default AdjustRecipeContainer;


