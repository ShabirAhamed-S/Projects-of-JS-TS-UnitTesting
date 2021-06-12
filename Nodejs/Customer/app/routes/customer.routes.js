
module.exports = app => {
  const customers = require("../controllers/customer.controller.js");

  // Create a new Customer
  app.post("/customers", customers.create);

  // Retrieve all Customers
  app.get("/customers", customers.findAll);

  // Retrieve a single Customer with customerId
  app.get("/customers/:id", customers.findOne);

  // Update a Customer with customerId
  app.put("/customers/:id", customers.update);

  // Delete a Customer with customerId
  app.delete("/customers/:id", customers.delete);

  // Create a new Customer
  app.delete("/customers", customers.deleteAll);
};