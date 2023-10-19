import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: 'school',
  request: '',
  sort: '',
  sortDirection: true,
  profile: [],
  age: [],
  language: [],
  district: [],
  metro: [],
  price: {
    minVal: 0,
    maxVal: 10000000,
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryFilter(state, action) {
      state.category = action.payload;
    },
    setRequestFilter(state, action) {
      state.request = action.payload;
    },
    setSortFilter(state, action) {
      state.sort = action.payload;
    },
    setSortDirectionFilter(state) {
      state.sortDirection = !state.sortDirection;
    },
    setCheckboxFilter(state, action) {
      if (state[action.payload.key].includes(action.payload.value)) {
        return {
          ...state,
          [action.payload.key]: state[action.payload.key].filter(
            (i) => i !== action.payload.value
          ),
        };
      } else {
        return {
          ...state,
          [action.payload.key]: state[action.payload.key].concat(
            action.payload.value
          ),
        };
      }
    },
    setPriceFilter(state, action) {
      state.price.minVal = Math.max(0, action.payload.minVal);
      state.price.maxVal = Math.max(0, action.payload.maxVal);
    },
    setFilterDefault() {
      return initialState;
    },
  },
});

export const {
  setCategoryFilter,
  setRequestFilter,
  setSortFilter,
  setSortDirectionFilter,
  setCheckboxFilter,
  setPriceFilter,
  setFilterDefault,
} = filterSlice.actions;

export default filterSlice.reducer;
