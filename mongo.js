const express=require('express');
const app=express();
var cors=require('cors');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors());
//   app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

mongoose.connect('mongodb://localhost/library',{useNewUrlParser:true});

    var Book = mongoose.model('Book', { name: String });

    app.post('/book', (req, res) => {
        console.log('book recieved' + req.body.name);
        var book = new Book({
            name: req.body.name
        });

        book.save((err) => {
            
            if(err){console.log(err);} // handle it
            res.send({book:book.name});
            

        });
    });

    app.get('/book/:name', (req, res) => {
        console.log(req.params);
        Book.findOne({name: req.params.name}, (err, book) => {

            if(err){console.log(err);} // handle it
            if(book!=undefined){
                res.send("book found "+ book.name);
            }
            else{
                res.end("book not found");
            }
            

        });
    });


    
app.listen(3000,()=>{
    console.log('server opened on port 3000');
    });