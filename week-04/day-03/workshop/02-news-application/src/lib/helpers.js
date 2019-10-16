export const NEWS_API_KEY = 'f5bdda68a887445bb4d26831177a0efc'

export const getDelayedURL = (delayTime /*unit is millisec*/, url) =>
  `http://slowwly.robertomurray.co.uk/delay/${delayTime}/url/${url}`

export const getNewsURL = apiKey =>
  `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
