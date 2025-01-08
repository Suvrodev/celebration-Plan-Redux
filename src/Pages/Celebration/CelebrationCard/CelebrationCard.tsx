import { ICelebratin } from "../../../Types/Celebration";
import { SquarePen, Trash2 } from "lucide-react";

interface Iprops {
  celebration: ICelebratin;
}
const CelebrationCard = ({ celebration }: Iprops) => {
  //   console.log(celebration);
  const { title, description, deadline } = celebration;
  return (
    <div className="border p-2 rounded-md shadow-white shadow-md">
      <div className="flex justify-between mb-4">
        <h1 className="font-bold text-xl ">{title}</h1>
        <div className="flex items-center gap-2">
          <input type="checkbox" name="" id="" className="size-5" />
          <Trash2 className="text-red-500" />
          <SquarePen className="text-green-500" />
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
