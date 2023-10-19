import { EMAIL_PATTERN } from './constants';

export const validateEmail = (email) => {
  return String(email).toLowerCase().match(EMAIL_PATTERN);
};
