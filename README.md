# <<SETUP UI COMPONENT>>

# Step1: Setup Component

# Step2: Adding Navigation bar => header file

# Step3: Creating a Recipe Model => Create recipe.model.ts( Khai báo type variable)

# Step4: Adding Content to the Recipes Components=> Create Recipe Object( cant new Recipe and import Data to object Recipe)

# Step5: Outputing a List of Recipes with ngFor( Using \*ngFor to render list Recipes)

# Step6: Display Recipe Details( Add element in Detail Component)

# Step7: Working on the ShoppingListComponent( Handling Shopping list, create Ingredient[])

# Step8: Creating Ingredient Model( shortcut class Ingredient)

# Step9: Creating and Outputing the Shopping List( Use \*ngFor render shopping item in Ingredients List )

# Step10: Adding a Shopping List Edit Section( Create Shopping Eidt Component)

# <<SETUP COMPONENT DATABINDING>>

# Step11: Adding Navigation with Event Binding( handle in app.compoennt.html, using @Output() Event Emitter to switch 2 tab)

# Step12: Passing Recipe Data with Property Binding( Binding recipe-list <-> recipe-item, Using @Input to tranfer data)

# Step13: Passing Data with Event and Property Binding( click item in recipe List -> render to recipe deatail)( Step emit data hơi chuối giữa các component)

# Step14: Allowing the User to Add Ingredients to the Shopping List( Collect value from form #nameInput, #amountInput, handle Submit click=> onAddItem, using ViewChild, using Output ingredientAdded(data), Thêm item vào shopping list)

# <<Directives>>

# Step15: Building and Using a Dropdown Directive( Create file dropdowndirective using HostBinding and HostListener to handle click button to dropdown menu List)

# <<Service & Dependency Injection>>

# Step16: Setting up the Services( Create recipe.service file )

# Step17: Managing Recipes in a Recipe Service(1. Move Recipe List form recipe list file to recipe service 2. create function getRecipes())

# Step18: Using a Service for cross-Component Comunication( 1.Remove event in recipe-item file 2. Create recipeSelected eventEmmitter in recipeService file and subscribe eventEmiter)

# Step19: Adding the Shopping list Service(1. Move shopping list array to shopping-list.service file, 2. create fucntion getShoppingList 3. create function add ingredient& Method ingredient add ingredient)

# Step20: Using Services for Pushing Data from A to B( Create event emitter follow ingredient list change-> subscribe event emit => re-assigned to ingredient present)

# Step21: Adding Ingredients to Recipes( In recipe.Service file add to new array Ingredient to render in at recipe-detail file)

# Step22: Passing Ingredients from Recipes to the Shopping List( via a Service) (Using @Injectable() ) (Add Click button Add Ingredients to Shopping List, Injectatble để kết nối 2 file service lại với nhau)

# MyFirstApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
