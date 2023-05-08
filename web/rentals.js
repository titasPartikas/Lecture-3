window.onload = async () => {
  try {
    const response = await fetch("http://localhost:8080/rental-cars");
    const rentalCars = await response.json();
    rentalCars.forEach((rentalCar) => addRentalCarCard(rentalCar));
  } catch (error) {
    console.error(error);
  }
};

const rentalsContainer = document.querySelector("#rentals");

function addRentalCarCard(rentalCar) {
  const card = document.createElement("div");
  const firstName = document.createElement("p");
  const lastName = document.createElement("p");
  const gender = document.createElement("p");
  const carBrand = document.createElement("p");

  firstName.textContent = `Owners First Name: ${rentalCar.owner.firstName}`;
  lastName.textContent = `Owners Last Name: ${rentalCar.owner.lastName}`;
  gender.textContent = `Owners Genders: ${rentalCar.owner.gender}`;
  carBrand.textContent = `Car Brand: ${rentalCar.carBrand}`;
  card.classList.add("rental-card");
  card.append(firstName, lastName, gender, carBrand);

  rentalsContainer.appendChild(card);
}
