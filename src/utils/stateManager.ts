const createState = <T>(initVal: T) => {
  const state = {
    value: initVal,
  };

  const setState = (newVal: typeof initVal) => (state.value = newVal);
  const getState = (): T => state.value;

  return {
    getState,
    setState,
  };
};

export { createState };
