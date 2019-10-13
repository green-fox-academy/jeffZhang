const org = 'green-fox-academy'
const get_REPOS_URL = org => `https://api.github.com/orgs/${org}/repos`
const get_COMMITS_URL = repo =>
  `https://api.github.com/repos/green-fox-academy/${repo}/commits`

const d = document
const header = d.querySelector('h1')
const button = d.querySelector('button')
const ul = d.querySelector('ul')

const fetchRepos = org => {
  return fetch(get_REPOS_URL(org)).then(response => response.json())
}

const fetchCommits = repo => {
  return fetch(get_COMMITS_URL(repo)).then(response => response.json())
}

const showName = name => {
  header.textContent = `Commit messages of ${name}`
  return Promise.resolve(name)
}

const showCommits = commits => {
  ul.innerHTML = ''
  commits.forEach(commit => {
    let li = d.createElement('li')
    li.className = 'commit'
    li.textContent = commit.commit.message
    ul.appendChild(li)
  })
  return Promise.resolve('Show all commits')
}

function* nextRepo(repos) {
  repos.length ? yield repos.shift() : yield 'no more repo...'
}

const addButtonEvent = repos => {
  button.addEventListener('click', async () => {
    let repo = nextRepo(repos).next().value.name
    let commits = await fetchCommits(repo)
    await showName(repo)
    await showCommits(commits)
  })
  return Promise.resolve('Adding the event listener to the button.')
}

const entryFunction = async org => {
  let repos = await fetchRepos(org)
  await addButtonEvent(repos)
}

entryFunction(org)
