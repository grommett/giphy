This app uses `http-server` and serves files out of the `build` directory.

### Set Up

You'll need to provide an api key in:
`src/js/service-giphy.js` on line 1.

### Start

After you added the API key in the step above run:

`npm install && npm run start`

If nothing is already running on port `8080` you should be able to view the application at http://localhost:8080/. Check console output to verify where the app is running.

### Dev

After making changes:
`npm run build`. There is no watch process at the moment :(
