const d = document

if (d.querySelector('p:nth-of-type(4)').classList.contains('dolphin')) {
  d.querySelector('.apple').textContent = 'pear'
}

if (d.querySelector('p:first-of-type').classList.contains('apple')) {
  d.querySelector('.cat').textContent = 'dog'
}

d.querySelector('.apple').classList.add('red')
d.querySelector('.balloon').classList.replace('balloon', 'pear')
