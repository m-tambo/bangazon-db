'use strict'

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bangazon-mt.sqlite')

// order_id INT, customer_id INT, payment_id INT, payment_status TEXT
const populate = () => {
  const { list } = require(`../data/orders.json`)
  list.forEach( each => {
      db.run(`INSERT INTO orders VALUES
        (
        ${each.order_id}, ${each.customer_id}, ${each.payment_id}, "${each.payment_status}"
        )`
      )
  })
}

populate()
