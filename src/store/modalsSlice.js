import { createSlice } from '@reduxjs/toolkit';

// Начальный стейт вынесен в переменную
const initialState = {
  isOpenRegisterModal: false,
  isOpenRegisterSuccessModal: false,
  isOpenLoginModal: false,
  isOpenExitProfileModal: false,
  isOpenPasswordRecoveryModal: false,
  isOpenPasswordRecoveryConfirmModal: false,
  isOpenPasswordRecoverySuccessModal: false,
  isOpenLoginToFavoritePopup: false,
  isOpenNewsModal: false,
  isOpenAddSchoolReviewModal: false,
  isOpenAddKindergartenReviewModal: false,
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState: initialState,
  reducers: {
    closeAllModals(state) {
      for (const key in state) {
        state[key] = false;
      }
    },
    openRegisterModal(state) {
      state.isOpenRegisterModal = true;
    },
    openRegisterSuccessModal(state) {
      state.isOpenRegisterSuccessModal = true;
    },
    openLoginModal(state) {
      state.isOpenLoginModal = true;
    },
    openExitProfileModal(state) {
      state.isOpenExitProfileModal = true;
    },
    openPasswordRecoveryModal(state) {
      state.isOpenPasswordRecoveryModal = true;
    },
    openPasswordRecoveryConfirmModal(state) {
      state.isOpenPasswordRecoveryConfirmModal = true;
    },
    openPasswordRecoverySuccessModal(state) {
      state.isOpenPasswordRecoverySuccessModal = true;
    },
    openLoginToFavoritePopup(state, action) {
      state.isOpenLoginToFavoritePopup = true;
      state.loginToFavoritePopupData = action.payload;
    },
    openNewsModal(state) {
      state.isOpenNewsModal = true;
    },
    openAddSchoolReviewModal(state) {
      state.isOpenAddSchoolReviewModal = true;
    },
    openAddKindergartenReviewModal(state) {
      state.isOpenAddKindergartenReviewModal = true;
    },
  },
});

// Экспорт экшенов для вызова диспетчера
export const {
  openRegisterModal,
  openRegisterSuccessModal,
  openLoginModal,
  openExitProfileModal,
  openPasswordRecoveryModal,
  openPasswordRecoveryConfirmModal,
  openPasswordRecoverySuccessModal,
  openLoginToFavoritePopup,
  closeAllModals,
  openNewsModal,
  openAddSchoolReviewModal,
  openAddKindergartenReviewModal,
} = modalsSlice.actions;

export default modalsSlice.reducer;
