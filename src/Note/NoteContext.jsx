import { createContext } from "react";

export const NotesContext = createContext(null);
export const NotesDispatchContext = createContext(null);

export default function notesReducer(draft, action) {
  switch (action.type) {
    case "ADD_NOTE": {
      draft.push(action.note);
      break;
    }

    case "DELETE_NOTE": {
      return draft.filter(note => note.id !== action.id);
    }

    case "CHANGE_TEXT": {
      const note = draft.find(n => n.id === action.id);
      if (note) note.text = action.text;
      break;
    }

    case "CHANGE_DONE": {
      const note = draft.find(n => n.id === action.id);
      if (note) note.done = action.done;
      break;
    }

    default:
      break;
  }
}
