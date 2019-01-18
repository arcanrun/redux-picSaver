const initialState = {
  isVisible: false
};
export function menu(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_MENU":
      return { ...state, isVisible: !state.isVisible };

    default:
      return state;
  }
}
