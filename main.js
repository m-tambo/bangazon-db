'use strict'

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('bangazon-mt.sqlite')

// create tables
db.run(`CREATE TABLE IF NOT EXISTS customers(customer_id INT, name TEXT, address TEXT, city TEXT, state TEXT, postal_code INT, phone INT)`)
db.run(`CREATE TABLE IF NOT EXISTS orders(order_id INT, customer_id INT, payment_id INT, payment_status TEXT)`)
db.run(`CREATE TABLE IF NOT EXISTS order_line(line_id INT, order_id INT, product_id INT)`)
db.run(`CREATE TABLE IF NOT EXISTS products(product_id INT, product_name TEXT, price NUMBER)`)
db.run(`CREATE TABLE IF NOT EXISTS payment_options(payment_id INT, payment_type TEXT, acct_number INT)`)
