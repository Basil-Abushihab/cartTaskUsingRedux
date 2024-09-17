const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const cookiePraser = require("cookie-parser");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productsRoutes");
const auth = require("./middlewares/auth");

require("dotenv").config();
const app = express();
const port = process.env.PORT || 3001;

const corsConfig = { Origin: "http://localhost:5173", credentials: true };

app.use(cors(corsConfig));
app.use(bodyparser.json());
app.use(cookiePraser());

app.use("/api/users", userRoutes);
app.use("/api/products", auth, productRoutes);

app.listen(port, () => {
  console.log(`server running on port  http://localhost:${port}`);
});
