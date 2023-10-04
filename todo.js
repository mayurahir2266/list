var mysql = require('mysql');

var express = require('express');

var app = express();

var connection = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: '',
     database: 'todo'
});

connection.connect();

app.get('/admin/insert/:data', function(req, res){

     var data = req.params.data;

    var insert_query = "INSERT INTO `to_do` (`data`) VALUES ('"+data+"')";
    connection.query(insert_query, function(err, result){
     if (err) throw err;
     res.redirect('/user')
    });
});

app.get('/user', function(req, res){
     var select_query = " SELECT * FROM `to_do`"

     connection.query(select_query, function(err, result){
          if (err) throw err;
          res.send(result);
     });
})

app.get('/admin/delete/:id', function(req, res){
     var id = req.params.id;

     var delete_query = "DELETE FROM `to_do` WHERE `id` = '"+id+"'";
     connection.query(delete_query, function(err, result){
          if (err) throw err;
          res.redirect('/user')
     });
});

app.get('/admin/update/:id/:data', function(req, res){
     var id = req.params.id; 

     var update_query = "UPDATE `to_do` SET `id` = ('"+id+"'),`data`='" +data+"'";
     
     connection.query(update_query, function(err, result){
          if (err) throw err;
          res.redirect('/user')
     });
})

app.listen(8000);