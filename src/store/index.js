import { configureStore } from '@reduxjs/toolkit';

import modalsReducer from './modalsSlice';
import authReducer from './authSlice';
import filterReducer from './filterSlice';
import { authApi } from '../api/authApi';
import { userApi } from '../api/userApi';
import { schoolApi } from '../api/schoolApi';
import { kindergartenApi } from '../api/kindergartenApi';
import { schoolReviewsApi } from '../api/schoolReviewsApi';
import { kindergartenReviewsApi } from '../api/kindergartenReviewsApi';
import { filterApi } from '../api/filterApi';

export default configureStore({
  reducer: {
    modals: modalsReducer,
    auth: authReducer,
    filter: filterReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [schoolApi.reducerPath]: schoolApi.reducer,
    [kindergartenApi.reducerPath]: kindergartenApi.reducer,
    [schoolReviewsApi.reducerPath]: schoolReviewsApi.reducer,
    [kindergartenReviewsApi.reducerPath]: kindergartenReviewsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [filterApi.reducerPath]: filterApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      userApi.middleware,
      schoolApi.middleware,
      kindergartenApi.middleware,
      schoolReviewsApi.middleware,
      kindergartenReviewsApi.middleware,
      userApi.middleware,
      filterApi.middleware
    ),
});
