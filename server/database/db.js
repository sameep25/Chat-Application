import mongoose from "mongoose";

const Connection = async (username ,password) => {
  const URL =
    `mongodb+srv://${username}:${password}@whatsapp.rypus.mongodb.net/WhatsApp?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL);
    console.log("Database is connected successfully") ;
  } catch (error) {
    console.log(" error message : ", error);
  }
};

export default Connection;
