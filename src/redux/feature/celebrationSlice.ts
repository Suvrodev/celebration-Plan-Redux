import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  celebrations: [
    {
      title: "New Year Party",
      description:
        "Celebrate the beginning of the new year with music, food, and fireworks.",
      deadline: "2025-01-01",
    },
    {
      title: "Team Success Celebration",
      description:
        "A gathering to appreciate the team's success in completing the project on time.",
      deadline: "2025-02-15",
    },
    {
      title: "Friendship Day Picnic",
      description:
        "A fun-filled day at the park to celebrate Friendship Day with games and food.",
      deadline: "2025-08-03",
    },
  ],
};

export const celebrationSlice = createSlice({
  name: "celebration",
  initialState,
  reducers: {
    addParty: (state, action) => {
      state.celebrations.push(action.payload);
    },
  },
});

export const { addParty } = celebrationSlice.actions;
export default celebrationSlice.reducer;
