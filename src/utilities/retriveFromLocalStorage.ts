import { ICelebration } from "../Types/CelebrationType";

export const retriveFromLocalStorage = () => {
  const dataString = localStorage.getItem("bung");
  if (dataString) {
    const data: ICelebration[] = JSON.parse(dataString);
    return data;
  } else {
    return [];
  }
};
