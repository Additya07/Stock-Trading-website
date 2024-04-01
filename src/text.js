const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost', // Change this to your MySQL host
  user: 'root',      // Change this to your MySQL username
  password: 'Stark@1234',  // Change this to your MySQL password
  database: 'myappdb' // Change this to the name of your MySQL database
});

// Connect to the database
connection.connect()

const customersData = [
    { customer_id: 1, name: 'Customer 1', email: 'customer1@example.com' },
    { customer_id: 2, name: 'Customer 2', email: 'customer2@example.com' },
    // Add more customers as needed
  ];

  // Insert data for each customer into the Customers table
  customersData.forEach((customer) => {
    connection.query('INSERT INTO Customers SET ?', customer, (error, results, fields) => {
      if (error) {
        console.error('Error inserting data for customer:', customer, error);
        return;
      }
      console.log('Data inserted successfully for customer:', customer);
    });
  });

connection.query('SELECT * from customers', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
  });