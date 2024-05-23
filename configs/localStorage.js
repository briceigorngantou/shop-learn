export const setInLocalStorage = (key, data) => {
  if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
    return localStorage.setItem(key, JSON.stringify(data));
  }
  return null;
};

export const getLocalStorage = (key) => {
  if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
    return JSON.parse(localStorage.getItem(key));
  }
  return null;
};

export const cleanLocalStorage = () => {
  if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
    localStorage.clear();
  }
};

export const removeItemLocalStorage = (key) => {
  if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
    return localStorage.removeItem(key);
  }
};
