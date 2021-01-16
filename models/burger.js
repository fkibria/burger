const orm = require("../config/orm");

module.exports = (app) => {
    // Get all burgers
    app.get('/api/all', (req, res) => {
      
        orm.selectAll((err, result) => {
          if (err) throw err;
          res.json(result);
        });
    });
    // Add a burger
    app.post('/api/:id', (req, res) => {
      console.log(req.body);
      const dbQuery =
        'INSERT INTO burgers (burger_name, devoured) VALUES (?,?)';
      connection.query(
        dbQuery,
        [req.body.burger_name, req.body.devoured],
        (err, result) => {
          if (err) throw err;
          if (result) {
            console.log('Burger Successfully Added!');
            res.json(req.body);
          }
        }
      );
    });
  };