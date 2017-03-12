'use strict'

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bangazon-mt.sqlite')

const truncate = () => {
  db.run(`DELETE FROM orders WHERE order_id > 0`)
}

truncate()
