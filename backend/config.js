const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connection = await mongoose.connect('mongodb+srv://kabit48223:kabit48223@cluster0.2myucyv.mongodb.net/interview', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected Successfully!`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;


// email: kabit48223@ozatvn.com
// pass: Kabit4822@

// databaseUsername: kabit48223
// databasePassword: kabit48223