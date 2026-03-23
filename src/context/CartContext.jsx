import { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const initialState = {
  cart: [],
  total: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      let updatedCart;
      let newTotal = state.total + action.payload.price;

      if (existingItemIndex >= 0) {
        updatedCart = [...state.cart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + 1,
        };
      } else {
        updatedCart = [...state.cart, { ...action.payload, quantity: 1 }];
      }

      return { ...state, cart: updatedCart, total: newTotal };
    }
    case "REMOVE_FROM_CART": {
      const itemToRemove = state.cart.find((item) => item.id === action.payload);
      const updatedCart = state.cart.filter((item) => item.id !== action.payload);
      const newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
      return { ...state, cart: updatedCart, total: newTotal };
    }
    case "INCREASE_QUANTITY": {
      const updatedCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      const item = state.cart.find((item) => item.id === action.payload);
      return { ...state, cart: updatedCart, total: state.total + item.price };
    }
    case "DECREASE_QUANTITY": {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        return cartReducer(state, { type: "REMOVE_FROM_CART", payload: action.payload });
      }
      const updatedCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      return { ...state, cart: updatedCart, total: state.total - item.price };
    }
    case "CLEAR_CART":
      return initialState;
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load from local storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cartState");
    if (savedCart) {
      const parsed = JSON.parse(savedCart);
      parsed.cart.forEach((item) => {
        for(let i = 0; i < item.quantity; i++) {
            dispatch({type: "ADD_TO_CART", payload: item})
        }
        // This is a naive load, a better way is initializing reducer with lazy state, but useReducer doesn't easily support lazy async load without a wrapper.
        // Actually, let's just use effect for saving, and read from local storage in initialState directly.
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartState", JSON.stringify(state));
  }, [state]);

  const addToCart = (item) => dispatch({ type: "ADD_TO_CART", payload: item });
  const removeFromCart = (id) => dispatch({ type: "REMOVE_FROM_CART", payload: id });
  const increaseQuantity = (id) => dispatch({ type: "INCREASE_QUANTITY", payload: id });
  const decreaseQuantity = (id) => dispatch({ type: "DECREASE_QUANTITY", payload: id });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        total: state.total,
        cartCount: state.cart.reduce((acc, item) => acc + item.quantity, 0),
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
