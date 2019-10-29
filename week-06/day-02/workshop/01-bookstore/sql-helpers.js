//-------------------------sql helpers-----------------------------//
const book = {
  alias: 'book_mast',
  name: 'book_name',
  price: 'book_price',
  authorID: 'aut_id',
  categoryID: 'cate_id',
  publisherID: 'pub_id'
}

const category = {
  alias: 'category',
  discription: 'cate_descrip',
  id: 'cate_id'
}

const author = {
  alias: 'author',
  id: 'aut_id',
  name: 'aut_name'
}

const publisher = {
  alias: 'publisher',
  name: 'pub_name',
  id: 'pub_id'
}

const sql_book_titles = `SELECT ${book.name} FROM ${book.alias}`

const sql_book_all = `SELECT
        ${book.name}, ${author.name}, ${category.discription} as category, ${publisher.name} as publisher, ${book.price} as price FROM ${book.alias} 
        JOIN ${author.alias} ON ${book.alias}.${book.authorID} = ${author.alias}.${author.id}
        JOIN ${category.alias} ON ${book.alias}.${book.categoryID} = ${category.alias}.${category.id}
        JOIN ${publisher.alias} ON ${book.alias}.${book.publisherID} = ${publisher.alias}.${publisher.id}`

/*in order to have a reasonable name for the selected table, use following sql to create a 
derived table, and do where filter on top it*/
const new_sql_book_all = `SELECT * FROM (SELECT
        ${book.name}, ${author.name}, ${category.discription} as category, ${publisher.name} as publisher, ${book.price} as price FROM ${book.alias} 
         JOIN ${author.alias} ON ${book.alias}.${book.authorID} = ${author.alias}.${author.id}
         JOIN ${category.alias} ON ${book.alias}.${book.categoryID} = ${category.alias}.${category.id}
         JOIN ${publisher.alias} ON ${book.alias}.${book.publisherID} = ${publisher.alias}.${publisher.id}) NEWTABLE`

const makeFilterSQL = urlQuery => {
  let filterURL = new_sql_book_all

  const filters = {
    category: urlQuery.category,
    publisher: urlQuery.publisher,
    plt: urlQuery.plt,
    pgt: urlQuery.pgt
  }

  for (let [key, value] of Object.entries(filters)) {
    if (value) {
      if (key === 'plt') {
        filterURL += filterURL.includes('where')
          ? ` and price<${value}`
          : ` where price<${value}`
      } else if (key === 'pgt') {
        filterURL += filterURL.includes('where')
          ? ` and price>${value}`
          : ` where price>${value}`
      } else {
        filterURL += filterURL.includes('where')
          ? ` and ${key}='${value}'`
          : ` where ${key}='${value}'`
      }
    }
  }
  return filterURL
}

module.exports = {
  sql_book_titles,
  sql_book_all,
  makeFilterSQL
}
