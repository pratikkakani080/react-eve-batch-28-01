import React from "react";

function useStorage(props) {
  console.log("props custom hook", props);

  const setLocalValue = (key, value) => {
    localStorage.setItem(key, value);
  };

  const getLocalData = (key) => {
    return localStorage.getItem(key);
  };

  const removeStoredData = () => {
    localStorage.clear();
  };

  return [getLocalData, setLocalValue, removeStoredData];
}

export default useStorage;
