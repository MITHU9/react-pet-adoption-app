/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const CategoryBtn = ({ setPets }) => {
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategory = async (category) => {
    //console.log(category);

    try {
      const response = await fetch(
        `https://openapi.programming-hero.com/api/peddy/category/${category}`
      );
      const pets = await response.json();
      if (pets && pets.data && pets.data.length) {
        setPets(pets.data);
      } else {
        setPets([]);
        throw new Error("No data found");
      }
    } catch (error) {
      console.error(error);
    }
    setSelectedCategory(category);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://openapi.programming-hero.com/api/peddy/categories"
        );
        const data = await response.json();
        //console.log(data.categories);
        if (data && data.categories && data.categories.length) {
          setCategory(data.categories);
        } else {
          throw new Error("No data found");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  //console.log(selectedCategory);

  return (
    <div className="flex justify-between items-center mt-10 flex-wrap gap-2">
      {category.map((item) => (
        <button
          onClick={() => handleCategory(item.category)}
          key={item.id}
          className={`px-6 py-3 ${
            selectedCategory == item.category
              ? "bg-emerald-400"
              : "bg-gray-200 "
          } rounded-lg font-semibold flex items-center gap-3 w-32 justify-evenly border border-emerald-400/50 `}
        >
          <img className="size-6" src={item.category_icon} alt="category" />
          <span>{item.category}</span>
        </button>
      ))}
    </div>
  );
};
export default CategoryBtn;
