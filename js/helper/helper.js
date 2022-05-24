export const getValueById = (id) => {
  return document.getElementById(id).value;
};

export const setLocalStorage = (data) => {
  let dataString = JSON.stringify(data);
  localStorage.setItem("tasksLocalStorage", dataString);
};
