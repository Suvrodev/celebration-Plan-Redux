import { Button } from "antd";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { statusFilterAction } from "../../../redux/feature/celebrationSlice";

const StatusFilter = () => {
  const { celebrations } = useAppSelector((state) => state.celebration);
  const dispatch = useAppDispatch();
  const buttons: string[] = ["All", "In-progress", "Pending", "Completed"];
  const [btnName, setBtnName] = useState("All");
  const handleSelectStatus = (btn: string) => {
    setBtnName(btn);
    dispatch(statusFilterAction({ btn, celebrations }));
  };

  return (
    <div className="flex gap-1 items-center">
      {buttons.map((btn, idx) => (
        <Button
          key={idx}
          onClick={() => handleSelectStatus(btn)}
          className={`${btn === btnName ? "bg-blue-500 text-white" : ""}`}
        >
          {" "}
          {btn}{" "}
        </Button>
      ))}
    </div>
  );
};

export default StatusFilter;
