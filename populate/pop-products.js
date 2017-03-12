'use strict'

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bangazon-mt.sqlite')

const populate = () => {
  const { list } = require(`../data/products.json`)
  list.forEach( each => {
      db.run(`INSERT INTO products VALUES
        (
        ${each.id}, "${each.first_name}", "${each.last_name}", "${each.title}", ${each.age}, "${each.sign}", ${each.salary}
        )`
      )
  })
}

populate()
