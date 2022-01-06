const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config({ path: "config/.env" });

module.exports = async () => {

    try {
        await mongoose.connect(process.env.MONGO_LOCAL, { useNewUrlParser: true, useUnifiedTopology: true});
        console.log("connect successfully");

    } catch (error) {
        console.log(`not connected! ${error}`);

    }
};
