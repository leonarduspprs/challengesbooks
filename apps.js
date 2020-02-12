const Express = require("express");
const Mongoose = require("mongoose");

var app = Express();
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.post("/persons", async (request, response) => {});
app.get("/persons", async (request, response) => {});
app.get("/persons/:id", async (request, response) => {});
app.put("/persons/:id", async (request, response) => {});
app.delete("/persons/:id", async (request, response) => {});

app.listen(3000, () => {
    console.log("Listening at :3000...");
    });
    
    Mongoose.connect("mongodb://localhost/express_mongoose");

    const PersonModel = Mongoose.model("person", {
        firstname: String,
        lastname: String
        });

        app.post("/persons", async (request, response) => {
            try {
            var person = new PersonModel(request.body);
            var result = await person.save();
            response.send(result);
            } catch (error) {
            response.status(500).send(error);
            }
            });

            app.get("/persons", async (request, response) => {
                try {
                var result = await PersonModel.find().exec();
                response.send(result);
            } catch (error) {
                response.status(500).send(error);
                }
                });
                app.get("/persons/:id", async (request, response) => {
                    try {
                    var person = await PersonModel.findById(request.params.id).exec();
                    response.send(person);
                    } catch (error) {
                    response.status(500).send(error);
                    }
                    });
