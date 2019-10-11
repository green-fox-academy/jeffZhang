const DOMAIN = 'https://api.nytimes.com/svc/search/v2/'
const ENDPOINT = 'articlesearch.json'
const query = 'the moon landing by Apollo 11'
const API_KEY = 'OjZc1b8YHbiruF6i5Pq0HGgfiCFPMXay'

const d = document

const createAnArticle = (headline, snippet, date, link) => {
  let article = d.createElement('article')
  let head = d.createElement('h1')
  head.textContent = headline
  article.appendChild(head)

  let snip = d.createElement('p2')
  snip.textContent = snippet
  article.appendChild(snip)

  let pubDate = d.createElement('p')
  pubDate.textContent = date
  article.appendChild(pubDate)

  let url = d.createElement('a')
  url.textContent = 'Link'
  url.href = link
  article.appendChild(url)

  return article
}

const appendArticlesToUl = articles => {
  let ul = d.createElement('ul')
  ul.style.listStyle = 'none'
  d.body.appendChild(ul)

  articles.forEach(article => {
    let li = d.createElement('li')
    li.appendChild(article)
    ul.appendChild(li)
  })
}

const dataRequest = new XMLHttpRequest()
dataRequest.onreadystatechange = () => {
  if (dataRequest.readyState === 4) {
    docs = JSON.parse(dataRequest.response).response.docs
    // console.log(docs)
    let articles = []
    docs.forEach(doc => {
      let { headline, snippet, pub_date, web_url } = doc
      let article = createAnArticle(headline.main, snippet, pub_date, web_url)
      articles.push(article)
    })
    appendArticlesToUl(articles)
  }
}
dataRequest.open('GET', `${DOMAIN + ENDPOINT}?q=${query}&api-key=${API_KEY}`)
dataRequest.send()

console.log(dataRequest)
