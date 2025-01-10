import { Button } from "antd";
import { useState } from "react";

const CategoryFilter = () => {
  const categories: string[] = ["All", "Family Time", "BBQ Party", "Games"];

  const [categoryFilter, setCategoryFilter] = useState("All");
  const handleSelectCategory = (categoryName: string) => {
    setCategoryFilter(categoryName);
  };
  console.log("Category Filter: ", categoryFilter);
  return (
    <div className="flex gap-1 items-center">
      {categories.map((category, idx) => (
        <Button
          key={idx}
          onClick={() => handleSelectCategory(category)}
          className={`${
            category === categoryFilter ? "bg-blue-600 text-white" : ""
          }`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
