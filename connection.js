const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/mean', { useNewUrlParser: true })
.then(() => {
  console.log('Connected to database!');
})
.catch(() => {
  console.log('Connection Failed');
});
