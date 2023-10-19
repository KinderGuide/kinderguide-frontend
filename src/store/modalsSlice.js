import { createSlice } from '@reduxjs/toolkit';

// Начальный стейт вынесен в переменную
const initialState = {
  isOpenRegisterModal: false,
  isOpenRegisterSuccessModal: false,
  isOpenLoginModal: false,
  isOpenPasswordRecoveryModal: false,
  isOpenPasswordRecoveryConfirmModal: false,
  isOpenPasswordRecoverySuccessModal: false,
  isOpenLoginToFavoritePopup: false,
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
  },
});

// Экспорт экшенов для вызова диспетчера
export const {
  openRegisterModal,
  openRegisterSuccessModal,
  openLoginModal,
  openPasswordRecoveryModal,
  openPasswordRecoveryConfirmModal,
  openPasswordRecoverySuccessModal,
  openLoginToFavoritePopup,
  closeAllModals,
} = modalsSlice.actions;

export default modalsSlice.reducer;
