require("dotenv").config();

const Room = require("../models/room");
const mongoose = require("mongoose");

const rooms = require("../data/rooms");

if (!process.env.DB_URI) {
  console.log("DB_URI is not set. Add it to your .env file before seeding.");
  process.exit(1);
}

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedRooms = async () => {
  try {
    await Room.deleteMany();
    console.log("Rooms are deleted");

    await Room.insertMany(rooms);
    console.log("All Rooms are added.");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedRooms();
