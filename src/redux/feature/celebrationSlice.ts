import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { ICelebratin } from "../../Types/Celebration";

interface IInitialState {
  celebrations: ICelebratin[];
}

const initialState: IInitialState = {
  celebrations: [
    {
      id: "1",
      title: "New Year Party",
      description:
        "Celebrate the beginning of the new year with a grand party and fireworks.",
      deadline: "2025-01-01",
      status: "Completed",
      category: "BBQ Party",
    },
    {
      id: "2",
      title: "Team Success Celebration",
      description:
        "A gathering to appreciate the team's success in completing the project.",
      deadline: "2025-02-15",
      status: "In-progress",
      category: "Games",
    },
    {
      id: "3",
      title: "Friendship Day Picnic",
      description:
        "Enjoy a picnic with games, food, and fun to celebrate Friendship Day.",
      deadline: "2025-08-03",
      status: "Pending",
      category: "BBQ Party",
    },
    {
      id: "4",
      title: "Birthday Celebration",
      description:
        "Celebrate John's birthday with friends, family, and a surprise cake.",
      deadline: "2025-06-10",
      status: "Completed",
      category: "Family Time",
    },
    {
      id: "5",
      title: "Diwali Party",
      description:
        "Host a Diwali celebration with traditional food, lights, and fireworks.",
      deadline: "2025-11-10",
      status: "In-progress",
      category: "Family Time",
    },
  ],
};

export const celebrationSlice = createSlice({
  name: "celebration",
  initialState,
  reducers: {
    addParty: (state, action: PayloadAction<ICelebratin>) => {
      action.payload.id = nanoid();

      // console.log(action.payload);
      state.celebrations.push(action.payload);
    },
    deleteParty: (state, action: PayloadAction<string>) => {
      console.log("delete id: ", action.payload);
      state.celebrations = state.celebrations.filter(
        (data) => data.id != action.payload
      );
    },
    updateParty: (state, action) => {
      const { id, formData } = action.payload;
      state.celebrations.forEach((data) => {
        if (data.id == id) {
          data.title = formData.title;
          data.description = formData.description;
          data.category = formData.category;
          data.status = formData.status;
          data.deadline = formData.deadline;
        }
      });
    },
  },
});

export const { addParty, deleteParty, updateParty } = celebrationSlice.actions;
export default celebrationSlice.reducer;
