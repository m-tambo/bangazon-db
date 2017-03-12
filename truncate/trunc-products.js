'use strict'

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bangazon-mt.sqlite')

const truncate = () => {
  db.run(`DELETE FROM products WHERE product_id > 0`)
}

truncate()
