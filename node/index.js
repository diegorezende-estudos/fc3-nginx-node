const express = require('express')
const app = express()
const port = 3000
const config={
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql2')

app.get('/', (req, res) => {
    const connection = mysql.createConnection(config);
  
    const createTable = `
      CREATE TABLE IF NOT EXISTS people (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255),
        PRIMARY KEY (id)
      )
    `;
    connection.query(createTable);
  
    const names = ['Diego', 'Ana', 'Carlos', 'Maria', 'João', 'Fernanda', 'Lucas', 'Paula', 'José', 'Luiza'];
    const values = names.map(name => [name]);
  
    connection.query(`INSERT INTO people(name) VALUES ?`, [values], (err) => {
      if (err) {
        console.error('Erro ao inserir nomes:', err);
        return res.send('Erro ao inserir');
      }
  
      connection.query(`SELECT * FROM people`, (err, results) => {
        if (err) {
          console.error('Erro ao buscar:', err);
          return res.send('Erro ao buscar');
        }
  
        let response = '<h1>Full Cycle Rocks!</h1></h1><ul>';
        results.forEach(row => {
          response += `<li>${row.id} - ${row.name}</li>`;
        });
        response += '</ul>';
  
        res.send(response);
        connection.end();
      });
    });
  });


  app.listen(port,()=>{
    console.log('Rodando na porta '+port)
})
