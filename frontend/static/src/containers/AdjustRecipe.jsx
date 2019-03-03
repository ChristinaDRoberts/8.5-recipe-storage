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
                               Makes <input id="servingResult" type="text"/> Servings
                           </div>
                           <div>
                               <button className="adjustButton">Adjust</button>
                           </div>
                           </header>
                           <div className="ingredientListCB">
                               <ul>
                                   {/*use map here to print out list of ingredients*/}
                                   <li>testing</li>
                                   <li><input type="checkbox"></input></li>
                                   <li><input type="checkbox"></input></li>
                                   <li><input type="checkbox"></input></li>
                                   <li><input type="checkbox"></input></li>
                                   <li><input type="checkbox"></input></li>
                                   <li><input type="checkbox"></input></li>
                                   <li><input type="checkbox"></input></li>
                                   <li><input type="checkbox"></input></li>
                                   <li><input type="checkbox"></input></li>
                               </ul>
                           </div>
                       </div>
                </Col>
            </div>


           )};
       }

export default AdjustRecipeContainer;


