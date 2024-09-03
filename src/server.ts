import app from "./app";
import config from "./config";
import mongoose from "mongoose";

// const mongoose = require('mongoose');



async function main() {
    await mongoose.connect(config.DB_URL as string);

    app.listen(config.PORT, () => {
        console.log(`Example app listening on port ${config.PORT}`)
    })
}
main();