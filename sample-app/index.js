const express = require("express");
const path = require("path");
const app = express();


/**
 * Setup middleware
 */
// Specify static files directory
app.use(express.static(path.join(__dirname, "public")));
// To parse the body of the request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Start server
 */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

/**
 * Setup routes
 */
app.get("/", (req, res) => {
  res.sendFile("index.html");
})