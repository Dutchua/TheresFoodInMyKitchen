INSERT INTO ingredients (item, allergy, status) VALUES
			('Chicken', 0::bit, 0::bit),
	       ('Beef', 0::bit, 0::bit),
	       ('Fish', 0::bit, 0::bit),
	       ('Pork', 0::bit, 0::bit),
	       ('Eggs', 1::bit, 0::bit),
	       ('Cheese', 0::bit, 0::bit),
	       ('Milk', 0::bit, 0::bit),
	       ('Flour', 0::bit, 0::bit),
           ('Bread', 0::bit, 0::bit),
	       ('Rice', 0::bit, 0::bit),
	       ('Corn', 0::bit, 0::bit),
	       ('Pasta', 0::bit, 0::bit),
	       ('Onion', 0::bit, 0::bit),
	       ('Beans', 0::bit, 0::bit),
	       ('Potatoes', 0::bit, 0::bit),
	       ('Butter', 0::bit, 0::bit),
           ('Carrots', 0::bit, 0::bit),
	       ('Yogurt', 0::bit, 0::bit),
	       ('Garlic', 0::bit, 0::bit),
	       ('Tomatoes', 0::bit, 0::bit),
	       ('Honey', 0::bit, 0::bit),
	       ('Vinegar', 0::bit, 0::bit),
	       ('Cinnamon', 0::bit, 0::bit),
	       ('Salt', 0::bit, 0::bit),
	       ('Nuts', 1::bit, 0::bit),
	       ('Lettuce', 0::bit, 0::bit),
	       ('Peppers', 0::bit, 0::bit),
	       ('Broccoli', 0::bit, 0::bit),
	       ('Cucumber', 0::bit, 0::bit),
	       ('Avacado', 0::bit, 0::bit),
	       ('Spinach', 0::bit, 0::bit),
	       ('Cilantro', 0::bit, 0::bit),
		   ('Water', 0::bit, 0::bit),
		   ('Cayenne pepper', 0::bit, 0::bit),
		   ('Coriander', 0::bit, 0::bit),
		   ('Turmeric', 0::bit, 0::bit),
		   ('Cumin', 0::bit, 0::bit),
		   ('Curry powder', 0::bit, 0::bit),
		   ('Jalapeño pepper', 0::bit, 0::bit),
		   ('Black pepper', 0::bit, 0::bit),
		   ('Coriander', 0::bit, 0::bit),
		   ('Mint', 0::bit, 0::bit),
		   ('Sesame seeds', 0::bit, 0::bit),
		   ('Prawns', 1::bit, 0::bit),
	       ('masala', 0::bit, 0::bit),
	       ('lemon', 0::bit, 0::bit),
	       ('ginger ', 0::bit, 0::bit),
	       ('oil', 0::bit, 0::bit),
	       ('Pumpkin', 0::bit, 0::bit),
		   ('coconut milk', 1::bit, 0::bit),
		   ('Chillies,', 0::bit, 0::bit),
		   ('lime ', 0::bit, 0::bit),
		   ('black beans', 0::bit, 0::bit),
		   ('sour cream', 0::bit, 0::bit),
		   ('Mince', 0::bit, 0::bit),
		   ('butter beans', 0::bit, 0::bit),
		   ('tortilla chips', 0::bit, 0::bit),
		   ('paprika', 0::bit, 0::bit),
		   ('oregano', 0::bit, 0::bit),
		   ('baby marrow', 0::bit, 0::bit),
		   ('thyme', 1::bit, 0::bit),
		   ('mushrooms', 0::bit, 0::bit),
           ('Vegetable Stock', 0::bit, 0::bit),
           ('risotto', 0::bit, 0::bit),
           ('white wine', 0::bit, 0::bit),
           ('Minestrone', 0::bit, 0::bit),
           ('peas', 0::bit, 0::bit),
           ('mango,', 0::bit, 0::bit),
           ('chicken livers', 0::bit, 0::bit),
           ('peri-peri sauce', 0::bit, 0::bit),
           ('sugar', 0::bit, 0::bit),
           ('pineapple,', 0::bit, 0::bit),
           ('fish sauce', 0::bit, 0::bit),
           ('chorizo', 0::bit, 0::bit),
           ('bell pepper', 1::bit, 0::bit),
           ('chard stems', 0::bit, 0::bit),
           ('cream', 0::bit, 0::bit);


