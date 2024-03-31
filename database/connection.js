//Import mongoose
const mongoose = require("mongoose")
//importing dotenv
require("dotenv").config();
//create function for database connection
const connectDB = () => {
  if (!process.env.DATABASE) {
    console.log("DataBase URL is not defined");
    process.exit(1);
  }
  mongoose.connect(process.env.DATABASE,{ })
    .then(() => 
      console.log("DataBase Connected Successfully")
    )
    .catch((err) => {
      console.log("DataBase Connection Issues");
      console.log(err);
      process.exit(1);
    });
};
//Export the Function
module.exports = connectDB;
// //Database Connection
// const mongoose = require("mongoose")
// require('dotenv').config();

// const dbConnect =()=>{

//     if (!process.env.DATABASE) {
//         console.error("DATABASE_URL is not defined in the environment variables.");
//         process.exit(1);
//       }
// //   mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//   mongoose.connect(process.env.DATABASE,{ })
//     .then(()=> console.log("DataBase  Connection is Successful"))
//     .catch((error)=>{
//         console.log("Issues in DataBase Connection"); 
//         console.error(error.message);
//         process.exit(1);
//     });
// }
// module.exports= dbConnect;