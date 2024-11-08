/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
db.createCollection('students');

// Insert a few documents into the sales collection.
db.students.insertMany([
  { 'name': 'Monique', 'age': 75,  'date_birth': new Date('2014-03-01') },
  { 'name': 'Marc', 'age': 36, 'date_birth': new Date('2014-03-01') },
  { 'name': 'Alexandre', 'age': 25, 'date_birth': new Date('2014-03-15') },
  { 'name': 'Thibault', 'age': 35, 'date_birth': new Date('2014-04-04') },
  { 'name': 'Joakym', 'age': 18, 'date_birth': new Date('2014-04-04') },
  { 'name': 'Bittori', 'age': 24, 'date_birth': new Date('2015-06-04') },
  { 'name': 'Anthony', 'age': 24, 'date_birth': new Date('2015-09-10') },
  { 'name': 'Iban', 'age': 18, 'date_birth': new Date('2016-02-06') }
]);

db.createCollection('courses');

db.courses.insertMany([
  {'courses': 'dev', 'year_graduation': 2024},
  {'courses': 'dev', 'year_graduation': 2020 },
  {'courses': 'dev', 'year_graduation': 2022 },
  {'courses': 'paie', 'year_graduation': 2010 },
  {'courses': 'projet web', 'year_graduation': 2014 },
  {'courses': 'dev', 'year_graduation': 2000 },
  {'courses': 'paie', 'year_graduation': 2020 },
  {'courses': 'dev', 'year_graduation': 2001 }
]);

db.courses.drop();

db.students.find();
// Run a find command to view items sold on April 4th, 2014.
db.students.find({
  date: { $gte: new Date('2014-04-04'), $lt: new Date('2014-04-05') }
}).count();

// Here we run an aggregation and open a cursor to the results.
// Use '.toArray()' to exhaust the cursor to return the whole result set.
// You can use '.hasNext()/.next()' to iterate through the cursor page by page.
db.students.aggregate([
  // Find all of the sales that occurred in 2014.
  { $match: { date: { $gte: new Date('2014-01-01'), $lt: new Date('2015-01-01') } } },
  // Group the total sales for each product.
  { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: [ '$price', '$quantity' ] } } } }
]);

