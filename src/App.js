import './App.css';
import CourseList from './components/CourseList';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import { calculateTotal } from './control/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);
  return (
    <div className="App">
      <Navbar />
      <CourseList />
    </div>
  );
}

export default App;



/*
useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);
{quantity < 1 ? (
        <section className="cart">
        </section>
      ) : (
        <section className="cart">
          <header>
            <h2>Sepetim</h2>
reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      // console.log(action.payload);
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.quantity += 1;
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.quantity -= 1;
    },
    calculateTotal: (state) => {
      let total = 0;
      let quantity = 0;
      state.cartItems.forEach((item) => {
        total += item.quantity * item.price;
        quantity += item.quantity;
      });
      state.quantity = quantity;
      state.total = total;
    },            

*/