const dropTableSQL = tableName => {
  return `DROP TABLE IF EXISTS ${tableName.toLowerCase()};`
}

const createTableSQL = tableName => {
  return `
      CREATE TABLE IF NOT EXISTS ${tableName.toLowerCase()} (
        id INT COLLATE latin1_general_ci NOT NULL,
        prefix varchar(20) COLLATE latin1_general_ci NULL,
        first_name varchar(50) COLLATE latin1_general_ci  NOT NULL,
        last_name varchar(50) COLLATE latin1_general_ci  NOT NULL,
        address varchar(150) COLLATE latin1_general_ci NULL,
        height decimal(4,1) COLLATE latin1_general_ci NULL,
        bitcoin_address varchar(150) COLLATE latin1_general_ci  NULL,
        color_preference varchar(20) COLLATE latin1_general_ci NULL,
        PRIMARY KEY (id)
       )`
}

const insertDataSQL = (data, tableName) => {
  const sqlValue = Object.entries(data)
    .map(([key, value]) => {
      if (value) {
        if (key === 'id' || key === 'height') {
          return `${key} = ${value}`
        }
        return `${key} = "${value}"`
      }
      return `${key} = NULL`
    })
    .join(',')

  return `REPLACE INTO ${tableName.toLowerCase()}
    SET ${sqlValue};`

  /*the following command doesn't work*/
  // return `BEGIN
  //           IF NOT EXISTS (SELECT * FROM ${tableName.toLowerCase()}
  //                     WHERE id = ${data.id})
  //           BEGIN
  //               INSERT INTO ${tableName.toLowerCase()}
  //               VALUES (${sqlValue})
  //           END
  //         END`
}

const selectRowSQL = (id, tableName) => {
  return `SELECT * from ${tableName.toLowerCase()}
      WHERE id=${id}`
}

module.exports = {
  dropTableSQL,
  createTableSQL,
  insertDataSQL,
  selectRowSQL
}
