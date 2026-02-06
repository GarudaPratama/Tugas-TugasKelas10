export function studentReducer(draft, action) {
  switch (action.type) {
    case "ADD_STUDENT":
      draft.push(action.payload);
      break;

    case "DELETE_STUDENT":
      return draft.filter(s => s.id !== action.payload);

    case "UPDATE_STUDENT":
      const index = draft.findIndex(s => s.id === action.payload.id);
      if (index !== -1) {
        draft[index] = action.payload;
      }
      break;

    default:
      break;
  }
}
