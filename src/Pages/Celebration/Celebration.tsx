import { useAppSelector } from "../../redux/hook";
import CelebrationCard from "./CelebrationCard/CelebrationCard";
import AddCelebration from "./AddCelebration/AddCelebration";
import StatusFilter from "./StatusFilter/StatusFilter";
import CategoryFilter from "./CatagoryFilter/CategoryFilter";

const Celebration = () => {
  const { celebrations } = useAppSelector((state) => state.celebration);
  //   console.log(celebrations);

  return (
    <div>
      <div className="flex items-center justify-between my-4">
        <h1>BBQ Party</h1>
        <div>
          <div className="flex justify-end my-2">
            <CategoryFilter />
          </div>
          <div className="flex gap-2 ">
            <div>
              <StatusFilter />
            </div>
            <div>
              <AddCelebration />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {celebrations.length > 0 &&
          celebrations.map((celebration, idx) => (
            <CelebrationCard key={idx} celebration={celebration} />
          ))}
      </div>
    </div>
  );
};

export default Celebration;
