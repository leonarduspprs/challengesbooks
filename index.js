// module.exports = function(app) {
//     app.get("/", (req, res) => res.send("Hello World!"));
//     };

// const express = require("express");
// const PORT = 3000;
// const morgan = require("morgan");
// const app = express(); 
// app.use(morgan("combined"));
// require('./app/routes/routes.js')(app);
// app.listen(PORT, () => {
// console.log(`Server is listening on port: ${PORT}`);


// var birds = require('./app/routes/birds');
// // ...
// app.use('/birds', birds)

// app.use(express.json());
// const { check, validationResult } = require("express-validator");

// app.post("/user", [
//     // username must be an email
//     check("username").isEmail().isLength({ max:10}),
//     // password must be at least 5 chars long
//     check("password").isLength({ min: 5 })
//     ],
//     (req, res) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(422).json({ errors: errors.array() });
//         }

//         const user = {
//             username: req.body.username,
//             password: req.body.password
//         };

//         res.status(200).json(user);

//     }
//     );

//     app.post("/register", [
//         // username must be an email
//         check("username").isEmail().notEmpty().withMessage("Baleg bro uname piraku kosong"),
//         // password must be at least 5 chars long
//         check("password"),

//         check("passwordkonfirmasi"),

//         check("nama").isString().isLength({ min: 11 }),

//         check("birthdate"),

//         check("alamat").isLength({ min: 11 })
//         ],
//         (req, res) => {
//             const errors = validationResult(req);
//             if (!errors.isEmpty()) {
//                 return res.status(422).json({ errors: errors.array() });
//             }
    
//             const user = {
//                 username: req.body.username,
//                 password: req.body.password,
//                 passwordkonfirmasi: req.body.passworkonfirmasi,
//                 nama: req.body.nama,
//                 birthdate: req.body.birthdate,
//                 alamat: req.body.alamat,
                
//             };
    
//             res.status(200).json(user);
    
//         }
//         )
    


// });

const Express = require("express");
const Mongoose = require("mongoose");

var app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
require('./app/routes/bukuuu.js')(app);

Mongoose.connect("mongodb://localhost/express_pembukuanbuku");


app.listen(3000, () => {
    console.log("Listening at :3000...");
    });