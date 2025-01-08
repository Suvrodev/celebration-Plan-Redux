import { Button, Modal } from "antd";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addParty } from "../../../redux/feature/celebrationSlice";
import { ICelebratin, TCategoty, TStatus } from "../../../Types/Celebration";

const AddCelebration = () => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const statuses: TStatus[] = ["In-progress", "Pending", "Completed"];
  const categories: TCategoty[] = ["Family Time", "BBQ Party", "Games"];

  const [selectCategory, setSelectCategory] = useState<TCategoty | "">("");
  const [selectedStatus, setSelectedStatus] = useState<TStatus | "">("");

  const handleStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(event.target.value as TStatus);
  };

  const handleCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectCategory(event.target.value as TCategoty);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const Form = event.target as HTMLFormElement;

    const title: string = Form.titlee.value;
    const description: string = Form.description.value;
    const deadline: string = Form.deadline.value;
    const formData = {
      title,
      description,
      deadline,
      category: selectCategory,
      status: selectedStatus,
    };
    console.log(formData);
    dispatch(addParty(formData as ICelebratin));
    Form.reset();
    handleOk();
  };

  return (
    <div className="bg-yellow-400">
      <Button type="primary" onClick={showModal}>
        Add Celebration
      </Button>
      <Modal
        title="Add Celebration"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <form action="" onSubmit={handleSubmit}>
          <p className="font-bold">Title</p>
          <input
            type="text"
            name="titlee"
            id=""
            placeholder="Party Title"
            className="bg-transparent py-2 px-4 border-4 rounded-md outline-0 w-full "
          />

          <p className="font-bold mt-4">Description</p>
          <textarea
            name="description"
            id=""
            placeholder="Party Title"
            className="bg-transparent py-2 px-4 border-4 rounded-md outline-0 w-full"
          />

          <p className="font-bold mt-4">Categoory</p>
          <select
            id="statusDropdown"
            value={selectCategory}
            onChange={handleCategory}
            className="bg-transparent mt-4"
          >
            <option value="" disabled>
              -- Select Category --
            </option>
            {categories.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>

          <p className="font-bold mt-4">Status</p>
          <select
            id="statusDropdown"
            value={selectedStatus}
            onChange={handleStatus}
            className="bg-transparent mt-2"
          >
            <option value="" disabled>
              -- Select Status --
            </option>
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
          <p className="font-bold mt-4">Deadline</p>
          <input
            type="date"
            name="deadline"
            id=""
            className="bg-slate-400  py-2 px-4 border-4 rounded-md outline-0"
          />

          <div className="mt-4">
            <button className="btn bg-green-500 text-white px-4 py-2 rounded-md">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddCelebration;
