import CategoryBtn from "../components/CategoryBtn";
import PetsCardSection from "./PetsCard";
import { useEffect, useState } from "react";

const AdoptionSection = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://openapi.programming-hero.com/api/peddy/pets"
        );
        const data = await response.json();
        //console.log(data.pets);
        if (data && data.pets && data.pets.length) {
          setPets(data.pets);
          setLoading(false);
        } else {
          throw new Error("No data found");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  //console.log(pets);

  return (
    <div>
      <div className="text-center md:w-10/12 lg:w-6/12 mx-auto">
        <h3 className="text-3xl font-bold text-gray-800">
          Adopt Your Best Friend
        </h3>
        <p className="text-gray-500 font-semibold py-2">
          Adopted pets can bring endless love, loyalty, and joy into your home,
          while you give them the happy life they deserve. Whether you adopt
          from a shelter or rescue organization, you`re not just saving a life;
          you`re gaining a devoted friend.
        </p>
      </div>
      <CategoryBtn setPets={setPets} />
      <PetsCardSection setPets={setPets} pets={pets} loading={loading} />
    </div>
  );
};
export default AdoptionSection;
