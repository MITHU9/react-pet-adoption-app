/* eslint-disable react/prop-types */
import { CiGrid41 } from "react-icons/ci";
import { IoCalendarClearOutline } from "react-icons/io5";
import { TbGenderHermaphrodite } from "react-icons/tb";
import { FaDollarSign } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

const Card = ({ pets, loading }) => {
  //console.log(pets);
  const [image, setImage] = useState([]);
  const [adoptPet, setAdoptPet] = useState([]);
  const [count, setCount] = useState(3);
  const [selectedPet, setSelectedPet] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdopted, setIsAdopted] = useState(false);

  const handleLike = (petImage) => {
    //console.log(petImage);
    setImage([...image, petImage]);
  };
  //console.log(image);

  const handleDetails = (pet) => {
    //console.log(pet);
    setSelectedPet(pet);
    setIsModalOpen(true);
  };

  const handleAdopt = (petId) => {
    //console.log(petId);
    setAdoptPet([...adoptPet, petId]);
    setIsAdopted(true);
    setCount(3);
    const interValId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 1) {
          // Clear the interval and close the modal when count reaches 0
          clearInterval(interValId);
          setIsAdopted(false);
        }
        return prevCount - 1; // Decrease the count
      });
    }, 1000);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-5">
        <div
          id="pet-cards"
          className="col-span-2 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-3"
        >
          {loading ? (
            <div className="col-span-3 h-24 flex items-center justify-center">
              <span className=" loading loading-bars loading-lg"></span>
            </div>
          ) : Array.isArray(pets) && pets.length > 0 ? (
            pets.map((pet) => (
              <div
                key={pet.id}
                className="flex flex-col gap-3 p-3 rounded-lg border border-emerald-300/50"
              >
                <div>
                  <img
                    className="w-full rounded-xl"
                    src={pet.image}
                    alt="pet"
                  />
                </div>
                <div className="text-gray-500 font-semibold">
                  <h2 className="text-2xl font-bold text-gray-600">
                    {pet.pet_name}
                  </h2>
                  <p className="flex items-center gap-1">
                    <CiGrid41 />
                    Breed: {pet.breed ? pet.breed : "Not Available"}
                  </p>
                  <p className="flex items-center gap-1">
                    <IoCalendarClearOutline />
                    Birth:{" "}
                    {pet.date_of_birth ? pet.date_of_birth : "Not Available"}
                  </p>
                  <p className="flex items-center gap-1">
                    <TbGenderHermaphrodite />
                    Gender: {pet.gender ? pet.gender : "Not Available"}
                  </p>
                  <p className="flex items-center gap-1">
                    <FaDollarSign /> Price:{" "}
                    {pet.price ? pet.price + "$" : "Not Available"}
                  </p>
                  <hr className="my-2 mt-3" />
                  <div className="flex items-center justify-between mt-3 flex-wrap gap-1">
                    <button
                      onClick={() => handleLike(pet.image)}
                      className="px-4 py-2.5 font-semibold rounded-lg border border-emerald-300/40 hover:bg-primary hover:text-white"
                    >
                      <BiSolidLike />
                    </button>
                    <button
                      id="adopt-btn"
                      onClick={() => handleAdopt(pet.petId)}
                      disabled={adoptPet.includes(pet.petId)}
                      className={`px-3 text-primary py-1 font-semibold rounded-lg border border-emerald-300/40 hover:bg-primary hover:text-white text-lg ${
                        adoptPet.includes(pet.petId)
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                    >
                      {adoptPet.includes(pet.petId) ? "Adopted" : "Adopt"}
                    </button>

                    <button
                      onClick={() => handleDetails(pet)}
                      className="px-3 lg:px-4 text-primary py-1 font-semibold rounded-lg border border-emerald-300/40 hover:bg-primary hover:text-white text-lg "
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 flex flex-col items-center gap-3 text-center bg-[#F8F8F8] p-8 rounded-lg">
              <img src="/images/error.webp" />
              <div>
                <h1 className="text-2xl font-bold">No Information Available</h1>
                <p className="font-semibold text-gray-500 py-2">
                  It looks like there`s currently no content available in this
                  section. Please check back later for updates, or explore other
                  parts of our site for more information.
                </p>
              </div>
            </div>
          )}
        </div>

        <div
          id="pet-images"
          className="grid md:grid-cols-2 grid-cols-1 gap-3 border rounded-lg p-3 place-self-start w-full md:min-w-52"
        >
          {image.length > 0 ? (
            image.map((img, index) => (
              <div key={index}>
                <img className="w-full rounded-lg" src={img} alt="pet" />
              </div>
            ))
          ) : (
            <div className="col-span-2 text-gray-500 font-semibold text-center">
              <h2 className=" text-2xl font-bold text-gray-600">
                No Liked Pets
              </h2>
            </div>
          )}
        </div>
      </div>

      {selectedPet && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <button className="hidden "></button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle className="text-3xl font-bold">
              {selectedPet.pet_name} Details
            </DialogTitle>
            <DialogDescription>
              <div>
                <img
                  className="w-full rounded-lg mt-4"
                  src={selectedPet.image}
                  alt={selectedPet.pet_name}
                />
              </div>
              <div className="mt-3 py-2">
                <p>
                  <strong>Breed:</strong>{" "}
                  <span className="font-semibold">
                    {selectedPet.breed || "Not Available"}
                  </span>
                </p>
                <p>
                  <strong>Date of Birth:</strong>{" "}
                  <span className="font-semibold">
                    {selectedPet.date_of_birth || "Not Available"}
                  </span>
                </p>
                <p>
                  <strong>Gender:</strong>{" "}
                  <span className="font-semibold">
                    {selectedPet.gender || "Not Available"}
                  </span>
                </p>
                <p>
                  <strong>Price:</strong>{" "}
                  <span className="font-semibold">
                    {selectedPet.price
                      ? selectedPet.price + "$"
                      : "Not Available"}
                  </span>
                </p>
                <p>
                  <strong>IsVaccinated:</strong>{" "}
                  <span className="font-semibold">
                    {selectedPet.vaccinated_status
                      ? selectedPet.vaccinated_status
                      : "not vaccinated"}
                  </span>
                </p>
                <hr className="mt-3" />
                <h2 className="text-2xl font-bold text-gray-700">
                  Details Information
                </h2>
                <p className="text-gray-500 font-semibold mt-3">
                  {selectedPet.pet_details}
                </p>
              </div>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      )}
      {adoptPet && (
        <Dialog open={isAdopted} onOpenChange={setIsAdopted}>
          <DialogContent>
            <DialogTitle>Adoption Process</DialogTitle>
            <DialogDescription>
              <div className="flex flex-col items-center justify-center">
                <img
                  className="size-32"
                  src="/images/10017692.png"
                  alt="handShake"
                />
                <h2 className="text-3xl font-bold  text-gray-800">
                  Congrates..
                </h2>
                <h3 className="text-lg font-semibold py-2">
                  Your Adoption is Processing...
                </h3>
                <h2 className="text-5xl font-bold text-center text-gray-900">
                  {count}
                </h2>
              </div>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};
export default Card;
