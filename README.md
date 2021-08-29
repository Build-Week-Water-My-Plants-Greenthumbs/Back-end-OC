# API Documentation for Water My Plants

Please follow this link to check if the API is running: [Heroku API Link](https://build-water-plants.herokuapp.com/api/).
If this page is not up, then the API is temporarily down. Please notify me if you receive an error page. 

## Object Shapes
### Registration

### Plant Creation 
  - `nickname` - required
  - `species` - required
  - `water_schedule` - required
  - `image` - optional
**Note: You do not have to submit a plant id. This is automatically created by the database**

## Available Endpoints

Default URL: https://build-water-plants.herokuapp.com/api/

### Login/Registration

`[POST] /api/register`
  - This endpoint allows registration of new users. 
  - Each registration must include `username`, `phoneNumber`, and `password`.

 `[GET] /api/login`
  - This endpoint should be used to login. 
  - Each login attempt must include `username` and `password`.

### Plant CRUD Operations
**Note: You must be logged in to execute the following operations. Each endpoint checks for a `token` before allowing access.**

`[GET] /api/plants`
- This returns a list of created plants. For example: `{"plant_id":number,"nickname":"foo","species":bar,"water_schedule":string,"image":null}`

`[POST] /api/createPlant`
  - This endpoint adds a new plant to track. Once created, you will receive a confirmation with the submitted plant information.  
  - A `plant_id` is automatically created. You must include: `nickname`, `species`, and `water_schedule`

`[POST] /api/updatePlant/:id`
  - This endpoint updates the value of the specified plant using the provided `id`. This correlates to the created `plant_id`.
  
`[DELETE] /api/deletePlant/:id`
  - This endpoint will delete the specified plant using the provided `id`. This correlates to the created `plant_id`.


