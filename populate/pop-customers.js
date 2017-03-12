'use strict'

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bangazon-mt.sqlite')

// customer_id INT, name TEXT, address TEXT, city TEXT, state TEXT, postal_code INT, phone INT
const populate = () => {
  const { list } = require(`../data/customers.json`)
  list.forEach( each => {
      db.run(`INSERT INTO customers VALUES
        (
        ${each.customer_id}, "${each.name}", "${each.address}", "${each.city}", "${each.state}", ${each.postal_code}, ${each.phone}
        )`
      )
  })
}

populate()
