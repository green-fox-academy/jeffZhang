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
        ${book.name}, ${author.name}, ${category.discription}, ${publisher.name}, ${book.price} from ${book.alias} 
        join ${author.alias} on ${book.alias}.${book.authorID} = ${author.alias}.${author.id}
        join ${category.alias} on ${book.alias}.${book.categoryID} = ${category.alias}.${category.id}
        join ${publisher.alias} on ${book.alias}.${book.publisherID} = ${publisher.alias}.${publisher.id}`

module.exports = {
  sql_book_titles,
  sql_book_all
}
