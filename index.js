
const express=require('express');
const app=express();

app.use((req,res,next)=>{
    req.message="This is a new request";
    next();

});

app.use((req,res,next)=>{
    console.log(req.message);
    next();

});

// app.get('/', (req,res) => {
//  res.status(200).send("hii");
//  console.log(req);
 
// });

app.get('/reda', (req, res) => {
    res.cookie('cookieName','cookieValue');
    
    res.send("Hi Reda");
    
});

app.post('/reda', (req, res) => {
    res.send("posting reda");

});
app.listen(3000,()=>{
console.log("server started on port 3000");
});


app.get('/username/:name', (req, res) => {
    res.send('HI '+req.params.name);
});









    var user=require('./user')

    app.use('/user', user);


// app.get('/username/:name(\a+\)', (req, res) => {SS
//     res.send('HI '+req.params.name);
// });






     var bodyParser = require('body-parser');

     app.use(bodyParser.json());
     app.use(bodyParser.urlencoded({ extended: false }));

    // app.post('/', (req, res) => {
    //     console.log(req.body);
    //     res.send("hi");
        
    // });


    // var cookieParser = require('cookie-parser');

    
    // app.use(cookieParser());

    // app.get('/', (req, res) => {
    //     console.log(req.headers);
    //     res.end();
    // });




    // var auth = (req, res, next) => {
    //     console.log(req.headers['let-me-in']);
    //     if(req.headers['let-me-in'] == 'true') {
    //       next();

    //     } else {
    //       res.send('not authorized');
    //     }
    //   }
    
    //   app.use(auth);
    
    //   app.get('/', (req, res) => {
    //     res.send('Authorized');

        
    //   });


    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/library',{useNewUrlParser:true});

    var Book = mongoose.model('Book', { name: String });

    app.post('/book', (req, res) => {
        console.log(req.body.name);
        var book = new Book({
            name: req.body.name
        });

        book.save((err) => {
            
            if(err){console.log(err);} // handle it
            res.send(book);
            res.end();

        })
    });

    app.get('/book/:name', (req, res) => {
        Book.findOne({name: req.params.name}, (err, book) => {

            if(err){console.log(err);} // handle it
            res.send("book found"+ book.name);

        });
    });




