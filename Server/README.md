# Common Ground Express Node.js Server
Common Ground's Backend Server using Passport Authentication and a MongoDB Database
## Getting Started
This server should be already running remotely on our Microsoft Azure VM hosted here:
`http://20.172.243.184:3000/`

If you want to run the server locally follow these steps:

- Clone the repo and navigate to this Server folder
- Create a .env file with the following contents (tab 1): https://www.protectedtext.com/commongroundseniorproject
  - Password will be in canvas submission
- `npm install` to install all required dependencies
- `npm run dev` to run a local development server
  - Alternatively you can build the server with `npm run build` and start it using `npm run start`
  
## Code Overview
### Main Dependencies
- expressjs - The server for handling and routing HTTP requests
- mongoose - Maps MongoDB data to Javascript
- passport - Handles user authentication
- express-session - Handles user sessions

### Application Structure
- `app.ts` - Where the express server is defined and the middlewares and routes are set up
- `index.ts` - Main entrypoint where we pass in the routes and instantiate the app created in `app.ts`
- `middlewares/` - This folder contains middleware initialization and locally defined middlewares
- `routes/` - This folder contains the route definitions for our API
- `controllers/` - This folder contains the controller (callback functions for routes) definitions for our API
- `services/` - This folder contains the service (data access and processing for controller) definitions for our API
- `models/` - This folder contains the schema definitions for the Mongoose models
- `interfaces/` - This folder contains the typescript interfaces for the data we are dealing with (User, Group, etc.)

