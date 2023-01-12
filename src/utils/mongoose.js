const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://syguru82sun:Roll123@cluster0.btfeueg.mongodb.net/guru123")
  .then(() => console.log("Mongodb conencted"))
  .catch((err) => console.log(err));
