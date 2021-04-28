const logger = reducer => {
  if (process.env.NODE_ENV !== 'production') {
    const reducerWithLogger = (state, action) => {
      const next = reducer(state, action);
      console.group(
        `%cAction: %c${action.type}`,
        'color: lightgreen; font-weight: bold;',
        'color: white; font-weight: bold;',
      );
      console.log('%cPrevious State:', 'color: #9E9E9E; font-weight: 700;', state);
      console.log('%cAction:', 'color: #00A7F7; font-weight: 700;', action);
      console.log('%cNext State:', 'color: #47B04B; font-weight: 700;', next);
      console.groupEnd();
      return next;
    };

    return reducerWithLogger;
  }

  return reducer;
};

export default logger;
