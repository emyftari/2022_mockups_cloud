import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'search',
  initialState: { searchTerm: '', subcategory: null },
  reducers: {
    setSearch: (state, action) => {
      state.searchTerm = action.payload
    },
    setSubcategory: (state, action) => {
      state.subcategory = action.payload
    },
  },
})

export default filterSlice.reducer
export const { setSearch, setSubcategory } = filterSlice.actions
