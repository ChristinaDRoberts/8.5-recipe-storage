import React, { Component } from 'react';

import {Col} from "react-bootstrap";

class AdjustRecipeContainer extends Component{

    // MAKE AN API REQUEST FOR THAT SPECIFIC RECIPE
    componentWillMount() {


        const conf = {
            method: "GET",
            body: JSON.stringify(),
            headers: new Headers({"Content-Type": "application/json"})


        };


        fetch('/api/recipe/').then((response) => {
            if (response.status !== 200) {
                return this.setState({placeholder: "Something went wrong"});
            }
            return response.json();

        }).then((data) => {
            this.setState({recipeCollection: data, loaded: true});
            // GET ELEMENT BY THE ID ASSOCIATED WITH PICTURE AND SEND THAT INFO TO POPULATE
            // THE RECIPE ADJUST FORM


            console.log("state", this.state);


        });
    }




    render(){
        console.log(this.props);
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

                               </ul>
                           </div>
                       </div>
                </Col>
            </div>


           )};
       }

export default AdjustRecipeContainer;


