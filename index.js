const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./db");

const app = express();
app.use(express.json()); //{ limit: "50mb" }
app.use(cors());

const role = require("./routers/routes/role");
app.use("/role", role);

const users = require("./routers/routes/users");
// app.use("/users", users);

// const hotels = require("./routers/routes/hotels");
// app.use("/hotels", hotels);

// const destinations = require("./routers/routes/destinations");
// app.use("/destinations", destinations);

// const comments = require("./routers/routes/comments");
// app.use("/comments", comments);

// const festivals = require("./routers/routes/festivals");
// app.use("/festivals", festivals);

// const orders = require("./routers/routes/orders");
// app.use("/orders", orders);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});
