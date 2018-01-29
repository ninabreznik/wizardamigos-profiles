var csjs = require('csjs-inject')
var bel = require('bel')
var profile = require('./src/index.js')

/* DEFAULT CARD */
var default_el = profile({
  "username": "ninabreznik",
  "projects": [
    "http://www.refugeeswork.com",
    "http://www.wizardamigos.com",
    "http://fairydust.agency"
  ],
  "background": [
    "Javascript",
   "Entrepreneurship",
    "Community building"
  ],
  "interests": [
    "p2p web",
    "self employment",
    "javascript",
    "blockchain"
  ],
  "github": "https://github.com/ninabreznik"
})

document.body.appendChild(default_el)
