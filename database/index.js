const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://ricknoutat:Cludvncicode11@cluster0.wijxozj.mongodb.net/twitter?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

module.exports = mongoose;
