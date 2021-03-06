[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=5567785&assignment_repo_type=AssignmentRepo)
# a099 Simon Says Final Project
## ****Description**** 
The Simon game is a simple memory game in which players must repeat random sequences of lights by pressing the colored pads in the correct order. Simon will display a sequence and the user adds to the sequence throughout the game and follows the onscreen instructions. Our game uses html for the majority of the frontend framework and JavaScript for the forms as well as connecting the frontend to the database. Lastly SQL is used for our user database that will track user's login information as well as their high scores. 
## ****Installation/Run Procedure and Dependencies****
Required dependencies for this project are better-sqlite3, browser-sync, bulma, concurrently, cors, express, and md5. 

- To install browser-sync, run the $ npm install browser-sync command to install and $ npx browser-sync start -sw to start the browser.
- Bulma can be installed as a dependency using $ npm install bulma command.
- We can install express using $ npm install express command. This will be used as a web server for our API
- Then we install the md5 package for our passwords using the $ npm install md5 command.
- We need a database for which we use JS implementation of a sqlite3 database. This can be done through the $ npm install better-sqlite3 command.
- In addition, we need another package to make our client and server run concurrently through $ npm install concurrently.

The game will be run through browser-sync and launched via a localhost. From there, users may enter their login information and begin playing the game.
## ****Demo****

https://youtu.be/r9cgi0uapzk

## ****Credit and License****

- Front End Lead/Plan Manager – Maya Agnihotri
- Back End Lead – Cole Hoffman
- Database Lead – John Poltorak
- Design Lead/Review Manager – Ellen Hayes
- Documentation Manager - Aryaman Agrawal

We also met with Rushil Shah for guidance on this project

License documentation inlcuded in LICENSE file.

