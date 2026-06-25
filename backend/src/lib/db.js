const mongoose = require("mongoose");

async function connectDB() {
  try {
    const mongo_uri = process.env.MONGO_URI;

    if (!mongo_uri) {
      throw new Error("MONGO_URI is required");
    }
    const conn = await mongoose.connect(mongo_uri);

    console.log("MongoDB connected:", conn.connection.host);
  } catch (error) {
    console.log("MongoDB Connection Error:", error.message);
    process.exit(1);
  }
}

module.exports=connectDB