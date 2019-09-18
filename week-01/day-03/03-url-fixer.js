'use strict'
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

var url = 'https//www.reddit.com/r/nevertellmethebots'

//fix bots
url = url.replace('bots', 'odds')

//correct the URL
let indexOfFirstSlash = url.indexOf('/')
let protocolPart = url.slice(0, indexOfFirstSlash)
let restPart = url.slice(indexOfFirstSlash)
url = protocolPart + ':' + restPart

console.log(url)
