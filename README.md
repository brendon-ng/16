# Potluck

Welcome to Potluck, a platform to connect home chefs with customers.
#### See Demo and Screenshots
[Here](https://github.com/brendon-ng/16/wiki)

## Building and Deployment
[![Build Status](https://travis-ci.com/cs130-w21/16.svg?branch=master)](https://travis-ci.com/cs130-w21/16)
[![Release](https://img.shields.io/github/v/release/cs130-w21/template?label=release)](https://github.com/cs130-w21/16/releases/latest)

#### Requirements

- Node
- expo-cli (`$ npm install -g expo-cli`)
- Xcode (on Mac) for testing on simulator
- Expo Client on iOS or Android for testing on device

### To Build the App

- Run `npm start` from the home directory of the App repo to trigger Expo's build process
- Expo will open a Metro Bundler interface on your command line AND in a browser at http://localhost:19002/ with instructions on how to run the app on various platforms.

#### To Test on Simulator on Mac

- Open Xcode and go to Xcode -> Open Developer Tool -> Simulator
- Wait for simulator to start (only one simulator open at a time)
- In project directory: `$ npm start` 
- After it starts, press 'i' in the Metro Bundler command line interface or click 'Run on iOS Simulator' in the browser interface.
- https://youtu.be/0-S5a0eXPoc?t=878

#### To Test on Android Simulator

https://youtu.be/0-S5a0eXPoc?t=1087

#### To Test on Physical Device

- Make sure Expo Client is installed from App Store/Google Play Store
- Scan QR code from the Metro Bundler either in your browser or terminal which you npm started from

### Server Deployment
#### To Run Server Locally (for testing purposes)

Only works for testing on simulators being run on the same device as development
- Ensure that the propser secrets.js file is located in the backend/ directory
- run `backend/run_server.sh` to start the server with the master routes.js file from dev/master branch.
- if you have made any changes to route.js or any backend code, run `backend/run_server.sh <yourbranchname in github>` to create a local Docker container with your branch's backend code.
- Configure [Queries.js](https://github.com/cs130-w21/16/blob/master/app/util/Queries.js) to have `const ip='http://localhost` and `const port=8888` if running master routes.js or `const port=8080` if running new/changed backend code.

#### To Run Master Deployment Server Code on Remote AWS Server
The routes.js server process is continuously running on port 8888 of the AWS server.
- Ensure [Queries.js](https://github.com/cs130-w21/16/blob/master/app/util/Queries.js) is configured to have `const ip='http://3.141.20.190` and `const port=8888`.
- On any push to dev branch or master branch, Travis CI and the CICD pipeline will restart the server process with the updated code automatically.

#### To Run a Test Server Instance on Remote AWS Server
- Ensure [Queries.js](https://github.com/cs130-w21/16/blob/master/app/util/Queries.js) is configured to have `const ip='http://3.141.20.190` and `const port=8080` to communicate via the test port.
- On any push to a non-master branch (master, dev, or CICD), Travis CI and the CICD pipeline will check to see if you have made changes to the backend code and run a test server instance with the pushed development code on port 8080 of the server automatically.

## [API Documentation](https://cs130-w21.github.io/16/)

## Testing
Testing done via Travis CI and Jest can be run in the following ways
- To test, run `npm test` to run the Jest framework
- On any push to Github, Travis CI will automatically run the testing framework. Check the build status/build badge on your pushed commit(s) to check testing status.

## Project Information
We used an Agile process to build this app. See the [Projects](https://github.com/cs130-w21/16/projects) tab for the Scrum Board. All issues (stories, epics, bugs) are documented under the [Issues](https://github.com/cs130-w21/16/issues) tab. A user manual and app walkthrough is listed in the [Wiki](https://github.com/cs130-w21/16/wiki).
