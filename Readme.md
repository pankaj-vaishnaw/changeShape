# index.html
in this we have one main container which holds full size and width 
then we have container which is for circle 
then we have <div> for the shape and next two <div> is for <button> which will used as changing shape and color 

# index.js
first we have created an array which contains diffrent types of color 
then we declared variable for index which is initially 0 and one is isTriangle which value is false declared

then we are getting the div color and shape from html

# calling the function with add event listener
then we are having event listener which is onclick event on clicking we are calling the functions

# change color function 
in this we are checking the condition that inex is equal than length than it will return index as 0 else it with change the background of that div by onlicking and on each click we are making index value in incresing order

# change Shape function
in this we are gonna check the shape inside the circle div that what shape is now 
firstly we are checking the condition that if it is a triangle thenwe getting the innerShape id from html and according to css the shape will we described and will return true 

else it will return the initial shape that has been created which is rectangle 