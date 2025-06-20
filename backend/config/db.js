const mongoose= require("mongoose");
const dotenv = require("dotenv");

dotenv.config();




const dbConnect= () => {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("DB connected sucessfully");   
    });
};

module.exports = dbConnect;