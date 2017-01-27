// Modules
var express = require(`express`);
var path = require(`path`);

const mongoose = require('mongoose')
const dataPosts = require('./routes/routePost');
const dataGets = require('./routes/routeGet')
const bodyParser = require('body-parser');
mongoose.Promise = global.Promise;

// Express Port/App Declaration
var PORT = process.env.PORT || 3000;
var app = express();

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/dataPost', dataPosts);
app.use('/dataGet', dataGets);

mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/cooking_1' );
const db = mongoose.connection;
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});
// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Routes
// app.get(`*`, function(req, res) {
//   res.sendFile('public/index.html', { root: __dirname });
// });

// Connection to PORT
app.listen(PORT, function() {
  console.log(`Listening On Port: ${PORT}`);
});
