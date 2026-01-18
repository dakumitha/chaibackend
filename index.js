const express = require('express')
const app = express()
require('dotenv').config()


port =process.env.PORT||3000
console.log("hello world")
const githubData ={
  "real_madrid": {
    "name": "Real Madrid",
    "country": "Spain",
    "league": "La Liga",
    "stadium": "Santiago Bernabéu"
  },
  "fc_barcelona": {
    "name": "FC Barcelona",
    "country": "Spain",
    "league": "La Liga",
    "stadium": "Camp Nou"
  },
  "manchester_united": {
    "name": "Manchester United",
    "country": "England",
    "league": "Premier League",
    "stadium": "Old Trafford"
  },
  "liverpool_fc": {
    "name": "Liverpool FC",
    "country": "England",
    "league": "Premier League",
    "stadium": "Anfield"
  },
  "bayern_munich": {
    "name": "FC Bayern Munich",
    "country": "Germany",
    "league": "Bundesliga",
    "stadium": "Allianz Arena"
  },
  "borussia_dortmund": {
    "name": "Borussia Dortmund",
    "country": "Germany",
    "league": "Bundesliga",
    "stadium": "Signal Iduna Park"
  },
  "juventus_fc": {
    "name": "Juventus FC",
    "country": "Italy",
    "league": "Serie A",
    "stadium": "Allianz Stadium"
  },
  "ac_milan": {
    "name": "AC Milan",
    "country": "Italy",
    "league": "Serie A",
    "stadium": "San Siro"
  },
  "paris_saint_germain": {
    "name": "Paris Saint-Germain",
    "country": "France",
    "league": "Ligue 1",
    "stadium": "Parc des Princes"
  },
  "ajax_amsterdam": {
    "name": "Ajax Amsterdam",
    "country": "Netherlands",
    "league": "Eredivisie",
    "stadium": "Johan Cruyff Arena"
  }
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('hiteshdotcom')
})

app.get('/login', (req, res) => {
  res.send('<h1>Please login at chai aur code</h1>')
})

app.get('/youtube', (req, res) => {
  res.send('<h2>Chair aur code</h2>')
})

app.get('/github', (req, res) => {
  res.json(githubData)
})
app.listen(port , () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
