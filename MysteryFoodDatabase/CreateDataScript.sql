
CREATE TABLE ingredients(
	ingredientId SERIAL PRIMARY KEY,
	item CHARACTER VARYING(120) NOT NULL,
	allergy BIT(1) NOT NULL,
	status BIT(1) NOT NULL
);

CREATE TABLE Recipe(
	recipeId SERIAL PRIMARY KEY,
	description CHARACTER VARYING(120) NOT NULL,
	instructions CHARACTER VARYING(10000)NOT NULL,
	cuisineId INTEGER NOT NULL,
	imageUrl CHARACTER VARYING(120) NULL,
	status BIT(1) NOT NULL
);

CREATE TABLE RecipeIngredients(
	recipeId INTEGER NOT NULL,
	ingredientId INTEGER NOT NULL,
	CONSTRAINT fk_recipeId FOREIGN KEY (recipeId)
	REFERENCES recipe(recipeId),
	CONSTRAINT fk_ingredientId FOREIGN KEY (ingredientId)
	REFERENCES ingredients(ingredientId)
	
	
);

CREATE TABLE Rating(
	ratingId SERIAL PRIMARY KEY,
	recipeId INTEGER NOT NULL,
	rating BIT(1) NOT NULL,
	CONSTRAINT fk_recipeId foreign key (recipeId)
	references recipe(recipeId)
	
);


CREATE TABLE Cuisine(
	ratingId SERIAL PRIMARY KEY,
	cuisineType CHARACTER VARYING(120) NOT NULL
);

CREATE TABLE userInfo(
	userId SERIAL PRIMARY KEY,
	userEmail CHARACTER VARYING(120) NOT NULL,
	userPassword CHARACTER VARYING(200) NOT NULL,
	Name CHARACTER VARYING(120) NOT NULL,
    Surname CHARACTER VARYING(120) NOT NULL,

);

