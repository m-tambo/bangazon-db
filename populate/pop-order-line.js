'use strict'

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bangazon-mt.sqlite')

//  line_id INT, order_id INT, product_id INT
const populate = () => {
  const { list } = require(`../data/order_line.json`)
  list.forEach( each => {
      db.run(`INSERT INTO order_line VALUES
        (
        ${each.line_id}, ${each.order_id}, ${each.product_id}
        )`
      )
  })
}

populate()