INSERT INTO Cuisine(
        cuisinetype)
	    VALUES('Indian'),
                ('Greek'),
                ('South African'),
                ('Mexican'),
                ('Mediterrean'),
                ('Portuguese'),
                ('Spanish'),
                ('Asian');


INSERT INTO recipe(
	description, instructions,  cuisineId, status)
	VALUES ( 'Indian Chicken Curry ','Sprinkle the chicken breasts with 2 teaspoons salt.
Heat oil in a large skillet over high heat; partially cook the chicken in the hot oil in batches until completely browned on all sides. Transfer browned chicken breasts to a plate and set aside.
Reduce the heat to medium and add onion, garlic, and ginger to the oil remaining in the skillet. Cook and stir until onion turns soft and translucent, 5 to 8 minutes. Stir curry powder, cumin, turmeric, coriander, cayenne, and 1 tablespoon of water into the onion mixture; allow to heat together for about 1 minute while stirring. Add tomatoes, yogurt, 1 tablespoon chopped cilantro, and 1 teaspoon salt to the mixture; stir to combine.
Return chicken breast to the skillet along with any juices on the plate. Pour in 1/2 cup water and bring to a boil, turning the chicken to coat with the sauce. Sprinkle garam masala and 1 tablespoon cilantro over the chicken.
Cover the skillet and simmer until chicken breasts are no longer pink in the center and the juices run clear, about 20 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C). Drizzle with lemon juice to serve.',1,0::bit),
('Spicy fish pancakes','Make a smooth batter by whisking the flour, water and eggs together.
Add the fish, spring onion and jalapeño.
Season with salt and pepper and some of your favourite chilli paste (to taste).
Heat some oil in a non-stick pan and add enough batter for one pancake. Lower the heat, cover with a lid and leave for 2–3 minutes. Turn the pancake over and cook for 1 minute on the other side. Slide onto a warm plate and make the rest of the pancakes.',2,0::bit),
('Aromatic Spicy Lamb Chops with Lemon-Herb Rice','First make the marinade. In a big bowl, mix together the yoghurt, lemon zest and juice, Rajah All-In-One Curry Powder, garlic and chopped coriander. Add a generous pinch of salt and pepper.
Add the lamb chops to the bowl and toss well to coat. Allow to marinate in the fridge for a minimum of two hours.
Cook your lamb chops over the fire, or in a griddle pan, until nicely charred and cooked to your liking.
Put the warm rice, lemon zest and juice, and chopped coriander into a bowl. Season to taste with salt and pepper and toss gently together.
Serve the lamb chops with the warm rice, garnished with extra coriander.
',3,0::bit),
('Roasted Pumpkin & Butter Bean Curry with Spiced Rice','Preheat the oven to 190 °C.
Peel your pumpkin and cut into rough (about 2cm) chunks. Put them onto a roasting tray lined with foil and drizzle over 30ml (2 Tbsp) of the sunflower oil. Season with salt, to taste. Roast for 30 to 40 minutes, or until golden and cooked through. Set aside.
Heat the remaining 30ml (2 Tbsp) sunflower oil in a pot over a medium heat. Add the onion and sauté for five minutes. Then add the garlic and ginger and cook for a further three minutes.
Stir in the Rajah Mild Masala Curry Powder, Robertsons Turmeric and Robertsons Crushed Chillies. Cook for another minute, until fragrant.
Add the chopped tomatoes and coconut milk. Stir well, bring to the boil, then turn down the heat and simmer for 45 minutes.
Add the roasted pumpkin cubes and butter beans to the pot, and simmer for a further 15 minutes. Season to taste with salt and lemon juice.
In the meantime, make the spiced rice. Heat the oil a pot over a medium-low heat. Add the Robertsons Turmeric, Robertsons Cumin, Robertsons Crushed Chillies and a pinch of salt and pepper. Cook for 30 seconds, until fragrant, then add the rice and the amount of water specified on the package instructions.
Cook the rice, again following the instructions on the package, until tender.
Serve the bean curry hot with the spiced rice and a garnish of fresh coriander.
',3,0::bit),
('Taco Bowl with Spicy Beans, Salsa, Avocado and Sour Cream','Heat the oil in a pan over a medium heat. Add the onion and garlic and sauté for about 8 minutes, until soft.
Add the tomato paste and Robertsons Crushed Chillies. Sauté for a further minute, until fragrant.
Add the contents of the sachet of Knorr Savoury Mince Dry Cook-in-Sauce and 600ml water, and stir well. Bring to the boil, then simmer for 10 to 15 minutes, until thickened.
Add the black beans and simmer for a further 5 minutes. Season to taste with lime juice and Robertsons Black Pepper.
In a bowl, mix together the sour cream and the Knorr Creamy Garlic & Herb Salad Dressing.
To assemble, put the beans in a big bowl. Serve with the sour cream mixture, salsa, mashed avocado, fresh coriander, lime wedges and tortilla chips.
',4,0::bit),
('Chilli Con Carne Tray Bake','Heat the oil in a large pan and cook the onions over medium heat for about 7 minutes until onions are soft and starting to brown, add the garlic, cumin, smoked paprika and oregano and cook for a further 2 minutes.
Add the mince and brown, about 5 minutes, breaking the mince clumps up as they form.
Then add the baby marrow and beans.
Add the sachet of seasoning mix from the Knorr Lasagne Mate Mince Lasagne to 600 ml of boiling water, stirring briskly so the sauce doesn’t form lumps, and add, along with the pasta, to the mince.
Pour mixture into a baking dish and spread out evenly.
Empty the contents of the cheese sauce sachet from the Knorr Lasagne Mate Mince Lasagne into a jug, add 400ml hot milk and mix well for a minute. Pour over the pasta and spread out evenly. Sprinkle with cheese.
Turn your ovens grill up high and position a rack close to the grill. Grill the chilli con carne for 10 minutes or until golden (make sure to keep an eye on it).
Serve with dollops of sour cream, and fresh salsa.
Bring to the boil, stirring occasionally. Reduce the heat and simmer for 10 minutes.
',4,0::bit),
('Barley Risotto with Mushrooms, Peas and Vegan Cheese','Heat the oil in a pan over a low heat.
Add the onion, garlic and thyme. Cook gently until soft, stirring occasionally. Be sure to not let it catch or burn.
Add the mushrooms and continue to cook until soft.
Meanwhile, put your dissolved Knorr Vegetable Stock in a separate pot on the stove top over a medium heat, this must be warm when adding it to the risotto later.
Turn the heat up to high, and add the pearl barley. Saute, stirring constantly for 2 minutes, then deglaze with the white wine, and add the contents of Knorr Tasty Minestrone with Robertsons Mixed Herbs.
Let the white wine simmer until almost completely evaporated.
Start adding your stock, ½ a cup at a time, stirring gently constantly until evaporated, then add your second ½ cup, repeat this process until the texture is right – the barley should still be al dente.
Remove from the heat, stir in the peas and vegan cheese. Season to taste with salt, Robertsons Black Pepper and lemon juice.
Serve hot with extra cheese grated on top.
',5,0::bit),
('Flavourful Mango, Avo and Beef Strip Salad','Season the sirloin steaks liberally with Robertsons Steak & Chops Spice.
Get a skillet scolding hot on the stove.
Add the olive oil to the skillet, pan fry the steaks for 1 minute and 30 seconds on each side. Remove from the pan and set aside.
For the dressing, pulse all of the ingredients together. Remove from the blender. Season to taste.
Assemble the lettuce, baby spinach, red onion, mango and avocados on a platter.
Thinly slice the sirloin, trimming of excess fat or sinew. Add the thinly sliced sirloin to the salad platter.
Drizzle the dressing over the salad and top with crunchy peanuts & fresh coriander.
',5,0::bit),
('Peri Peri Chicken Livers','Heat 30 ml oil in a large pan and fry the chicken livers in batches until well browned on the outside, seasoning with freshly cracked salt and black pepper.
Remove from the pan and set aside.
Heat the remaining oil and fry the onion until golden brown then add the garlic, ginger and paprika and continue to fry.
Add the tomatoes, KNORR Chicken Stock Pot and peri-peri sauce, stir well and simmer on a low heat for 10 - 15 minutes to allow the sauce to reduce and thicken.
Return the livers to the pan, gently fold them through the sauce then simmer for a further 5 minutes.
Before serving taste to check the seasoning and if necessary adjust the acidity of the sauce by adding a little sugar.
',6,0::bit),
('Prawn and Pineapple Fried Rice','Heat half the oil in large pan or wok, add the spring onions and cook for 1 minute.
Add the Rajah All-In-One Curry Powder, chilli, ginger and garlic and cook for 2 minutes, stirring.
Add some more oil, then add the prawns, stirring to coat them with the contents of the pan.
Move the prawns to the side of the pan to continue cooking. Tilt the pan and break in the eggs. Stir them around for about 2 minutes, as if you are making scrambled eggs.
Now add the cooked rice and mix everything together well. Stir in the pineapple, fish sauce, chicken stock and green beans.
When the rice has heated through and the flavours are well combined, serve scattered with toasted cashews, chopped spring onions and coriander.',8,0::bit),
('SPANISH FRITTATA','Preheat oven to 375°.
Heat oil in a 10-inch ovenproof nonstick or cast-iron skillet over medium.
Add chorizo, onion, bell pepper, poblano, and chard stems; sauté 2 minutes. Stir in chard leaves, garlic, and pepper flakes; cook until chard leaves wilt, 1 minute.
Whisk together eggs, cream, manchego, and salt; stir into chorizo mixture and cook until eggs begin to set, 3–5 minutes. Transfer skillet to oven.
Bake frittata until center is set, 15–20 minutes; remove from oven and let rest 5 minutes.
Loosen frittata edges and bottom from skillet with a spatula.
Flip frittata onto a large plate, then invert onto a serving platter.',7,0::bit)
;

INSERT INTO rating(
	 recipeid, rating)
	VALUES ( 1, 0::bit),
	       ( 2, 0::bit),
		   ( 3, 0::bit),
		   ( 4, 0::bit),
		   ( 5, 0::bit),
		   ( 6, 0::bit),
		   ( 7, 0::bit),
		   ( 8, 0::bit),
		   ( 9, 0::bit),
		   ( 10, 0::bit);


INSERT INTO recipeingredients(
	recipeid, ingredientid)
	VALUES (1, 1),
	        (1, 24),
	        (1, 49),
	        (1, 13),
	        (1, 19),
	        (1, 38),
	        (1, 37),
	        (1, 36),
	        (1, 18),
	        (1, 33),
	        (1, 41),
	        (1, 34),
	        (1, 20),
	        (1, 32),
	        (1, 44),
	        (1, 45),
	        (1, 47),
	        (2, 8),
	        (2, 33),
	        (2, 5),
	        (2, 3),
	        (2, 13),
	        (2, 39),
	        (2, 24),
	        (2, 27),
	        (2, 48),
	        (3, 18),
	        (3, 45),
	        (3, 38),
	        (3, 19),
	        (3, 41),
	        (3, 24),
	        (3, 27),
	        (3, 45),
	        (3, 10),
            (4, 49),
            (4, 48),
            (4, 24),
            (4, 13),
            (4, 19),
            (4, 47),
            (4, 44),
            (4, 38),
            (4, 36),
            (4, 20),
            (4, 50),
            (4, 56),
            (4, 45),
            (4, 10 ),
            (4, 37),
            (4, 27),
            (4, 33),
            (5, 48),
            (5, 13),
            (5, 19),
            (5, 20),
            (5, 51),
            (5, 55),
            (5, 33),
            (5, 53),
            (5, 27),
            (5, 54),
            (5, 19),
            (5, 30),
            (5, 41),
            (5, 52),
            (5, 57),
            (6, 13),
            (6, 19),
            (6, 37),
            (6, 58),
            (6, 59),
            (6, 13),
            (6, 60),
            (6, 14),
            (6, 12),
            (6, 33),
            (6, 7),
            (6, 6),
            (6, 51),
            (6, 54),
            (7, 2),
            (7, 48),
            (7, 26),
            (7, 31),
            (7, 13),
            (7, 68),
            (7, 30),
            (7, 25),
            (7, 41 ),
            (8, 69),
            (8, 24),
            (8, 40),
            (8, 48),
            (8, 13),
            (8, 19),
            (8, 47),
            (8, 58),
            (8, 20),
            (8, 70),
            (8, 71),
            (9, 48),
            (9, 13),
            (9, 38),
            (9, 51),
            (9, 47),
            (9, 19),
            (9, 44),
            (9, 5),
            (9, 10),
            (9, 72),
            (9, 73),
            (9, 14),
            (9, 25 ),
            (9, 41),
            (10, 74),
            (10, 13),
            (10, 75),
            (10, 76),
            (10, 19),
            (10, 40),
            (10, 5),
            (10, 77),
            (10, 24)
	;

