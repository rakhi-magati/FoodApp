import { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const initialState = {
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART":
      return { cart: action.payload };

    case "ADD_TO_CART": {
      const price = Number(action.payload.price) || 0;

      const existing = state.cart.find(item => item.id === action.payload.id);

      if (existing) {
        return {
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }

      return {
        cart: [...state.cart, { ...action.payload, price, quantity: 1 }]
      };
    }

    case "REMOVE_FROM_CART":
      return {
        cart: state.cart.filter(item => item.id !== action.payload)
      };

    case "INCREASE_QUANTITY":
      return {
        cart: state.cart.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };

    case "DECREASE_QUANTITY":
      return {
        cart: state.cart
          .map(item =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter(item => item.quantity > 0)
      };

    case "CLEAR_CART":
      return { cart: [] };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // ✅ Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("cartState");
    if (saved) {
      const parsed = JSON.parse(saved);

      const safeCart = parsed.cart.map(item => ({
        ...item,
        price: Number(item.price) || 0
      }));

      dispatch({ type: "SET_CART", payload: safeCart });
    }
  }, []);

  // ✅ Save to localStorage
  useEffect(() => {
    localStorage.setItem("cartState", JSON.stringify(state));
  }, [state]);

  // ✅ ALWAYS calculate total fresh (BEST PRACTICE)
  const total = state.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const addToCart = (item) =>
    dispatch({ type: "ADD_TO_CART", payload: item });

  const removeFromCart = (id) =>
    dispatch({ type: "REMOVE_FROM_CART", payload: id });

  const increaseQuantity = (id) =>
    dispatch({ type: "INCREASE_QUANTITY", payload: id });

  const decreaseQuantity = (id) =>
    dispatch({ type: "DECREASE_QUANTITY", payload: id });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        total,
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

export const useCart = () => useContext(CartContext);