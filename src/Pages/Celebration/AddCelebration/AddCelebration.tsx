import { Button, Modal } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addParty } from "../../../redux/feature/celebrationSlice";

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const Form = event.target as HTMLFormElement;

    const title: string = Form.titlee.value;
    const description: string = Form.description.value;
    const deadline: string = Form.deadline.value;
    const formData = { title, description, deadline };
    console.log(formData);
    dispatch(addParty(formData));
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
