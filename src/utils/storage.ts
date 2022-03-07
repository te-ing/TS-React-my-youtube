const storage = window.localStorage;

export const setItem = (key: string, value: string) => {
  try {
    storage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};
export const getItem = (key: string, defaultValue?: string) => {
  try {
    const storedValue = storage.getItem(key);

    if (storedValue) {
      return JSON.parse(storedValue);
    }
    return defaultValue;
  } catch (e) {
    console.log(e);
    return defaultValue;
  }
};

export const addItem = (key: string, defaultValue?: string) => {
  try {
    const storedValue = storage.getItem(key);

    if (storedValue) {
      storage.setItem(key, JSON.stringify([defaultValue, ...getItem(key)]));
      return JSON.parse(storedValue);
    } else {
      storage.setItem(key, JSON.stringify([defaultValue]));
    }
    return defaultValue;
  } catch (e) {
    console.log(e);
    return defaultValue;
  }
};
