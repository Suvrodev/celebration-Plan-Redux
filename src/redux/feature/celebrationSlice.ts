import { retriveFromLocalStorage } from "./../../utilities/retriveFromLocalStorage";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { ICelebration } from "../../Types/CelebrationType";
import { setLocalStorage } from "../../utilities/setLocalStorage";

interface IInitialState {
  celebrations: ICelebration[];
}

const getDataFromLocalStorage = localStorage.getItem("bung");
let parties: ICelebration[] | null = [];
if (getDataFromLocalStorage) {
  const data: ICelebration[] = JSON.parse(getDataFromLocalStorage);
  parties = [...data];
} else {
  parties = null;
}
const initialState: IInitialState = {
  // celebrations: [
  //   {
  //     id: "1",
  //     title: "New Year Party",
  //     description:
  //       "Celebrate the beginning of the new year with a grand party and fireworks.",
  //     deadline: "2025-01-01",
  //     status: "Completed",
  //     category: "BBQ Party",
  //   },
  //   {
  //     id: "2",
  //     title: "Team Success Celebration",
  //     description:
  //       "A gathering to appreciate the team's success in completing the project.",
  //     deadline: "2025-02-15",
  //     status: "In-progress",
  //     category: "Games",
  //   },
  //   {
  //     id: "3",
  //     title: "Friendship Day Picnic",
  //     description:
  //       "Enjoy a picnic with games, food, and fun to celebrate Friendship Day.",
  //     deadline: "2025-08-03",
  //     status: "Pending",
  //     category: "BBQ Party",
  //   },
  //   {
  //     id: "4",
  //     title: "Birthday Celebration",
  //     description:
  //       "Celebrate John's birthday with friends, family, and a surprise cake.",
  //     deadline: "2025-06-10",
  //     status: "Completed",
  //     category: "Family Time",
  //   },
  //   {
  //     id: "5",
  //     title: "Diwali Party",
  //     description:
  //       "Host a Diwali celebration with traditional food, lights, and fireworks.",
  //     deadline: "2025-11-10",
  //     status: "In-progress",
  //     category: "Family Time",
  //   },
  // ],
  celebrations: parties || [],
};

export const celebrationSlice = createSlice({
  name: "celebration",
  initialState,
  reducers: {
    addParty: (state, action: PayloadAction<ICelebration>) => {
      action.payload.id = nanoid();
      action.payload.isCompleted = false;
      state.celebrations.push(action.payload);
      setLocalStorage(state.celebrations);
    },
    deleteParty: (state, action: PayloadAction<string>) => {
      console.log("delete id: ", action.payload);
      const data = state.celebrations.filter(
        (data) => data.id != action.payload
      );

      setLocalStorage(data);
      state.celebrations = [...data];
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

      setLocalStorage(state.celebrations);
    },
    completeTask: (state, action) => {
      const id = action.payload;
      console.log("Come Data: ", id);
      state.celebrations.forEach((data) => {
        if (data.id === id) {
          data.isCompleted = !data.isCompleted;
        }
      });
      setLocalStorage(state.celebrations);
    },
    statusFilterAction: (
      state,
      action: PayloadAction<{ btn: string; celebrations: ICelebration[] }>
    ) => {
      const { btn } = action.payload;
      const allData: string | null = localStorage.getItem("bung");

      if (allData) {
        const celebratData: ICelebration[] = JSON.parse(allData);
        if (btn === "All") {
          state.celebrations = [...celebratData];
        } else {
          state.celebrations = celebratData.filter(
            (data) => data.status === btn
          );
        }
      }
    },
    categoryFilterAction: (state, action) => {
      const categoryName = action.payload;
      console.log("Category Name: ", categoryName);
      const allData: ICelebration[] = retriveFromLocalStorage();
      if (categoryName === "All") {
        state.celebrations = [...allData];
      } else {
        state.celebrations = allData.filter(
          (data) => data.category === categoryName
        );
      }
    },
  },
});

export const {
  addParty,
  deleteParty,
  updateParty,
  completeTask,
  statusFilterAction,
  categoryFilterAction,
} = celebrationSlice.actions;
export default celebrationSlice.reducer;
