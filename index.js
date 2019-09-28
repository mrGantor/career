var express = require('express');
var mysql = require('mysql');
var cors = require('cors');
var app = express();
app.use(cors());

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    database: "hack",
    password: ""
});

class api{
    static getUsers(req,res){
        pool.query("SELECT * FROM users", function(err, data) {
            if(err) return console.log(err);
            res.send({status: true, data:data});
        });
    }
    static getUserById(req,res){
        let id = req.params.id;
        let sql = `SELECT * FROM users WHERE id = '${id}'`;
        pool.query(sql, function(err, data) {
            if(err) return console.log(err);
            if(data.length>0){
                res.send({status: true, data:data[0]});
            }else{
                res.send({status: false, msg:'user not found'});
            }
        });
    }
    static getUniversity(req,res){
        pool.query("SELECT * FROM university", function(err, data) {
            if(err) return console.log(err);
            res.send({status: true, data:data});
        });
    }
    static getUniversityById(req,res){
        let id = req.params.id;
        let sql = `SELECT * FROM university WHERE id = '${id}'`;
        pool.query(sql, function(err, data) {
            if(err) return console.log(err);
            if(data.length>0){
                res.send({status: true, data:data[0]});
            }else{
                res.send({status: false, msg:'university not found'});
            }
        });
    }
    static getCompany(req,res){
        pool.query("SELECT * FROM company", function(err, data) {
            if(err) return console.log(err);
            res.send({status: true, data:data});
        });
    }
    static getCompanyById(req,res){
        let id = req.params.id;
        let sql = `SELECT * FROM company WHERE id = '${id}'`;
        pool.query(sql, function(err, data) {
            if(err) return console.log(err);
            if(data.length>0){
                res.send({status: true, data:data[0]});
            }else{
                res.send({status: false, msg:'university not found'});
            }
        });
    }
}

app.get('/users', api.getUsers);
app.get('/users/:id', api.getUserById);
app.get('/university', api.getUniversity);
app.get('/university/:id', api.getUniversityById);
app.get('/company', api.getCompany);
app.get('/company/:id', api.getCompanyById);

app.listen(8000, function () {
    console.log('Backend run on port 8000 via magic!');
});

