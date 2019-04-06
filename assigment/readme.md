The backend can be found here.</br>
I had to write the frontend for it using the following:
- HTML
- CSS
- Javascript with jQuery

The following methods found in the server with these urls:
- manufacturers: returns a json containing every manufacturer in the "database"
- manufacturerNames: return the names of the manufacturers. Should be used in forms
- cars: returns a json containing every car in the "database"
- manufacturer: returns the cars that belong to that manufacturer stored in cookies
- addCar: adds a new car to the "database". If there is a car with that name in the db returns a 409 http error code.
- addManufacturers: see addCar, but with manufacturer
- /: returns the index.html stored in the student folder which you have to create.
