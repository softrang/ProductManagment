// src/redux/slices/productSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
 
  from: {},
  deta: [
    {
      id:nanoid(),
      title:"Opna Women's Short Sleeve Moisture",
      dic:"Classic, lightweight, moisture-wicking polo shirt with sleek, athletic style.",
      price:"250$",
      status:"All Order",
      timestamp: new Date().toLocaleString()

    },
    { 
      id:nanoid(),
      title:"MBJ Women's Solid Short Sleeve Boat Neck V Shirt",
      dic:"Classic, lightweight, moisture-wicking polo shirt with sleek, athletic style.",
      price:"250$",
      status:"Pending",
      timestamp: new Date().toLocaleString()
    },
    {
      id:nanoid(),
      title:"White Gold Plated Princess",
      dic:"Classic, lightweight, moisture-wicking polo shirt with sleek, athletic style.",
      price:"250$",
      status:"Review",
      timestamp: new Date().toLocaleString()
    },
    {
      id:nanoid(),
      title:"Pierced Owl Rose Gold Plated Stainless Steel Double",
      dic:"Classic, lightweight, moisture-wicking polo shirt with sleek, athletic style.",
      price:"250$",
      status:"Success",
      timestamp: new Date().toLocaleString()
    },
    {
      id:nanoid(),
      title:"DANVOUY Womens T Shirt Casual Cotton Short",
      dic:"Classic, lightweight, moisture-wicking polo shirt with sleek, athletic style.",
      price:"250$",
      status:"Complete",
      timestamp: new Date().toLocaleString()
    },
    {
      id:nanoid(),
      title:"Mens Casual Slim Fit",
      dic:"Classic, lightweight, moisture-wicking polo shirt with sleek, athletic style.",
      price:"250$",
      status:"Cancel",
      timestamp: new Date().toLocaleString()
    },



  ],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setFrom(state, action) {
      state.from = {
        ...state.from,
        ...action.payload,
        timestamp: new Date().toLocaleString(), // Add timestamp automatically
        id:nanoid(),
    }},
    addProduct(state) {
      if (state.from && Object.keys(state.from).length > 0) {
        state.deta.push(state.from);
      } else {
        console.warn("No data in 'from' to add to 'deta'");
      }
    },
    resetForm(state) {
      state.from = {};
    },

    deletIndexz(state, action) {
      const indexToDelete = action.payload;
      state.deta.splice(indexToDelete, 1); // Remove the item at the specified index
    },
    deletIndex(state, action) {
     state.deta= state.deta.filter((items)=> items.id !== action.payload)
    },
  

    updateProduct(state, action) {
      const newData = action.payload;
      const itemIndex = state.deta.findIndex(item => item.id === newData.id);

      if (itemIndex !== -1) {
        state.deta[itemIndex] = { ...state.deta[itemIndex], ...newData };
      } else {
        console.warn("Item not found in state for update:", newData);
      }
    },
  


  },
});

export const { setFrom, addProduct, resetForm , deletIndex, updateProduct} = productSlice.actions;
export default productSlice.reducer;
