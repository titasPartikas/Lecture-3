const express = require("express");
const cors = require("cors");

const server = express();
server.use(express.json());
server.use(cors());

const rentalCars = [];

server.get("/", (_, res) => {
  res.send({
    greetings: "Hello!",
  });
});

server.get("/rental-cars", (_, res) => {
  res.send(rentalCars);
});

server.post("/register-car", (req, res) => {
  const payload = req.body;
  const newRentalCar = {
    owner: {
      firstName: payload.firstName,
      lastName: payload.lastName,
      gender: payload.gender,
    },
    carBrand: payload.carBrand,
  };

  rentalCars.push(newRentalCar);

  res.status(201).end();
});

// GET, POST, PUT, PATCH (very rare), DELETE

server.listen(8080, () => console.log("server is running at 8080"));
