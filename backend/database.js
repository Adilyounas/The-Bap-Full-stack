const mongoose = require("mongoose");

const connectToDatabse = () => {
   
  mongoose
    .connect(process.env.MONGODB_URL)
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
   
};


module.exports = connectToDatabse;