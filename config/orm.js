const connection = require('./connection.js');

const orm = {
    selectAll(whatToSelect, tableInput) {
      const queryString = 'SELECT ?? FROM ??';
      connection.query(queryString, [whatToSelect, tableInput], (err, result) => {
        if (err) throw err;
        console.log(result);
      });
    },
    insertOne(whatToSelect, tableInput) {
        const queryString = 'INSERT ?? INTO ??';
        connection.query(queryString, [whatToSelect, tableInput], (err, result) => {
          if (err) throw err;
          console.log(result);
        });
      },
    updateOne(tableInput, colToSearch, valOfCol) {
        const queryString = 'SELECT * FROM ?? WHERE ?? = ?';
        console.log(queryString);
    
        connection.query(
          queryString,
          [tableInput, colToSearch, valOfCol],
          (err, result) => {
            if (err) throw err;
            console.log(result);
          }
        );
      },
};

module.exports = orm;