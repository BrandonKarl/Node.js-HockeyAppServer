# Node.js-HockeyAppServer

## Description

This is the server for a personal non-commercial, ice hockey NHL statistics database site I am working on. This database holds team information from the 2015-2016 regular season. It is currently being hosted on heroku <a href="http://brandonkarldb.herokuapp.com/" target="_blank">here</a>.

## Dependencies

#### The current dependencies are:
<ul>
  <li>Express</li>
  <li>Mongojs</li>
  <li>Body-parser</li>
  <li>Ejs</li>
</ul> 

These and any further dependencies are within the package.json file included.

## Hosting

To run the server locally, please download ```node``` which will also come with ```npm```. Run the command ```npm install``` to download all the dependencies and use the command ```npm start``` to host the server locally. If local, it should be hosting locally on port 8080 at ```localhost:8080```. Otherwise it will be hosted on the environment port. 

## Usage

This server has 3 routes:

* The root route ```/``` which shows the landing page and no other information.</li>
* The teams route ```/api/teams/:team``` which takes any NHL team and displays their statistics.</li>
* The cities route ```/api/cities/:city``` which takes any NHL city and displays their statistics.</li>

In order to have access to the information, you **must** recieve credentials in order to access my database. If you recieve them, create a file called ```database_credentials.js``` in the root directory of this project that exports functions called ```username()``` and ```password()``` that return their respective values as strings.

#### Notes

Not used or intended to be used for monetary gain, for educational purposes only.
