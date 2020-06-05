# ASSESSMENT 6: Interview Practice Questions
Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: foriegn key name would be the animal_id and it is the part of the Sightings model 

  Researched answer: foreign key points to the one particilar row in another table. foriegn key name would be the animal_id and it is the part of the Sightings model 



2. Which routes must always be passed params and why?

  Your answer: update and create because it needs input to create/update data

  Researched answer: update and delete always needs params to perform specific action to the specific data.



3. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess".

  Your answer: get '/guess' => 'main#game' (???....not sure)



4. Name three rails generator commands. What is created by each?

  Your answer: rails g model(creating a model. It needs column names and dataype), rails g migration(making changes of schemas), rails g controller (creating a model controller)


  Researched answer: 
  -rails g resource : You enter the name of the resource you want to create along with the table column names and types. You can even assign foreign keys in this line of code so that you save time. Generating a resource does everything generating a model does, but it also creates a resource in the routes.rb file and an empty folder in the views.
  -rails g controller : When you use rails g controller and specify the method names, the generator only maps specific routes to the routes file. rails g resource assumes that you want the whole resource functionality and will map resources.
  -rails a model: creates a new table of the model 

  





5. Consider the Rails routes below. Describe the responsibility of each route.

/users        method="GET" :display a list of all users

/users/1      method="GET" :display a specific user of id 1

/users/new    method="GET" : return an HTML form for creating a new user

/users/       method="POST": create a new user

/users/1      method="PUT" : update a specific user (id 1)

/users/1      method="DELETE": delete a specific user (id 1)
