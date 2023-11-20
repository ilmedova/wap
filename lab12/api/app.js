const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const bookRouter = require("./routes/bookRoutes");

app.use(express.json());

app.use("/book", bookRouter);

app.listen(PORT, () => {
    console.log("App started on http://localhost:3000");
});