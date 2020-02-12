
const Express = require("express");
const Mongoose = require("mongoose");

var app = Express();

require('./app/routes/buku.js')(app);
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.listen(3000, () => {
    console.log("Listening at :3000...");
    });
    
    Mongoose.connect("mongodb://localhost/express_xyz");

    