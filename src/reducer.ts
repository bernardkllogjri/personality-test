const reducer = (state: any, action: { type: string, payload: any }) => {
  switch (action.type) {
    case 'SET_VALUE':
      return { ...state, ...action.payload };
    default:
      throw new Error();
  }
}

export { reducer }