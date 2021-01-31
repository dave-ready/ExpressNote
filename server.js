import express from "express";

var app = express();

var PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log(`Server online. Now listening on port ${PORT}`)
});
