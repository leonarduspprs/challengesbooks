
const Express = require("express");
const Mongoose = require("mongoose");

module.exports = function(app) {
    const BukuModel = Mongoose.model("buku", {
            title : String,
            author : [String],
            published_date: Date,
            pages : Number,
            language : String,
            publisher_id : Number
        });

        app.post("/buku", async (request, response) => {
            try {
            var buku = new BukuModel(request.body);
            var result = await buku.save();
            response.send(result);
            } catch (error) {
            response.status(500).send(error);
            }
            });

            app.get("/buku", async (request, response) => {
                try {
                var result = await BukuModel.find().exec();
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

                    app.put("/persons/:id", async (request, response) => {
                        try {
                        var person = await PersonModel.findById(request.params.id).exec();
                        person.set(request.body);
                        var result = await person.save();
                        response.send(result);
                        } catch (error) {
                        response.status(500).send(error);
                        }
                        });

                        app.delete("/persons/:id", async (request, response) => {
                            try {
                                var result = await PersonModel.deleteOne({ _id: request.params.id }).exec(
                                );
                                response.send(result);
                                } catch (error) {
                                response.status(500).send(error);
                                }
                                });

                    
    };