ONLINE STORE API
================
Base URI: http://localhost:3000/v1


SETUP
-----
1. Install dependencies:
   npm install

2. Start the server:
   npm start

3. Open browser or use Postman/Thunder Client to test endpoints.


RESOURCES
---------
  /v1/products
  /v1/orders
  /v1/users


ENDPOINTS
---------

--- PRODUCTS ---

GET /v1/products
  Fetch all products.

GET /v1/products/:id
  Fetch a single product by ID.
  Example: GET /v1/products/101

GET /v1/products?category=electronics&sort=price_asc&limit=10
  Filter, sort, and paginate products.
  Query params:
    category  → electronics | footwear | fitness
    sort      → price_asc | price_desc | name_asc
    limit     → number (e.g. 3)

GET /v1/products/:productId/reviews
  Fetch all reviews for a specific product.
  Example: GET /v1/products/101/reviews


--- ORDERS ---

POST /v1/orders
  Create a new order.
  Body (JSON):
    {
      "userId": 1,
      "productId": 101,
      "quantity": 2
    }

DELETE /v1/orders/:id
  Delete a specific order by ID.
  Example: DELETE /v1/orders/1001


--- USERS ---

GET /v1/users
  Fetch all users.

GET /v1/users/:userId/orders
  Fetch all orders belonging to a specific user.
  Example: GET /v1/users/1/orders


HTTP STATUS CODES
-----------------
  200 OK                  → Successful request (GET, DELETE)
  201 Created             → Resource successfully created (POST)
  400 Bad Request         → Missing or invalid fields in request body
  404 Not Found           → Resource does not exist
  500 Internal Server Error → Unexpected server-side failure


SAMPLE TEST DATA
----------------
  Product IDs : 101, 102, 103, 104, 105, 106
  Order IDs   : 1001, 1002, 1003, 1004, 1005
  User IDs    : 1, 2, 3
