import { Button } from "antd";
import { useState } from "react";
import { useAppDispatch } from "../../../redux/hook";
import { categoryFilterAction } from "../../../redux/feature/celebrationSlice";

const CategoryFilter = () => {
  const dispatch = useAppDispatch();

  const categories: string[] = ["All", "Family Time", "BBQ Party", "Games"];

  const [categoryFilter, setCategoryFilter] = useState("All");
  const handleSelectCategory = (categoryName: string) => {
    setCategoryFilter(categoryName);
    dispatch(categoryFilterAction(categoryName));
  };
  // console.log("Category Filter: ", categoryFilter);
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
