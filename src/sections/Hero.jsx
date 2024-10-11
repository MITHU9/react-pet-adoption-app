import Button from "../components/CommonBtn";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:w-11/12 mx-auto justify-center items-center mt-3">
      <div className="text-center">
        <p className="text-xl font-semibold text-gray-600">
          Bringing Families Together❤️
        </p>
        <h1 className="text-3xl font-bold py-3">
          Your Path to Adoption <br /> Starts Here
        </h1>
        <p className="text-gray-600 font-semibold w-2/3 mx-auto">
          Pets are wonderful companions that bring joy, comfort, and
          unconditional love to our lives. Whether it’s a playful dog, a curious
          cat, or a chatty parrot, pets can offer emotional support and improve
          our mental well-being.
        </p>
        <Button text={"View More"} />
      </div>
      <div className="w-11/12">
        <img className="w-full object-cover" src="/images/pet.webp" alt="pet" />
      </div>
    </div>
  );
};
export default HeroSection;
