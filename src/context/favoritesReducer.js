import { useReducer, useEffect } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_FAVORITE": {
      const exists = state.find((item) => item.id === action.payload.id);

      if (exists) {
        return state.filter((item) => item.id !== action.payload.id);
      }

      return [...state, action.payload];
    }

    default:
      return state;
  }
}

export function useFavorites() {
  const [favorites, dispatch] = useReducer(reducer, [], (initialState) => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return { favorites, dispatch };
}
