import React, { Component } from 'react';

class AdjustRecipe extends Component{


   render(){
       return(
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
       )
   }

}


export default AdjustRecipe