import "./EmptyPlan.css";
const EmptyPlan = () => {
  return (
    <div className="flex items-center justify-center flex-col ">
      <h1 className="text-2xl font-bold mt-10">
        You haven't set a plan yet...
      </h1>
      <p className=" mt-4 text-4xl font-bold">Please Add Plan</p>
    </div>
  );
};

export default EmptyPlan;
