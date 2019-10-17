export const NEWS_API_KEY = 'f5bdda68a887445bb4d26831177a0efc'

export const getNewsURL = (countryCode, apiKey) =>
  `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${apiKey}`
