import { deleteParty } from "../../../redux/feature/celebrationSlice";
import { useAppDispatch } from "../../../redux/hook";
import { ICelebratin } from "../../../Types/Celebration";
import { Trash2 } from "lucide-react";
import UpdateCelebration from "../UpdateCelebration/UpdateCelebration";

interface Iprops {
  celebration: ICelebratin;
}
const CelebrationCard = ({ celebration }: Iprops) => {
  //   console.log(celebration);
  const { id, title, description, deadline, category, status } = celebration;

  const dispatch = useAppDispatch();

  return (
    <div className="border p-2 rounded-md shadow-white shadow-md">
      <div className="flex justify-between mb-4">
        <div className="flex items-center gap-2">
          <p
            className={`size-4 rounded-full ${
              status === "Completed"
                ? "bg-green-400"
                : status === "In-progress"
                ? "bg-yellow-400"
                : "bg-red-500"
            }`}
          ></p>
          <h1 className="font-bold text-xl ">{title}</h1>
          <span>({category})</span>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" name="" id="" className="size-5" />
          <Trash2
            className="text-red-500"
            onClick={() => dispatch(deleteParty(id))}
          />
          <UpdateCelebration celebration={celebration} />
        </div>
      </div>
      <p>{description}</p>
      <p className="mt-4 flex gap-2 items-center">
        <span className="p-2 bg-white rounded-md text-black">deadline</span>
        {deadline}
      </p>
    </div>
  );
};

export default CelebrationCard;
