/* eslint-disable react/prop-types */
import Card from "../components/Card";

const PetsCardSection = ({ setPets, pets, loading }) => {
  const handleSort = () => {
    //console.log("Sort by price");
    const sortedPets = [...pets].sort((a, b) => b.price - a.price);
    //console.log(sortedPets);

    setPets(sortedPets);
  };

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Best Deal For You</h2>
        <button
          onClick={handleSort}
          className="font-semibold px-4 py-2 bg-emerald-400 rounded-xl mt-6 hover:bg-slate-400"
        >
          Sort by Price
        </button>
      </div>
      <Card pets={pets} loading={loading} />
    </div>
  );
};
export default PetsCardSection;
