import React, { Component } from 'react';

import {Row} from 'react-bootstrap';
import Col from 'react-bootstrap/Col'

import '../App.css'


class RecipeListContainer extends Component{
    constructor(props){
        super(props);
    }


    render() {
       return (

              <Col  className="FoodList"    sm={10}>


                  {/*MAKE A NEW ROW HERE THAT IS DYNAMIC TO NEW RECIPES THAT ARE ADDED*/}

                            {/*<Row>*/}
                                {/*<RecipeTable/>*/}
                            {/*</Row>*/}

                            <Row>
                                <div className="rec">

                                    <li><button  onClick={(e) => {this.props.route("RecipeForm")}}><img src="https://cdn1.iconfinder.com/data/icons/mix-color-3/502/Untitled-43-512.png" alt="" id="greybox"/></button></li>
                                    <li><button  onClick={(e) => {this.props.route("AdjustRecipe")}}><img src="https://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastaveg_640x480.jpg" alt=""/></button></li>
                                    <li><button  onClick={(e) => {this.props.route("AdjustRecipe")}}><img src="https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?cs=srgb&dl=close-up-cooking-dinner-46239.jpg&fm=jpg" alt=""/></button></li>
                                    <li><button  onClick={(e) => {this.props.route("AdjustRecipe")}}><img src="https://dimirealestate.com.au/wp-content/uploads/2018/05/dieta-low-carb-1.jpeg" alt=""/></button></li>
                                    <li><button  onClick={(e) => {this.props.route("AdjustRecipe")}}><img src="https://fshomecare.com/wp-content/uploads/bigstock-salmon-fillet-with-vegetables-76601543.jpg" alt=""/></button></li>

                                    {/*<li key={item.id} onClick={()=>this.fetchRecipe(item.id)}><a href=""><img src="" alt=""/></a></li>*/}

                                </div>
                            </Row>
                            <hr/>

                             <Row>
                                <div className="rec">
                                    <li><button  onClick={(e) => {this.props.route("AdjustRecipe")}}><img src="https://data.whicdn.com/images/8411081/large.jpg" alt=""/></button></li>
                                    <li><button  onClick={(e) => {this.props.route("AdjustRecipe")}}><img src="https://cdn.jamieoliver.com/home/wp-content/uploads/2016/06/2.jpg" alt=""/></button></li>
                                    <li><button  onClick={(e) => {this.props.route("AdjustRecipe")}}><img src="https://www.cheflingkitchen.com/wp-content/uploads/2018/10/Chinese.jpg" alt=""/></button></li>
                                    <li><button  onClick={(e) => {this.props.route("AdjustRecipe")}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuHCLMxfElMYESquJmtFglTZWQ2Ggsl7P8e4oQD5f54O_P0uvJ" alt=""/></button></li>
                                    <li><button  onClick={(e) => {this.props.route("AdjustRecipe")}}><img src="http://static.asiawebdirect.com/m/bangkok/portals/bangkok-com/homepage/food-top10/pagePropertiesImage/thai-som-tum.jpg.jpg" alt=""/></button></li>
                                </div>
                             </Row>
                            <hr/>

                            <Row>
                                <div className="rec">
                                    <li><button  onClick={(e) => {this.props.route("AdjustRecipe")}}><img src="https://d2droglu4qf8st.cloudfront.net/2016/03/270659/recipe-27765_ExtraLarge1000_ID-1540988.jpg?v=1540988" alt=""/></button></li>
                                    <li><button  onClick={(e) => {this.props.route("AdjustRecipe")}}><img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/9/17/3/WU0603H_Pepperoni-Pizza_s4x3.jpg.rend.hgtvcom.406.305.suffix/1433674887844.jpeg" alt=""/></button></li>
                                    <li><button  onClick={(e) => {this.props.route("AdjustRecipe")}}><img src="https://www.africanbites.com/wp-content/uploads/2017/09/IMG_4590.jpg" alt=""/></button></li>
                                    <li><button  onClick={(e) => {this.props.route("AdjustRecipe")}}><img src="https://www.thefoodiewhisperer.com/wp-content/uploads/2016/04/IMG_0879.jpg" alt=""/></button></li>
                                    <li><button  onClick={(e) => {this.props.route("AdjustRecipe")}}><img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/8/15/0/CCTIA0301_Seafood-Paella_s4x3.jpg.rend.hgtvcom.826.620.suffix/1502826649304.jpeg" alt=""/></button></li>
                                </div>
                            </Row>
                            <hr/>

                            <Row>
                                <div className="rec">
                                    <li><button  onClick={(e) => {this.props.route("AdjustRecipe")}}><img src="https://404store.com/2017/12/09/yummy-foods-8-widescreen-wallpaper.jpg" alt=""/></button></li>
                                    <li><button  onClick={(e) => {this.props.route("AdjustRecipe")}}><img src="https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/buffalo-wings.jpg" alt=""/></button></li>
                                    <li><button  onClick={(e) => {this.props.route("AdjustRecipe")}}><img src="https://www.thecookierookie.com/wp-content/uploads/2018/06/sweet-and-sour-chicken-recipe-5-of-9.jpg" alt=""/></button></li>
                                    <li><button  onClick={(e) => {this.props.route("AdjustRecipe")}}><img src="https://5.imimg.com/data5/PQ/FW/GLADMIN-62341300/north-indian-food-500x500.png" alt=""/></button></li>
                                    <li><button  onClick={(e) => {this.props.route("AdjustRecipe")}}><img src="https://images.scrippsnetworks.com/up/tp/Scripps_-_Food_Category_Prod/592/178/0271153_16x9.jpg" alt=""/></button></li>
                                </div>
                            </Row>
                            <hr/>


                            <Row>
                                <div className="rec">
                                    <li><button  onClick={(e) => {this.props.route("AdjustRecipe")}}><img src="https://moorefamilydentist.com/wp-content/uploads/2018/11/turkey-day.jpg" alt=""/></button></li>
                                    <li><button  onClick={(e) => {this.props.route("AdjustRecipe")}}><img src="https://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2017/07/main/penne-herbs-tomatoes-peas-ck.jpg?itok=NVX6SbD0" alt=""/></button></li>
                                    <li><button  onClick={(e) => {this.props.route("AdjustRecipe")}}><img src="https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/08/gnocchi-with-mushrooms.jpg?itok=liX90eix" alt=""/></button></li>
                                    <li><button  onClick={(e) => {this.props.route("AdjustRecipe")}}><img src="https://img.taste.com.au/-GUVgpcf/w1200-h630-cfill/taste/2016/11/vegetarian-lasagne-96693-2.jpeg" alt=""/></button></li>
                                    <li><button  onClick={(e) => {this.props.route("AdjustRecipe")}}><img src="http://www.chewoutloud.com/wp-content/uploads/2018/03/The-best-Vegetarian-Chili-0.jpg" alt=""/></button></li>
                                </div>
                            </Row>

                        </Col>




        )
    }
}


// class RecipeTable extends Component{
//
//     render(){
//         return(
//             <div>
//                 write a map function or to list dynamic recipes
//                  make it only keep last 5 in the recipeCollection list from API
//             </div>
//         )
//     }
// }

export default RecipeListContainer;