8.4 It's Time to Make the Donuts
https://www.youtube.com/watch?v=petqFm94osQ

Batch Maker, Batch Maker, make me a batch!
Overview
A local baker has approached Carolina Code School with an application idea. The baker talked to Dietz first, so he drew up wireframe images that are attached. You can use the wireframes for inspiration, but reproducing a layout that looks like the wireframes in not a requirement (NOTE: wireframes include features from all 3 Modes).

Problem
The baker needs to be able to scale recipes up and down depending on the yield or the availability of a certain ingredient. They currently use an extremely complex Excel doc. It's a real pain.

Who would use this app?
Bakers. Bakers would use excel or calculators to manually adjust their recipes based on the needs of that day or available ingredients. This is time consuming, tedious, and has a high risk of error. Because lots of bakers do this, we think lots of people would like an app that

Objectives
After completing this assignment, you should be able to:

Demonstrate understanding of React.js Components
Demonstrate understanding of Django
Demonstrate user auth with Django Rest Framework
Details
Instructions
 Review the wireframes
 Configure an API app with Django Rest Framework for your project
 Build user signup and login using django auth
 Build your Batch Maker app with react and allow users to manage their recipes
Requirements
No ESLint warnings or errors
Use Bootstrap to get at least the default styles.
Use React for the recipe batch adjustment screen
Enforce that users are logged in to see their data using django auth and django rest framework
I'm a Full Stack Developer Mode
 Create an AdjustRecipe component that takes a recipe object as a prop. You don't need to start with ajax requests, you can just create some client side data.


 Create a App, RecipesList, and RecipeForm component to add CRUD functionality.
 Create links to allow the user to switch between the different components. The Bootstrap nav bar is useful for this sort of thing.
 Build a signup form
 Build a login form
 Connect your signup form and login forms to django users
 Connect your RecipeForm, RecipesList, and any other components to django rest framework
 There needs to be an option to change the unit of measurement per ingredient (ounces or pounds).
 There needs to be the ability to specify the yield number and yield name (scones, loaves, cookies, etc).
 Bakers should be able to enter in their own ingredients
Hey Mikey, I Think He Likes It Mode
 Add a “notes” section to allow bakers to enter in notes about the recipe (bake time, instructions, etc).
 When creating an ingredient allow the baker to provide brand or type of that ingredient. Bakers should also enter in the price of that ingredient to calculate overall cost.
 On the batch screen add an option to change the type of measurement by weight (imperial or metric).
 When a recipe is created, a baker should be able to specify the type of measurement (grams or cups) of the recipe.
Caffeinated Mode
 Turn Batch Maker into a social site! Allow bakers to share their recipes with others.
 Implement the other features shown in the wireframes.
Wireframes
Home


New Recipe 1


New Recipe 2


Recipe Preview