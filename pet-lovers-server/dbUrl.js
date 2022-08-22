// Configuration   || "mongodb://localhost:27017/groceries"  || "mongodb+srv://qq:qq@pet-lovers.pmvhfoa.mongodb.net/?retryWrites=true&w=majority"
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/groceries");
const dbUrl = process.env.MONGODB_URI || "mongodb://localhost:27017";

module.exports = dbUrl;