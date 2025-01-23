import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  restaurants: [],
  reservations: [],
  payments: [],
  reviews: [],
  loading: false,
  error: null,
};

const dbSlice = createSlice({
  name: 'db',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setRestaurants: (state, action) => {
      state.restaurants = action.payload;
    },
    setReservations: (state, action) => {
      state.reservations = action.payload;
    },
    setPayments: (state, action) => {
      state.payments = action.payload;
    },
    setReviews: (state, action) => {
      state.reviews = action.payload;
    },
    addRestaurant: (state, action) => {
      state.restaurants.push(action.payload);
    },
    updateRestaurant: (state, action) => {
      const index = state.restaurants.findIndex(
        (restaurant) => restaurant.id === action.payload.id
      );
      if (index !== -1) {
        state.restaurants[index] = action.payload;
      }
    },
    deleteRestaurant: (state, action) => {
      state.restaurants = state.restaurants.filter(
        (restaurant) => restaurant.id !== action.payload
      );
    },
    addReservation: (state, action) => {
      state.reservations.push(action.payload);
    },
    updateReservation: (state, action) => {
      const index = state.reservations.findIndex(
        (reservation) => reservation.id === action.payload.id
      );
      if (index !== -1) {
        state.reservations[index] = action.payload;
      }
    },
    deleteReservation: (state, action) => {
      state.reservations = state.reservations.filter(
        (reservation) => reservation.id !== action.payload
      );
    },
    addReview: (state, action) => {
      state.reviews.push(action.payload);
    },
  },
});

// Export the actions
export const {
  setLoading,
  setError,
  setUsers,
  setRestaurants,
  setReservations,
  setPayments,
  setReviews,
  addRestaurant,
  updateRestaurant,
  deleteRestaurant,
  addReservation,
  updateReservation,
  deleteReservation,
  addReview,
} = dbSlice.actions;

// Export the reducer
export default dbSlice.reducer;
