import React, { createContext, useReducer } from 'react';

export const AppContext = createContext();

const initialState = {
  handleAddCart: () => { },
  handleRemoveCart: () => { },
  addCartCount: 0,
  cartProducts: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const exists = state.cartProducts.some(
        (product) => product.name === action.payload.name
      );
      if (!exists) {
        return {
          ...state,
          cartProducts: [...state.cartProducts, action.payload],
          addCartCount: state.addCartCount + 1,
        };
      }
      return state;

      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cartProducts: state.cartProducts.filter(
            (product) => product.name !== action.payload.name
          ),
          addCartCount: state.addCartCount - 1,
        };

    default:
      return state;
  }
};

export default function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddCart = (data) => {
    dispatch({ type: 'ADD_TO_CART', payload: data });
  };

  const handleRemoveCart = (data) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: data });
  };

  return (
    <AppContext.Provider
      value={{
        addCartCount: state.addCartCount,
        cartProducts: state.cartProducts,
        handleAddCart,
        handleRemoveCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
