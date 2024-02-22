import {createSlice} from "@reduxjs/toolkit";

const initialState ={
  categoryId: 0
}
export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers:{
    setCategoryId(state, action){
      state.categoryId = action.payload
    },
    setFilters(state,action){
      state.categoryId = Number(action.payload.categoryId)
    }
  },
})
export const {setCategoryId, setFilters} = categorySlice.actions
export default categorySlice.reducer