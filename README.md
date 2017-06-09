# Node.js-HockeyAppServer

## Description

This is the server for a personal non-commercial, ice hockey NHL statistics database site I am working on. This database holds team information from the 2015-2016 regular season. It is currently being hosted on heroku <a href="http://brandonkarldb.herokuapp.com/" target="_blank">here</a>.

## Dependencies

#### The current dependencies are:
<ul>
  <li>Express</li>
  <li>Mongojs</li>
  <li>Body-parser</li>
  <li>ejs</li>
</ul> 

These and any further dependencies are within the package.json file included

## Hosting

To run the server locally, please download ''' node ''' which will also come with ''' npm '''. Run the command ''' npm install ''' to download all the dependencies and use the command ''' npm start ''' to host the server locally. If local, it should be hosting locally on port 8080 at localhost:8080. Otherwise it will be hosted on the environment port. 

## Usage

This server has 3 routes:

<ul>
  <li>The root route ''' / ''' which shows the landing page and no other information.</li>
  <li>The teams route ''' /api/teams/:team ''' which takes any NHL team and displays their statistics.</li>
  <li>The cities route ''' /api/cities/:city ''' which takes any NHL city and displays their statistics.</li>
</ul> 

#### Notes

Not used or intended to be used for monetary gain, for educational purposes only.
