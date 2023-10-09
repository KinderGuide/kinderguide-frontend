import { Popup } from '../Popup';

export function ImagePopup({ image, onClose }) {
  const checkImage = image !== '';

  return (
    <Popup isOpen={image} name='image' onClose={onClose}>
      <img
        className='popup__image'
        src={checkImage ? image : '#'}
        alt='картинка'
      />
    </Popup>
  );
}
