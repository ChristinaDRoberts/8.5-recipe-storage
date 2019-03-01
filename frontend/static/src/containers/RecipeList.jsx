import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';

class RecipeListContainer extends Component{


    render(){
        return(
            <div>
                <h1>Testing Recipe List</h1>
                <RecipeTable/>
            </div>

        )
    }
}


class RecipeTable extends Component{

    render(){
        return(
            <div>
                <h4>recipe table item</h4>
            </div>
        )
    }
}

export default RecipeListContainer