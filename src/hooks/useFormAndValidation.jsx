import { useEffect, useState, useCallback } from 'react';
import { validateEmail } from '../constants/utils';

// Хук проверяет ТОЛЬКО соответствие  инпутов их атрибутам.
// Не проверяет чекбоксы и  идентичность паролей
// Их проверку надо делать уже непосредственно в компоненте самой формы
export function useFormAndValidation() {
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({});

  const onChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
    setIsValid(e.target.closest('form').checkValidity());

    // Емейл валидируем отдельно и выставляем ошибку
    if (e.target.name === 'email') {
      if (!validateEmail(e.target.value)) {
        setErrors({
          ...errors,
          [e.target.id]: 'E-mail введен некорректно. Пример: edukids@yandex.ru',
        });
      } else {
        setErrors({
          ...errors,
          [e.target.id]: '',
        });
      }
      return;
    }
    // Ошибку повтора пароля обрабатываем отдельно в юзЕфеекте
    if (
      e.target.id === 'password-repeat' ||
      e.target.id === 'password-recovery-form-password-repeat'
    ) {
      return;
    }

    if (e.target.id === 'phone') {
      return;
    }

    setErrors({
      ...errors,
      [e.target.id]: e.target.validationMessage,
    });
  };

  // эффект срабатывает только если в форме есть инпут password-repeat
  // выставляет ошибку при несовпадении паролей
  useEffect(() => {
    if (data['password-repeat'] || data['password']) {
      if (data?.password !== data['password-repeat']) {
        setErrors({
          ...errors,
          'password-repeat': 'Пароли не совпадают',
        });
      } else
        setErrors({
          ...errors,
          'password-repeat': '',
        });
    }
  }, [data, errors]);

  const resetForm = useCallback(
    (newFormValue = {}, newErrors = {}, newIsValid = false) => {
      setData(newFormValue);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setData, setErrors, setIsValid]
  );

  return {
    data,
    setData,
    onChange,
    errors,
    setErrors,
    isValid,
    setIsValid,
    resetForm,
  };
}
