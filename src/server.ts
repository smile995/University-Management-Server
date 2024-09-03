import app from "./app";

import mongoose from "mongoose";
import config from "./app/config";

// const mongoose = require('mongoose');



async function main() {
    await mongoose.connect(config.DB_URL as string);

    app.listen(config.PORT, () => {
        console.log(`Example app listening on port ${config.PORT}`)
    })
}
main();