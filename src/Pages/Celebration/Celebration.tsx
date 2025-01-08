import { useAppSelector } from "../../redux/hook";
import CelebrationCard from "./CelebrationCard/CelebrationCard";
import AddCelebration from "./AddCelebration/AddCelebration";

const Celebration = () => {
  const { celebrations } = useAppSelector((state) => state.celebration);
  //   console.log(celebrations);

  return (
    <div>
      <div className="flex items-center justify-between my-4">
        <h1>BBQ Party</h1>
        <div>
          <AddCelebration />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {celebrations.map((celebration, idx) => (
          <CelebrationCard key={idx} celebration={celebration} />
        ))}
      </div>
    </div>
  );
};

export default Celebration;
