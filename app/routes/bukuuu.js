const Express = require("express");
const Mongoose = require("mongoose");

module.exports = function(app) {
    const ModelBuku = Mongoose.model("buku", {
        title: String,
        author: [String],
        published_date: Date,
        pages: Number,
        language : String,
        publiser_id : String

        });

        app.post("/books", async (request, response) => {
            try {
            var buku = new ModelBuku(request.body);
            var result = await buku.save();
            response.send(result);
            } catch (error) {
            response.status(500).send(error);
            }
            });

            app.get("/books", async (request, response) => {
                try {
                var result = await ModelBuku.find().exec();
                response.send(result);

            } catch (error) {
                response.status(500).send(error);
                }
                });
                app.get("/books/:id", async (request, response) => {
                    try {
                    var buku = await ModelBuku.findById(request.params.id).exec();
                    response.send(buku);
                    } catch (error) {
                    response.status(500).send(error);
                    }
                    });

                    app.put("/books/:id", async (request, response) => {
                        try {
                        var books = await ModelBuku.findById(request.params.id).exec();
                        books.set(request.body);
                        var result = await books.save();
                        response.send(result);
                        } catch (error) {
                        response.status(500).send(error);
                        }
                        });

                        app.delete("/books/:id", async (request, response) => {
                            try {
                                var result = await ModelBuku.deleteOne({ _id: request.params.id }).exec(
                                );
                                response.send(result);
                                } catch (error) {
                                response.status(500).send(error);
                                }
                                });

            app.post("/buku", async (request, response) => {});
            app.get("/buku", async (request, response) => {});
            app.get("/buku/:id", async(request, response) => {});
            app.put("/buku/:id", async(request, response) => {});
            app.delete("/buku/:id", async(request, response) => {});
            

        };