const express = require('express');
const bodydarser = require('body-parser');
const app = express();
// const port = process.env.PORT || "8080";
// const www = process.env.WWW || './google.co.th';
// app.use(express.static(www));
// console.log(`serving ${www}`);
// app.get('*', (req, res) => {
//     res.sendFile(`index.html`, { root: www });
// });
// app.listen(port, () => console.log(`listening on http://localhost:${port}`));
require('./db');
const sqlcon = require('./dbsql');
const oci = require('./dboci');

const FeedbackModel = require('./feedback_schema');

// app.all('*', function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

app.use(bodydarser.json());
app.use(bodydarser.urlencoded());

sqlcon.connect(function (err) {
  if (err) throw err;
  console.log("connect sql");

});

app.get('/api', (req, res) => {
 res.send('Hollo word');

});



app.post('/api', (req, res) => {
  const feedback = req.body.feedback;
  const username = req.body.username;
  // const name = req.body.name;
  // res.end("feedback : " + feedback + "| name : " + name + "| user : " + username);
  FeedbackModel.create(req.body, (err, doc) => {
    if (err) res.json({
      result: "failed",
      username: username,
      feedback: feedback
    })

    res.json({
      result: "success",
      username: username,
      feedback: feedback
    })
  });

});

app.get('/api', (req, res) => {
  FeedbackModel.find((err, doc) => {
    if (err) {
      res.json({
        result: "failed",
        data: doc
      });
    }
    res.json({
      result: "success",
      data: doc
    });

  });
});


app.get('/sql', (req, res) => {
  sqlcon.query("SELECT * FROM `tasks`", function (err, rows, fields) {
    // connection.end();
    // sqlcon.release();
    if (err) {
      res.json({
        result: "failed"
      });
    }
    res.json({
      result: "success",
      data: rows
    });
  });

});

app.post('/sql', (req, res) => {
  const tack = req.body.tack;
  sqlcon.query("INSERT INTO `tasks` (`id`, `task`, `status`, `created_at`) VALUES (NULL, '" + tack + "', '1', CURRENT_TIMESTAMP);", function (err, rows, fields) {
    // connection.end();
    // sqlcon.release();
    if (err) {
      res.json({
        result: "failed"
      });
    }
    res.json({
      result: "success"
    });
  });

});

app.post('/sqldel', (req, res) => {
  const id = req.body.id;
  sqlcon.query("DELETE FROM `tasks` WHERE `id` = '" + id + "'", function (err, rows, fields) {
    // connection.end();
    // sqlcon.release();
    if (err) {
      res.json({
        result: "failed"
      });
    }
    res.json({
      result: "success",
      data: id
    });
    // res.end({result : "success",   data:id});
  });

});

app.get('/oci', (req, res) => {
  const departmentName = req.query.name;
  console.log(departmentName);

  oci.handleDatabaseOperation(req, res, function (request, response, connection) {
    // const departmentName = req.query.name || '%';

    const selectStatement = "SELECT * FROM sc_mem_m_membership_registered where membership_no = '" + departmentName + "'";
    connection.execute(selectStatement,
      function (err, result) {
        if (err) {
          console.log('Error in execution of select statement' + err.message);
          response.writeHead(500, {
            'Content-Type': 'application/json'
          });
          response.end(JSON.stringify({
            status: 500,
            message: "Error getting the departments",
            detailed_message: err.message
          }));
        } else {
          // console.log(JSON.stringify(result.rows));
          // response.writeHead(200, {'Content-Type': 'application/json'}); 
          res.json({
            result: "success",
            data: result.rows
          })
          // response.end(JSON.stringify(result.rows));
        }
        oci.doRelease(connection);
      }
    );

  });
});





app.listen(3000, () => {
  console.log("connect server");

});
