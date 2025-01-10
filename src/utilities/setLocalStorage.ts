export const setLocalStorage = (data: object) => {
  //   console.log("Data in Local Storage: ", data);
  const dataString = JSON.stringify(data);
  localStorage.setItem("bung", dataString);
};
