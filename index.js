const EXPRESS = require('express');
const APP = EXPRESS();
const FETCH = require('node-fetch');

//Body parser initialization    
APP.use(EXPRESS.json());
APP.use(EXPRESS.urlencoded({ extended: true }));


//Routings
APP.get(
    '/',
    function (req, res) {
        setImmediate(() => {
            res.send("Hello World")
        })
    }
)

// get headers properties
APP.post(
    '/header',
    function (req, res) {
        var token1 = req.headers.cebtoken;
        res.send(token1)
    }
)

// get body properties or payload
APP.post(
    '/body',
    function (req, res) {
        var body = req.body;
        res.send(body)
    }
)

//using params
APP.get(
    '/urlparams/:name/:department',// example localhost:3000/urlparams/ceb/isd
    function (req, res) {
        var name = req.params.name;
        var dept = req.params.department;
        res.send({ name: name, dept: dept })
    }
)

//using query string
APP.get(
    '/urlquerystring', // example localhost:3000/urlquerystring?name=ceb&department=isd
    function (req, res) {
        var name = req.query.name;
        var dept = req.query.department;
        res.send({ name: name, dept: dept })
    }
)

APP.get(
    '/middleware/:token',// example localhost:3000/middleware/sercretToken
    function (req, res, next) {
        var name = req.params.token;

        if (name.length == 0)
            return res.send("invalid token")
        else
            next(); //next middleware
    },
    function (req, res, next) {
        next();//next middleware
    },
    function (req, res, next) {
        next();//next middleware
    },
    function (req, res, next) {
        res.send("Hello world")
    }
)



//Invalid Route
APP.use(function (req, res, next) {
    next("Resource not found.")
});

//Route error handler
APP.use(function (err, req, res, next) {
    res.status(500).send({ message: err });
});


//Initialize express node
APP.listen(process.env.PORT || "3000", function () {
    console.log(`Node HTTP server is listening at port 3000`)
});

