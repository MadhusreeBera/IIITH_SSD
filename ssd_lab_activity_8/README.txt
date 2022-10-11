client
- execute: npm start
- running on port 3000 in dev mode
- created component for register /login
- user will be redirected to /login route if not logged in
- fetch api is used to make post request to server

server
- execute: node index.js
- running on port 5000 in dev mode
- created User and Query schema
- registering user : first checks if Roll number already exists in database
- adds new user if user already doesn't exist
- stores password by hashing using bcryptjs
- express-session is used for session based authentication 
