-- Creating Tables: ingredients,Ratings,recipeIngredients and recipe

Create Table Ingredients(
	ingredientId serial primary key,
	item varchar(120) not null,
	allergy bit varying(1) not null,
	status bit varying(1) not null
);

Create Table Recipe(
	recipeId serial primary key,
	name varchar(120),
	instructions(1000) not null,
	cuisine varchar(120) not null,
	photo varchar(120),
	status bit varying(1) not null
);

Create Table RecipeIngredients(
	recipeId int not null,
	ingredientId int not null,
	constraint fk_recipeId foreign key (recipeId) 
	references recipe(recipeId),
	constraint fk_ingredientId foreign key (ingredientId) 
	references ingredients(ingredientId)
	
	
);

Create Table Rating(
	ratingId serial primary key,
	recipeId int not null,
	rating bit varying(1) not null,
	constraint fk_recipeId foreign key (recipeId) 
	references recipe(recipeId)
	
);
