const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

const bookRouter = require("./routes/bookRoutes");

app.use(cors());
app.use(express.json());


app.use("/book", bookRouter);

app.listen(PORT, () => {
    console.log("App started on http://localhost:3000");
});