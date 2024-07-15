const mongoose = require("mongoose");
const DB = process.env.MONGO_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(DB,);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error);
    }
};

module.exports = {connectDB}


